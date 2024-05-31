import styles from './LoginPage.module.scss';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';
import { Fragment } from 'react/jsx-runtime';
import { useState } from 'react';
import { Button, TextField, Link } from '@mui/material';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { provider, auth } from '../../../firebase';
import GoogleButton from 'react-google-button';
import { Auth_Login, Auth_LoginwithGoogle } from '../../../services/authService';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { returnData } from '../../../types/resData';
import { setAuthenticationState } from '../../../store/slice/auth.slice';
import { IUser } from '../../../types/user.type';

interface LoginData {
    email: string;
    password: string;
}

const loginInitData: LoginData = {
    email: '',
    password: ''
};

const LoginPage = () => {
    const [loginValue, setLoginValue] = useState<LoginData>(loginInitData);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setLoginValue((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleGoogleAuthLogin = () => {
        signInWithPopup(auth, provider)
            .then(async (result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential?.accessToken;
                const user = result?.user;
                const response = await Auth_LoginwithGoogle(token, user);
                const resData = response.data?.modifiedReturnedData;
                if (resData.RC === 1) {
                    toast.success(resData.RM);
                } else return toast.warning(resData.RM);
                dispatch(setAuthenticationState({ ...resData.RD, loginType: 'Google' }));
                navigate('/');
            })
            .catch((error) => {
                console.error('Error during sign-in:', error);
            });
    };

    const handleEmailLogin = async () => {
        if (loginValue.email.trim() === '') {
            toast.warning('Email is missing');
            return;
        }
        if (loginValue.password.trim() === '') {
            toast.warning('Password is missing');
            return;
        }
        const response = await Auth_Login(loginValue);
        const resData: returnData<Omit<IUser, 'loginType'>> =
            response.data?.returnedData || response.data?.modifiedReturnedData;

        if (resData.RC === 1) {
            toast.success(resData.RM);
        } else return toast.warning(resData.RM);

        const dispatchData: IUser = { ...resData.RD, loginType: 'Normal' };

        dispatch(setAuthenticationState(dispatchData));
        navigate('/');
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            handleEmailLogin();
        }
    };

    return (
        <Fragment>
            <Header />

            <div className={styles.login_container}>
                <div className={styles.login_form}>
                    <div className={styles.login_data_group}>
                        <p>Email</p>
                        <TextField
                            name='email'
                            variant='standard'
                            value={loginValue.email}
                            onChange={handleChange}
                            fullWidth
                            autoFocus
                            placeholder='Email'
                            autoComplete='off'
                            onKeyDown={handleKeyDown}
                        />
                    </div>
                    <div className={styles.login_data_group}>
                        <p>Mật khẩu</p>
                        <TextField
                            name='password'
                            type='password'
                            variant='standard'
                            value={loginValue.password}
                            onChange={handleChange}
                            fullWidth
                            placeholder='Mật khẩu'
                            autoComplete='off'
                            onKeyDown={handleKeyDown}
                        />
                    </div>
                    <hr />
                    <Button
                        variant='outlined'
                        style={{
                            width: 240
                        }}
                        onClick={handleEmailLogin}
                    >
                        Đăng nhập
                    </Button>
                    <div className={styles.google_login_button}>
                        <GoogleButton label='Đăng nhập bằng Google' onClick={handleGoogleAuthLogin}></GoogleButton>
                    </div>
                    <div>
                        <Link href='/register' marginTop={30}>
                            Đăng ký tài khoản mới
                        </Link>
                    </div>
                </div>
            </div>

            <Footer />
        </Fragment>
    );
};

export default LoginPage;
