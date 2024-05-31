import axios from '../configs/axios.config';

const fetchAllAccounts = async () => {
    return await axios.get('/account/fetch-all-accounts');
};

export { fetchAllAccounts };
