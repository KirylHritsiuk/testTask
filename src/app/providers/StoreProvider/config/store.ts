import { configureStore } from '@reduxjs/toolkit';
import { rtkApi } from '@/shared/api/rtkApi';
import { StateSchema } from '..';
import { currencyActions, currencyReducer } from '@/features/Currency';


export function createReduxStore(
    initialState?: StateSchema,
) {
    const rootReducers = {
        currency: currencyReducer,
        [rtkApi.reducerPath]: rtkApi.reducer,
    };


    const store = configureStore({
        reducer: rootReducers,
        devTools: import.meta.env.MODE !== 'production',
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
            }).concat(rtkApi.middleware),
    });

    return store;
}


export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
export type RootState = ReturnType<ReturnType<typeof createReduxStore>['getState']>;

export const rootActions = {
    ...currencyActions,
};