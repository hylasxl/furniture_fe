import axios from "../configs/axios.config"

const fetchAllProducts = async () => {
    return await axios.get('/product/fetch-all-products')
}

const addNewProduct = async (productInfo: any) => {
    const formData = new FormData()
    formData.append("specificCategoryId", productInfo.categoryId)
    formData.append("name", productInfo.productName);
    formData.append("originalPrice", productInfo.price);
    formData.append("stock", productInfo.quantity);
    formData.append("producer", productInfo.manufacturer);
    formData.append("color", productInfo.color);
    formData.append("description", productInfo.description);
    formData.append("thumbnailURL", productInfo.image);


    const dimensions = productInfo.dimensions;
    formData.append("size.width", dimensions.width);
    formData.append("size.length", dimensions.length);
    formData.append("size.height", dimensions.height);

    return await axios.post('/product/add-new-product', formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    })
}

const order = async (orderData: any) => {
    return await axios.post('/product/order', orderData)
}

const fetchAllOrder = async()=>{
    return await axios.get('/product/get-order')
}
export { fetchAllProducts, addNewProduct, order, fetchAllOrder }