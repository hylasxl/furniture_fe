import { useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const PrivateRoute: React.FC = () => {
    const navigate = useNavigate();
    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

    if (!isAuthenticated) {
        navigate('/login');
        return null;
    }

    return <Outlet />;
};

export default PrivateRoute;
