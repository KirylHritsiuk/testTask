
import { rtkApi } from '@/shared/api/rtkApi';
import { CurrencyResponseSchema } from '../model/types';
import { CurrencySchema } from '@/entities/Currency';


const currencyApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getAllCurrencies: build.query<CurrencySchema[], void>({
      query: () => ('/currencies/'),
      transformResponse: (response: CurrencyResponseSchema) => response.data,
      providesTags: (result) =>
        result
          ? [...result.map(({ id }) => ({ type: 'currencies' as const, id })), { type: 'currencies', id: 'LIST' }]
          : [{ type: 'currencies', id: 'LIST' }],
      keepUnusedDataFor: 60 * 60 * 24,
    }),

  }),

});

export const { useGetAllCurrenciesQuery } = currencyApi;
export const { endpoints } = currencyApi;