import axios from '../configs/axios.config';
import { RegisterData } from '../pages/Login/Register/RegisterPage';
import { ILoginData } from '../types/loginData.type';

const Auth_Register = async (data: RegisterData) => {
    return await axios.post('/auth/register', data);
};

const Auth_Login = async (data: ILoginData) => {
    return await axios.post('/auth/login', data);
};

const Auth_LoginwithGoogle = async (token: string | undefined, user: object) => {
    return await axios.post('/auth/login/google', {
        token,
        user
    });
};

export { Auth_Register, Auth_Login, Auth_LoginwithGoogle };
