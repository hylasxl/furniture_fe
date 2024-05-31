import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Fragment } from "react/jsx-runtime";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { convertToVND } from "../../utils/utils.function";
import Button from "@mui/material/Button";
import { order } from "../../services/productService";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
    const navigate = useNavigate()
    const items = JSON.parse(localStorage.getItem("cart") as string)
    let totalAmount = 0
    items.forEach((element: { quantity: number; price: number; }) => {
        totalAmount += element.quantity * element.price
    });
    const userId = useSelector((state: RootState) => state.auth.user._id)

    const handleOrder = async () => {
        const response = await order({ ...items, userId })
        const resData = response.data
        if (resData.RC === 1) {
            toast.success(resData.RM);
            navigate('/');
        } else {
            toast.error(resData.RM);
        }
    }
    return (
        <Fragment>
            <Header></Header>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Tên sản phẩm</TableCell>
                            <TableCell align="right">Đơn giá</TableCell>
                            <TableCell align="right">Số lượng</TableCell>
                            <TableCell align="right">Thành tiền</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {items.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{convertToVND(row.price)}</TableCell>
                                <TableCell align="right">{row.quantity}</TableCell>
                                <TableCell align="right">{convertToVND(row.price * row.quantity)}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <div>
                <h3 style={{ textAlign: "right", marginRight: 50 }}>Tổng tiền: {convertToVND(totalAmount)}</h3>
            </div>

            <Button onClick={handleOrder}>Đặt Hàng</Button>
            <Footer></Footer>
        </Fragment>
    )
}

export default CartPage