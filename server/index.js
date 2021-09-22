const { default: axios } = require('axios');
const express = require('express');
const cors = require('cors');
const { ProductDetailModel } = require('./models/productDetail.model');
const { SearchResultModel } = require('./models/searchResult.model');
const app = express();
const port = 3001;
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
    let url = formUrl(`sites/MLA/search?q=:${req.query.q}`);
    let response = await axios.get(url);

    let parsedResponse = new SearchResultModel({ ...response.data });
    res.send(parsedResponse);
    return;
})

app.get('/api/items/:id', async (req, res) => {
    let urlItemInformation = formUrl(`items/${req.params.id}`); //MLC584783942
    let itemInformation  = await axios.get(urlItemInformation);

    let urlItemDescription = formUrl(`items/${req.params.id}/description`);
    let itemDescription  = await axios.get(urlItemDescription);

    let parsedResponse = new ProductDetailModel({...itemInformation.data, ...itemDescription.data})
    res.send(parsedResponse);
    return;
})

// Catch 404
app.use(function(req, res) {
    res.status(404);
    res.type('txt').send('Not found');
})

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
})

module.exports = app;