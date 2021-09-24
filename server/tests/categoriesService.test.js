import { parseAndSortCategories } from '../utils/categoriesService';
const { queryResponse } = require("./responses.json");

describe('CategoriesService', () => {
    test('returns sortedInformation in available_filters', () => {
        let unsortedList = {...queryResponse}
        let expectedResult = ['Otros', 'Hogar, Muebles y Jardín', 'Industrias y Oficinas'];
        let result = parseAndSortCategories(unsortedList);
        expect(result).toEqual(expectedResult);
    })
    test('returns sortedInformation in filters', () => {
        let unsortedList = {...queryResponse, filters: queryResponse.available_filters, available_filters: []}
        let expectedResult = ['Otros', 'Hogar, Muebles y Jardín', 'Industrias y Oficinas'];
        let result = parseAndSortCategories(unsortedList);
        expect(result).toEqual(expectedResult);
    })
})