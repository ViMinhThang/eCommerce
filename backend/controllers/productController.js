import Product from "../models/productModel.js"



const getProduct = async (req, res) => {
    const sort = req.query
    console.log(req)
    let sortOptions = {}

    if (sort === 'price_asc') {
        sortOptions = { price: 1 }; // Sort by price in ascending order
    } else if (sort === 'price_desc') {
        sortOptions = { price: -1 }; // Sort by price in descending order
    } else if (sort === 'newest') {
        sortOptions = { createdAt: -1 }; // Sort by newest (assuming you have a createdAt field)
    } else if (sort === 'best_selling') {
        sortOptions = { sold: -1 }; // Sort by best-selling products (assuming you have a "sold" field)
    }
    const products = await Product.find().sort(sortOptions)
    res.json(products)
}


export {
    getProduct
}