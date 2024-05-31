import React, { Fragment, useState, useEffect } from "react";
import { Select, MenuItem, FormControl, InputLabel, SelectChangeEvent, TextField, Button } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import AdminNavigation from "../../../components/AdminNavgiation/AdminNavigation";
import { addNewProduct } from "../../../services/productService";
import styles from "./AdminProductPage.module.scss";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchAllProducts } from "../../../services/productService";
import { addProduct, setProduct } from "../../../store/slice/product.slice";

interface ProductInfo {
    categoryId: string,
    productName: string;
    price: number | string;
    quantity: number | string;
    manufacturer: string;
    color: string;
    dimensions: {
        width: number | string;
        length: number | string;
        height: number | string;
    };
    description: string;
    image: File | null;
}

const AdminProductPage_AddNew = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const listofCate = useSelector((state: RootState) => state.category.categories);
    const mainCategories = listofCate.map((item) => item.category as string);

    const [mainCate, setMainCate] = useState<string>(mainCategories[0] || "");
    const [subCateId, setSubCateId] = useState<string>("");
    const [productInfo, setProductInfo] = useState<ProductInfo>({
        categoryId: "",
        productName: "",
        price: "",
        quantity: "",
        manufacturer: "Nội thất Viva",
        color: "",
        dimensions: {
            width: "",
            length: "",
            height: ""
        },
        description: "No Description",
        image: null // Store the image file
    });

    useEffect(() => {
        if (mainCate) {
            const selectedMainCategory = listofCate.find((cate) => cate.category === mainCate);
            if (selectedMainCategory && selectedMainCategory.specificCategories.length > 0) {
                setSubCateId(selectedMainCategory.specificCategories[0]._id);
                setProductInfo((prev) => ({
                    ...prev,
                    categoryId: selectedMainCategory.specificCategories[0]._id
                }))
            }
        }
    }, [mainCate, listofCate]);

    const handleMainChange = (event: SelectChangeEvent<string>) => {
        setMainCate(event.target.value);
    };

    const handleSubChange = (event: SelectChangeEvent<string>) => {
        setSubCateId(event.target.value);
        setProductInfo((prev) => ({
            ...prev,
            categoryId: event.target.value
        }))
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setProductInfo((prevInfo) => ({
            ...prevInfo,
            [name]: value
        }));
    };

    const handleDimensionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setProductInfo((prevInfo) => ({
            ...prevInfo,
            dimensions: {
                ...prevInfo.dimensions,
                [name]: value
            }
        }));
    };

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files && event.target.files[0];
        setProductInfo((prevInfo) => ({
            ...prevInfo,
            image: file
        }));
    };

    const handleSubmitButton = async () => {
        const isAnyFieldEmptyOrNull = Object.values(productInfo).some(value => {
            if (typeof value === 'object') {
                return Object.values(value).some(innerValue => innerValue === "" || innerValue === null);
            } else {
                return value === "" || value === null;
            }
        });

        if (isAnyFieldEmptyOrNull) {
            toast.warn("Please fill in all fields.")
            return;
        }

        const returnedData = await addNewProduct(productInfo);
        const resData = returnedData.data
        console.log(resData);
        
        if (resData.RC === 1) {
            toast.success(resData.RM);
            dispatch(addProduct(resData.RD[0]))
            navigate('/admin/product');
        } else {
            toast.error(resData.RM);
        }
    }

    const selectedMainCategory = listofCate.find((cate) => cate.category === mainCate);
    const subCategories = selectedMainCategory ? selectedMainCategory.specificCategories : [];

    return (
        <Fragment>
            <AdminNavigation />
            <div className={styles.wf_data_container}>
                <FormControl fullWidth margin="normal">
                    <InputLabel>Main Category</InputLabel>
                    <Select
                        value={mainCate}
                        onChange={handleMainChange}
                        label="Main Category"
                    >
                        {mainCategories.map((category) => (
                            <MenuItem key={category} value={category}>
                                {category}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                <FormControl fullWidth margin="normal" disabled={!mainCate}>
                    <InputLabel>Sub Category</InputLabel>
                    <Select
                        value={subCateId}
                        onChange={handleSubChange}
                        label="Sub Category"
                    >
                        {subCategories.map((subCategory) => (
                            <MenuItem key={subCategory._id} value={subCategory._id}>
                                {subCategory.name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                <div className={styles.product_info}>
                    <TextField
                        label="Tên sản phẩm"
                        name="productName"
                        value={productInfo.productName}
                        onChange={handleInputChange}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Giá"
                        name="price"
                        value={productInfo.price}
                        onChange={handleInputChange}
                        fullWidth
                        type="number"
                        margin="normal"
                    />
                    <TextField
                        label="Số lượng"
                        type="number"
                        name="quantity"
                        value={productInfo.quantity}
                        onChange={handleInputChange}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Nhà sản xuất"
                        name="manufacturer"
                        value={productInfo.manufacturer}
                        onChange={handleInputChange}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Màu sắc"
                        name="color"
                        value={productInfo.color}
                        onChange={handleInputChange}
                        fullWidth
                        margin="normal"
                    />
                    <div style={{ display: 'flex' }}>
                        <TextField
                            label="Chiều rộng"
                            type="number"
                            name="width"
                            value={productInfo.dimensions.width}
                            onChange={handleDimensionChange}
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            label="Chiều dài"
                            type="number"
                            name="length"
                            value={productInfo.dimensions.length}
                            onChange={handleDimensionChange}
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            label="Chiều cao"
                            type="number"
                            name="height"
                            value={productInfo.dimensions.height}
                            onChange={handleDimensionChange}
                            fullWidth
                            margin="normal"
                        />
                    </div>
                    <TextField
                        label="Mô tả"
                        name="description"
                        value={productInfo.description}
                        onChange={handleInputChange}
                        fullWidth
                        margin="normal"
                    />
                    <div>
                        <label htmlFor="file-input">
                            <Button variant="contained" component="span">
                                Choose Image
                            </Button>
                        </label>
                        <input
                            id="file-input"
                            type="file"
                            hidden
                            onChange={handleImageChange}
                            accept="image/*"
                        />
                    </div>
                    <Button onClick={handleSubmitButton}>
                        Submit
                    </Button>
                </div>
            </div>
        </Fragment>
    );
};

export default AdminProductPage_AddNew;
