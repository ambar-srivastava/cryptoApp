import { configureStore } from "@reduxjs/toolkit";

import { cryptoApi } from "../Services/cryptoAPI";
import { cryptoNewsApi } from "../Services/cryptoNewsAPI";

export default configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    // getDefaultMiddleware().concat(cryptoApi.middleware),
    getDefaultMiddleware().concat(
      cryptoNewsApi.middleware,
      cryptoApi.middleware
    ),
});
