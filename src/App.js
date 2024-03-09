import {Route, Routes} from "react-router-dom";
import Layout from "./pages/Layout/Layout";
import Home from "./pages/Home/Home";
import Catalog from "./pages/Catalog/Catalog";
import "./styles/style.scss"
import Register from "./pages/Auth/Register/Register";
import Favorites from "./pages/Favorites/Favorites";
import Product from "./pages/Product/Product";
import Login from "./pages/Auth/Login/Login";
function App() {
  return (
    <Routes>
      <Route path={"/"} element={<Layout/>}>
        <Route path={"/"} element={<Home/>}/>
        <Route path={"/catalog"} element={<Catalog/>}/>
        <Route path={"/product/:id"} element={<Product/>}/>
          <Route path={"/favorites"} element={<Favorites/>}/>
      </Route>
        <Route path={"/register"} element={<Register/>}/>
        <Route path={"/login"} element={<Login/>}/>
        <Route path={"/favorites"} element={<Favorites/>}/>
    </Routes>
  );
}

export default App;
