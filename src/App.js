import {Route, Routes} from "react-router-dom";
import Layout from "./pages/Layout/Layout";
import Home from "./pages/Home/Home";
import Catalog from "./pages/Catalog/Catalog";
import "./styles/style.scss"
import Register from "./pages/Auth/Register/Register";
<<<<<<< HEAD
import Basket from "./pages/Basket/Basket";
=======
import Product from "./pages/Product/Product";
>>>>>>> 71269d6 (add oneProduct)
function App() {
  return (
    <Routes>
      <Route path={"/"} element={<Layout/>}>
        <Route path={"/"} element={<Home/>}/>
        <Route path={"/catalog"} element={<Catalog/>}/>
<<<<<<< HEAD
        <Route path={"/basket"} element={<Basket/>}/>
=======
        <Route path={"/product/:id"} element={<Product/>}/>
>>>>>>> 71269d6 (add oneProduct)
      </Route>
        <Route path={"/register"} element={<Register/>}/>
    </Routes>
  );
}

export default App;
