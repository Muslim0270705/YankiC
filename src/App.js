import {Route, Routes} from "react-router-dom";
import Layout from "./pages/Layout/Layout";
import Home from "./pages/Home/Home";
import Catalog from "./pages/Catalog/Catalog";
import "./styles/style.scss"
import Register from "./pages/Auth/Register/Register";
import Favorites from "./pages/Favorites/Favorites";
function App() {
  return (
    <Routes>
      <Route path={"/"} element={<Layout/>}>
        <Route path={"/"} element={<Home/>}/>
        <Route path={"/catalog"} element={<Catalog/>}/>
      </Route>
        <Route path={"/register"} element={<Register/>}/>
        <Route path={"/favorites"} element={<Favorites/>}/>
    </Routes>
  );
}

export default App;
