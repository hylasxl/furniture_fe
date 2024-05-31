import { Fragment } from 'react/jsx-runtime';
import { Grid, Link } from '@mui/material';
import { TextField, Autocomplete, Button, Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { removeAuthenticationState } from '../../store/slice/auth.slice';

import styles from './Header.module.scss';
import { RootState } from '../../store';
import { toast } from 'react-toastify';

import { NORMAL_ACCOUNT_TYPE } from '../../utils/constants';

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [cartItemsCount, setCartItemsCount] = useState(0);
    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
    const accountType = useSelector((state: RootState) => state.auth.user?.accountType);

    useEffect(() => {
        const carts = JSON.parse(localStorage.getItem("cart") as string)
        if (carts) {
            setCartItemsCount(carts.length)
        }
    }, [])

    const handleLoginButtonClick = () => {
        navigate('/login');
    };

    const handleLogoutButtonClick = () => {
        try {
            dispatch(removeAuthenticationState());
            toast.success('Sign out successfully');
            navigate('/');
        } catch (err) {
            toast.error('Cannot sign out');
        }
        localStorage.removeItem("cart")
        navigate('/');
    };

    const handleAdminPageClick = () => {
        return navigate('/admin/account');
    };
    const handleCartClick = () => {
        return navigate('/cart')
    }
    return (
        <Fragment>
            <Grid className={styles.navigation_container} container spacing={2}>
                <Grid item xs={4}>
                    <Link href='/'>
                        <div className={styles.logo_container}>
                            <img
                                src='https://media.loveitopcdn.com/26706/thumb/noi-that-viva-he-thong-cua-hang-noi-that-do-go-cao-cap-gia-re-cho-cong-trinh.jpg'
                                alt='Log'
                                className={styles.main_logo}
                            />
                        </div>
                    </Link>
                </Grid>
                <Grid item xs={4}>
                    <Autocomplete
                        freeSolo
                        disableClearable
                        renderInput={(params) => {
                            return (
                                <TextField
                                    {...params}
                                    label='Nhập từ khóa'
                                    InputProps={{
                                        ...params.InputProps,
                                        type: 'search'
                                    }}
                                    className={styles.search_field}
                                />
                            );
                        }}
                        options={[]}
                    ></Autocomplete>
                </Grid>
                <Grid item xs={4} className={styles.login_and_cart_section}>
                    <Link>
                        <Button
                            className={styles.login_button}
                            sx={{
                                display:
                                    accountType !== NORMAL_ACCOUNT_TYPE && isAuthenticated ? 'inline-block' : 'none'
                            }}
                            onClick={handleAdminPageClick}
                        >
                            Admin
                        </Button>
                    </Link>
                    <Badge badgeContent={cartItemsCount} color='primary' max={9} className={styles.badge}>
                        <ShoppingCartIcon
                            className={styles.cart_icon}
                            style={{ fontSize: '30px' }}
                            onClick={handleCartClick}
                        />
                    </Badge>
                    <Link>
                        <Button
                            className={styles.login_button}
                            onClick={() => handleLoginButtonClick()}
                            sx={{
                                display: isAuthenticated ? 'none' : 'inline-block'
                            }}
                        >
                            Login
                        </Button>
                    </Link>
                    <Link>
                        <Button
                            className={styles.login_button}
                            onClick={() => handleLogoutButtonClick()}
                            sx={{
                                display: isAuthenticated ? 'inline-block' : 'none'
                            }}
                        >
                            Logout
                        </Button>
                    </Link>
                </Grid>
            </Grid>
        </Fragment>
    );
};

export default Header;
