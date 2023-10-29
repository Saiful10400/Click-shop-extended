import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./RouterProvider";
import DataProvider from "./components/DataProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <DataProvider>
    <RouterProvider router={router}></RouterProvider>
  </DataProvider>
);
