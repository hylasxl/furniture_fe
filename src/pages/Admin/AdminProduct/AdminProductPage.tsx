import { Fragment } from 'react/jsx-runtime';
import styles from './AdminProductPage.module.scss';
import AdminNavigation from '../../../components/AdminNavgiation/AdminNavigation';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { getNameById } from '../../../utils/utils.function';
import { IProductRow } from '../../../types/product.type';
import { Button } from '@mui/material';

const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "name", headerName: "Name", width: 400 },
    { field: "category", headerName: "Category", width: 150 },
    { field: "price", headerName: "Price", width: 100 },
    { field: "stock", headerName: "Stock", width: 70 },
    { field: "producer", headerName: "Producer", width: 100 },
    { field: "color", headerName: "Color", width: 100 },
    { field: "size", headerName: "Size", width: 300 },
];

const AdminProductPage = () => {
    const productData = useSelector((state: RootState) => state.product.products);
    const categories = useSelector((state: RootState) => state.category.categories);

    const rows: IProductRow[] = productData.map((item) => {
        const categoryId = item.specificCategoryId;
        const categoryName = getNameById(categoryId, categories);
        const size = item.size
            ? `${item.size.length || 0}x${item.size.width || 0}x${item.size.height || 0}`
            : 'N/A';

        return {
            id: item._id,
            name: item.name,
            category: categoryName,
            price: item.currentPrice,
            stock: item.stock,
            producer: item.producer,
            color: item.color,
            size: size,
        };
    });

    return (
        <Fragment>
            <AdminNavigation />
            <div className={styles.wf_data_container}>
                <Button
                    variant="contained"
                    color="success"
                    style={{ marginBottom: 20 }}
                    href="/admin/product/add-new"
                >
                    Add New Product
                </Button>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 5 },
                        },
                    }}
                    pageSizeOptions={[5, 10]}
                />
            </div>
        </Fragment>
    );
};

export default AdminProductPage;
