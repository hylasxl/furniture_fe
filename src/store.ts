import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import authReducer from './store/slice/auth.slice';
import categoryReducer from './store/slice/category.slice';
import accountReducer from './store/slice/account.slice';
import productReducer from "./store/slice/product.slice"

// Persist configurations
const authPersistConfig = {
    key: 'auth',
    storage
};

const categoryPersistConfig = {
    key: 'category',
    storage
};

const accountPersistConfig = {
    key: 'account',
    storage
};

const productPersistConfig = {
    key: 'product',
    storage
};

const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);
const persistedCategoryReducer = persistReducer(categoryPersistConfig, categoryReducer);
const persistedAccountReducer = persistReducer(accountPersistConfig, accountReducer);
const persistedProductReducer = persistReducer(productPersistConfig, productReducer)

export const store = configureStore({
    reducer: {
        auth: persistedAuthReducer,
        category: persistedCategoryReducer,
        account: persistedAccountReducer,
        product: persistedProductReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
            }
        })
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
