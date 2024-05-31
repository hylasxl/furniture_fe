import styles from './RegisterPage.module.scss';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';
import { Fragment } from 'react/jsx-runtime';
import { useState } from 'react';
import { Button, TextField } from '@mui/material';
import { Auth_Register } from '../../../services/authService';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
export interface RegisterData {
    name: string;
    email: string;
    phone: string;
    password: string;
    confirm_password: string;
}

const loginInitData: RegisterData = {
    email: '',
    password: '',
    phone: '',
    confirm_password: '',
    name: ''
};

const RegisterPage = () => {
    const [loginValue, setLoginValue] = useState<RegisterData>(loginInitData);
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setLoginValue((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleRegister = async () => {
        try {
            const response = await Auth_Register(loginValue);
            const resData = response.data?.returnedData;
            if (resData.RC === 1) {
                toast.success(resData.RM);
                navigate('/');
            } else {
                toast.error(resData.RM);
            }
        } catch (error) {
            toast.error(String(error))
        }
    };

    return (
        <Fragment>
            <Header />

            <div className={styles.login_container}>
                <div className={styles.login_form}>
                    <div className={styles.login_data_group}>
                        <p>Họ tên</p>
                        <TextField
                            name='name'
                            variant='standard'
                            value={loginValue.name}
                            onChange={handleChange}
                            fullWidth
                            autoFocus
                            placeholder='Họ tên'
                        />
                    </div>
                    <div className={styles.login_data_group}>
                        <p>Số điện thoại</p>
                        <TextField
                            name='phone'
                            variant='standard'
                            value={loginValue.phone}
                            onChange={handleChange}
                            fullWidth
                            placeholder='Số điện thoại'
                        />
                    </div>
                    <div className={styles.login_data_group}>
                        <p>Email</p>
                        <TextField
                            name='email'
                            variant='standard'
                            value={loginValue.email}
                            onChange={handleChange}
                            fullWidth
                            placeholder='Email'
                        />
                    </div>
                    <div className={styles.login_data_group}>
                        <p>Mật khẩu</p>
                        <TextField
                            name='password'
                            variant='standard'
                            value={loginValue.password}
                            onChange={handleChange}
                            fullWidth
                            placeholder='Mật khẩu'
                        />
                    </div>
                    <div className={styles.login_data_group}>
                        <p>Nhập lại mật khẩu</p>
                        <TextField
                            name='confirm_password'
                            variant='standard'
                            value={loginValue.confirm_password}
                            onChange={handleChange}
                            fullWidth
                            placeholder='Nhập lại mật khẩu'
                        />
                    </div>
                    <hr />
                    <Button
                        variant='outlined'
                        style={{
                            width: 240
                        }}
                        onClick={handleRegister}
                    >
                        Đăng ký
                    </Button>
                </div>
            </div>
            <Footer />
        </Fragment>
    );
};

export default RegisterPage;
