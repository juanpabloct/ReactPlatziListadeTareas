import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web


import thunk from "redux-thunk";
import toolSlice from "../toolSlider/toolSlice";

const persistConfig = {
  key: "tools",
  storage,
};
const persistData = persistReducer(persistConfig, toolSlice);
const store = configureStore({
  reducer: {
    tools: persistData,
  },
  middleware: [thunk],
});
const PersitenciaStore = persistStore(store);
export { store, PersitenciaStore };
