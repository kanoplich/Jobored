import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IVacancies, IVacancy } from '../../types';

const API_KEY = 'GEU4nvd3rej*jeh.eqp';
const API_APP_ID =
  'v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://startup-summer-2023-proxy.onrender.com/2.0/',
    prepareHeaders: (headers) => {
      headers.set('x-secret-key', API_KEY);
      headers.set('X-Api-App-Id', API_APP_ID);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getVacancies: builder.query<IVacancies, void>({
      query: () => `/vacancies/`,
    }),
    getVacancyID: builder.query<IVacancy, number>({
      query: (id) => `/vacancies/${id}/`,
    }),
  }),
});

export const { useGetVacanciesQuery, useGetVacancyIDQuery } = apiSlice;
