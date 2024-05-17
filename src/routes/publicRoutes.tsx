import { Routes, Route } from 'react-router-dom';

import HomePage from '../pages/Home/HomePage';

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
    </Routes>
  );
};
export default PublicRoutes;
