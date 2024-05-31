import { Fragment } from 'react/jsx-runtime';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import styles from './HomePage.module.scss';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { fetchAllCategories } from '../../services/categoryService';
import { setCategory } from '../../store/slice/category.slice';
import { fetchAllAccounts } from '../../services/accountService';
import { setAccount } from '../../store/slice/account.slice';
import { fetchAllProducts } from '../../services/productService';
import { setProduct } from '../../store/slice/product.slice';
import { convertToVND } from '../../utils/utils.function';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const dispatch = useDispatch();

    const isCateLoaded = useSelector((state: RootState) => state.category.isLoaded);
    const isAccountLoaded = useSelector((state: RootState) => state.account.isLoaded);
    const isProcLoaded = useSelector((state: RootState) => state.product.isLoaded)

    const navigate = useNavigate()

    const [products, setProducts] = useState(useSelector((state: RootState) => state.product.products))
    const handleFetchCategory = async () => {
        return await fetchAllCategories();
    };

    const handleFetchAccount = async () => {
        return await fetchAllAccounts();
    };

    const handleFetchProduct = async () => {
        return await fetchAllProducts()
    }

    useEffect(() => {

        const fetchCate = async () => {
            const categories = await handleFetchCategory();
            console.log(categories.data.RD);
            dispatch(setCategory(categories.data.RD));
        };

        const fetchAccount = async () => {
            const accounts = await handleFetchAccount();
            dispatch(setAccount(accounts.data.RD));
        };

        const fetchProduct = async () => {
            const products = await handleFetchProduct()
            dispatch(setProduct(products.data.RD))
            setProducts(products.data.RD)
        }

        fetchCate()
        fetchAccount();
        fetchProduct()
    }, [dispatch]);

    const handleMoreClick = (id:string) => {
        navigate(`/product`,{
            state:{
                id
            }
        })
    }

    return (
        <Fragment>
            <Header />
            <div className={styles.main_img}>
                <img
                    src='https://media.loveitopcdn.com/26706/thumb/900x333/facebook-1702-x-630-01.png?zc=1'
                    alt='Main Image'
                />
            </div>
            <div>
                <h2 style={{ textAlign: "center", color: "#93272f" }}>Sản phẩm nổi bật</h2>
                <div style={{ display: "flex", justifyContent: "space-around", gap: 10, flexWrap: "wrap", paddingLeft: 150, paddingRight: 100 }}>
                    {products.map((item, index) => {
                        const imgURL = item.thumbnailURL
                        return (
                            <div key={index} style={{ border: "1px solid #93272f", width: 400, height: 175, display: "flex", flexDirection: "row" }}>
                                <div>
                                    <img src={imgURL} width={110} height={110} style={{ margin: "10px" }}></img>
                                </div>
                                <div>
                                    <p style={{ height: 70 }}>{item.name}</p>
                                    <p style={{ color: "#93272f", fontWeight: "bold" }}>{convertToVND(item.originalPrice)}</p>
                                    <Button variant='contained' id={item._id} onClick={()=>{
                                        handleMoreClick(item._id)
                                    }}>
                                        Xem thêm
                                    </Button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <Footer />
        </Fragment>
    );
};

export default HomePage;
