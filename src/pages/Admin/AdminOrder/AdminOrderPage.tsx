import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import { Fragment } from "react";
import AdminNavigation from "../../../components/AdminNavgiation/AdminNavigation";
import { useEffect, useState } from "react";
import { fetchAllOrder } from "../../../services/productService";
import { DataGrid, GridColDef } from '@mui/x-data-grid';

const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 400 },
    { field: "userid", headerName: "UserID", width: 400 },
    { field: "total", headerName: "Total", width: 200 },
    { field: "status", headerName: "Status", width: 170 },
];

interface Order {
    _id: string;
    accountId: string;
    totalPrice: number;
    status: string;
}

const AdminOrderPage: React.FC = () => {
    const [orders, setOrders] = useState<Order[]>([]);
    const [rows, setRows] = useState<any[]>([]);

    const handleGetOrders = async () => {
        try {
            const data = await fetchAllOrder();
            setOrders(data.data);
        } catch (error) {
            console.error("Failed to fetch orders:", error);
        }
    };

    useEffect(() => {
        handleGetOrders();
    }, []);

    useEffect(() => {
        if (orders.length > 0) {
            const rows = orders.map(order => ({
                id: order._id,
                userid: order.accountId,
                total: order.totalPrice,
                status: order.status,
            }));
            setRows(rows);
        }
    }, [orders]);

    return (
        <Fragment>
            <AdminNavigation />
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid rows={rows} columns={columns}  />
            </div>
        </Fragment>
    );
};

export default AdminOrderPage;
