import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import instance from '../../utils/api';
export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.furniturelelo.com/api/v1',
  }),
  endpoints(builder) {
    return {
      getAllProducts: builder.query({
        query: () => {
          return {
            url: `/public`,
            method: 'GET',
          };
        },
      }),
    };
  },
});

export const { useGetAllProductsQuery } = productsApi;
