import { createStore } from "@reduxjs/toolkit";
import reducers from "./index";

const store = createStore(
    reducers,
    {}
)
