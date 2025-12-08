import { configureStore, combineReducers } from "@reduxjs/toolkit";
import contactsReducer from "../features/contacts/contactsSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
  contactsState: contactsReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["contactsState"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
