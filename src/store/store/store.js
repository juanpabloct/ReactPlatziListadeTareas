import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import toolSlider from "../toolSlider/toolSlice";

import thunk from "redux-thunk";

const persistConfig = {
  key: "tools",
  storage,
};

const persistData = persistReducer(persistConfig, toolSlider);
const store = configureStore({
  reducer: {
    tools: toolSlider,
  },
  middleware: [thunk],
});
const PersitenciaStore = persistStore(store);
export { store, PersitenciaStore };
