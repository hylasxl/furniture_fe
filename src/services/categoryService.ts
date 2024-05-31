import axios from '../configs/axios.config';

const fetchAllCategories = async () => {
    return await axios.get('/category/fetch-all-categories');
};

export { fetchAllCategories };
