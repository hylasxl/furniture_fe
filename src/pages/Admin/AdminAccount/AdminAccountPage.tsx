import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import { Fragment } from "react";
import AdminNavigation from "../../../components/AdminNavgiation/AdminNavigation";
import { useEffect, useState } from "react";
import { fetchAllOrder } from "../../../services/productService";
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useSelector } from "react-redux";
import { RootState } from "../../../store";

const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 200 },
    { field: "email", headerName: "Email", width: 200 },
    { field: "firstName", headerName: "First Name", width: 200 },
    { field: "lastName", headerName: "Last Name", width: 200 },
    { field: "phone", headerName: "Phone", width: 200 },
    { field: "Type", headerName: "Type", width: 70 },
    { field: "isActivated", headerName: "Activate", width: 100 },
];

const AdminAccountPage: React.FC = () => {
    const accountList = useSelector((state: RootState) => state.account.accountList);
    const rows = accountList.map((account, index) => ({
        id: account.id || index,
        email: account.email,
        firstName: account?.accountInfo?.firstName,
        lastName: account?.accountInfo?.lastName,
        phone: account?.accountInfo?.phone,
        Type: account.loginType,
        isActivated: account.isActivated ? "Yes" : "No",
    }));

    return (
        <Fragment>
            <AdminNavigation />
            <div style={{ height: 600, width: '100%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                />
            </div>
        </Fragment>
    );
};

export default AdminAccountPage;
