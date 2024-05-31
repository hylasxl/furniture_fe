import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Fragment } from "react/jsx-runtime";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { convertToVND } from "../../utils/utils.function";
import { useState } from "react";
import { Button } from "@mui/material";
const ProductPage = () => {

    const [quantity, setQuantity] = useState(1)

    const location = useLocation()
    const productId = location.state.id
    const productList = useSelector((state: RootState) => state.product.products)
    const foundItem = productList.find(item => item._id === productId)
    const img = foundItem?.thumbnailURL

    const handleIncreament = () => {
        setQuantity(prev => prev + 1)
    }

    const handleDecreasement = () => {
        if (quantity > 1) {
            setQuantity(prev => prev - 1)
        }
    }

    const handleAddCart = () => {
        const cartItems = localStorage.getItem("cart")
        if (!cartItems) {
            localStorage.setItem("cart", JSON.stringify([{
                id: productId,
                price: foundItem?.originalPrice,
                name: foundItem?.name,
                quantity
            }]))
        }
        else {
            const cart = JSON.parse(localStorage.getItem("cart") as string)
            const foundItemIndex = cart.findIndex((item: { id: any }) => item.id === productId);

            if (foundItemIndex !== -1) {
                cart[foundItemIndex].quantity += quantity;
                localStorage.setItem("cart", JSON.stringify(cart));
            } else {
                cart.push({
                    id: productId,
                    price: foundItem?.originalPrice,
                    name: foundItem?.name,
                    quantity
                })
                localStorage.setItem("cart",JSON.stringify(cart))
            }

        }

    }
    return (
        <Fragment>
            <Header />
            <div style={{ display: "flex", marginLeft: 200, gap: 10 }} >
                <div>
                    <img src={img} width={480} height={500} />
                </div>
                <div>
                    <h2>
                        {foundItem?.name}
                    </h2>
                    <p style={{ color: "#93272f", fontWeight: "bold", fontSize: 20 }}>{typeof foundItem?.originalPrice === 'number' ? convertToVND(foundItem?.originalPrice) : ""}</p>
                    <p>
                        Màu sắc: {foundItem?.color}
                    </p>
                    <p>
                        Kích thước : {foundItem?.size?.length}cm x {foundItem?.size?.width}cm x {foundItem?.size?.height}cm (dài x rộng x cao)
                    </p>
                    <p>
                        Tình trạng: {foundItem?.stock && foundItem?.stock > 0 ? "Còn hàng" : "Hết hàng"}
                    </p>
                    <div>
                        <button onClick={handleDecreasement}>-</button>
                        <input type="number" value={quantity} >
                        </input>
                        <button onClick={handleIncreament}>+</button>
                    </div>
                    <Button onClick={handleAddCart}>
                        Thêm vào giỏ hàng
                    </Button>
                </div>
            </div>
            <Footer />
        </Fragment>
    )
}

export default ProductPage