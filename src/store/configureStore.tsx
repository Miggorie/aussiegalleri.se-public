import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "../reducers/root";

const store = configureStore(rootReducer);
