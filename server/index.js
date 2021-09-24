const axios = require('axios');
const express = require('express');
const cors = require('cors');
const { ProductDetailModel } = require('./models/productDetail.model');
const { SearchResultModel } = require('./models/searchResult.model');

const app = express();
app.use(cors({ origin: 'http://localhost:3000' }));

const formUrl = (url) => {
    return `https://api.mercadolibre.com/${url}`
}

app.get("", (req, res) => {
    res.json({
      message: "API working",
    });
});
  
app.get('/api/items', async (req, res) => {
    try{
        let url = formUrl(`sites/MLA/search?q=${encodeURIComponent(req.query.q)}`);
        let response = await axios.get(url);
    
        let parsedResponse = new SearchResultModel({ ...response.data });
        res.send(parsedResponse);
        return;
    }
    catch(err){
        return err.response?.status ? res.status(err.response.status).send(err.response.data) : res.status(500).send("Unknown error")
    }
})

app.get('/api/items/:id', async (req, res) => {
    try{
        let urlItemInformation = formUrl(`items/${req.params.id}`); //MLC584783942
        let itemInformation  = await axios.get(urlItemInformation);

        let urlItemDescription = formUrl(`items/${req.params.id}/description`);
        let itemDescription  = await axios.get(urlItemDescription);

        // API request necessary in order to get the category name
        let urlCategory = formUrl(`categories/${itemInformation.data.category_id}`);
        let category  = await axios.get(urlCategory);

        let parsedResponse = new ProductDetailModel({
            ...itemInformation.data, 
            ...itemDescription.data, 
            category_name: category.data.name 
        })
        res.send(parsedResponse);
        return;
    }
    catch(err){
        return err.response?.status ? res.status(err.response.status).send(err.response.data) : res.status(500).send("Unknown error")
    }
})

// Catch 404
app.use(function(req, res) {
    res.status(404);
    res.type('txt').send('Not found');
})

module.exports = app;