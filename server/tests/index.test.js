const { SearchResultModel } = require("../models/searchResult.model");
const request = require("supertest");
const app = require("../index");
const axios = require("axios");
const { itemResponse, itemDetails, queryResponse } = require("./responses.json");
const { ProductDetailModel } = require("../models/productDetail.model");

describe("Test the root path", () => {
  test("It should response the GET method", done => {
    request(app)
      .get("/")
      .then(response => {
        expect(response.statusCode).toBe(200);
        expect(response.body.message).toBe("API working")
        done();
      });
  });
});

describe("Test search", () => {
    test("It should response the GET method", done => {
        const expectedParsedResponse = new SearchResultModel(queryResponse)
        const axiosSpy = jest.spyOn(axios, 'get').mockResolvedValue({ data: queryResponse })
        request(app)
            .get("/api/items?q=miau")
            .then(response => {
            expect(axiosSpy).toHaveBeenCalledWith("https://api.mercadolibre.com/sites/MLA/search?q=miau");
            expect(response.statusCode).toBe(200);
            expect(response.body).toEqual(expectedParsedResponse);
            done();
            });
    });
    test("It should failed with 500 if unknown error", done => {
        jest.spyOn(axios, 'get').mockRejectedValue({})
        request(app)
            .get("/api/items?q=miau")
            .then(response => {
            expect(response.statusCode).toBe(500);
            done();
            });
    });
});

describe("Test item details", () => {
    test("It should response the GET method", done => {
        const expectedParsedResponse = new ProductDetailModel({ ...itemResponse, ...itemDetails })
        const axiosSpyItem = jest.spyOn(axios, 'get').mockResolvedValue({ data: { ...itemResponse, ...itemDetails } });

        request(app)
            .get("/api/items/1234")
            .then(response => {
            expect(axiosSpyItem).toHaveBeenCalledWith("https://api.mercadolibre.com/items/1234");
            expect(axiosSpyItem).toHaveBeenCalledWith("https://api.mercadolibre.com/items/1234/description");
            expect(response.statusCode).toBe(200);
            expect(response.body).toEqual(expectedParsedResponse);
            done();
            });
    });
    test("It should failed with 500 if unknown error", done => {
        jest.spyOn(axios, 'get').mockRejectedValueOnce({})
        request(app)
            .get("/api/items/1234")
            .then(response => {
            expect(response.statusCode).toBe(500);
            done();
            });
    });
});

describe("Test 404 fall", () => {
    test("It should fall in 404 if not found", done => {
        request(app)
            .get("/wrong-path")
            .then(response => {
            expect(response.statusCode).toBe(404);
            done();
            });
    });
});