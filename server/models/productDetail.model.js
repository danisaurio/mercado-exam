class ProductDetailModel {

    constructor ({ id, title, currency_id, price, thumbnail, condition, shipping, sold_quantity, plain_text, category_name }){
        this.author = {
            name: "Daniela",
            lastname: "Vidal"
        },
        this.item = {
            id: id,
            title: title,
            price: {
                currency: currency_id,
                amount: price,
                decimals: 0,
            },
            picture: thumbnail,
            condition: condition,
            free_shipping: shipping.free_shipping || false,
            sold_quantity: sold_quantity,
            description: plain_text,
            category_name: category_name
        }
    }
}

module.exports = { ProductDetailModel };