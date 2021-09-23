const { parseAndSortCategories } = require("../utils/categoriesService")

class SearchResultModel {
    constructor (response){
        this.author = {
            name: "Daniela",
            lastname: "Vidal"
        },
        this.categories = parseAndSortCategories(response.available_filters.filter((filter) => filter.id === "category"));
        this.items = response.results.map((res) => new ItemModel(res))
    }
}

class ItemModel {
    constructor({ id, title, prices, price, thumbnail, condition, shipping }){
        this.id = id
        this.title = title
        this.price = {
            currency: prices.presentation?.display_currency,
            amount: price,
            decimals: 0
        }
        this.picture = thumbnail
        this.condition = condition
        this.free_shipping = shipping.free_shipping
    }
}

module.exports = { SearchResultModel, ItemModel}