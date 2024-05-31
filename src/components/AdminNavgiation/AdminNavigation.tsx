import { Fragment } from 'react/jsx-runtime';
import styles from './AdminNavigation.module.scss';
import { NavLink } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
const AdminNavigation = () => {
    return (
        <Fragment>
            <div className={styles.admin_navigation_container}>
                <div className={styles.admin_navigation_section_links}>
                    <NavLink to='/admin/account' className={({ isActive }) => (isActive ? styles.isActive : '')}>
                        <p>Accounts</p>
                    </NavLink>
                    <NavLink to='/admin/product' className={({ isActive }) => (isActive ? styles.isActive : '')}>
                        <p>Products</p>
                    </NavLink>
                    <NavLink to='/admin/order' className={({ isActive }) => (isActive ? styles.isActive : '')}>
                        <p>Orders</p>
                    </NavLink>
                </div>
                <div className={styles.admin_navigation_section_logout}>
                    <LogoutIcon htmlColor='white' />
                    <p>Sign out</p>
                </div>
            </div>
        </Fragment>
    );
};

export default AdminNavigation;
