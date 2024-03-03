import {Route, Routes} from "react-router-dom";
import Layout from "./pages/Layout/Layout";
import Home from "./pages/Home/Home";
import "./styles/style.scss"
import Catalog from "./pages/Catalog/Catalog";
function App() {
  return (
    <Routes>
      <Route path={"/"} element={<Layout/>}>
        <Route path={"/"} element={<Home/>}/>
        <Route path={"/catalog"} element={<Catalog/>}/>

      </Route>
    </Routes>
  );
}

export default App;
