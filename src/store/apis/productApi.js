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
        query: (page) => {
          return {
            url: `/public?page=${page}`,
            method: 'GET',
          };
        },
      }),
    };
  },
});

export const { useGetAllProductsQuery } = productsApi;
