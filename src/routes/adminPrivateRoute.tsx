import { useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { NORMAL_ACCOUNT_TYPE } from '../utils/constants';
import { RootState } from '../store';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

const AdminPrivateRoute: React.FC = () => {
    const navigate = useNavigate();
    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
    const isAdmin = useSelector((state: RootState) => state.auth?.user?.accountType) !== NORMAL_ACCOUNT_TYPE;

    useEffect(() => {
        if (!(isAuthenticated && isAdmin)) {
            toast.error("You're not allowed to access this route");
            navigate('/', { replace: true });
        }
    }, [isAuthenticated, isAdmin, navigate]);

    if (!(isAuthenticated && isAdmin)) {
        return null;
    }

    return <Outlet />;
};

export default AdminPrivateRoute;
