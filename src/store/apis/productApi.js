import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
  endpoints(builder) {
    return {
      getAllProducts: builder.query({
        query: () => {
          return {
            url: `products`,
            method: 'GET',
          };
        },
      }),
    };
  },
});

export const { useGetAllProductsQuery } = productsApi;
