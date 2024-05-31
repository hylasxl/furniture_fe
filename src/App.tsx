import { BrowserRouter } from 'react-router-dom';
import { Fragment } from 'react/jsx-runtime';
import { ToastContainer, Slide } from 'react-toastify';
import PublicRoutes from './routes/publicRoutes';
import 'react-toastify/dist/ReactToastify.css';
import './main.scss';
import { Provider } from 'react-redux';
import { store, persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react';

function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Fragment>
                    <div className='app-container'>
                        <BrowserRouter>
                            <PublicRoutes />
                        </BrowserRouter>
                    </div>
                    <ToastContainer
                        position='top-right'
                        autoClose={2000}
                        hideProgressBar={false}
                        newestOnTop
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss={false}
                        draggable={false}
                        pauseOnHover={false}
                        theme='colored'
                        transition={Slide}
                    />
                </Fragment>
            </PersistGate>
        </Provider>
    );
}

export default App;
