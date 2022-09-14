import React from "react";
import {BrowserRouter as Router ,Routes , Route} from "react-router-dom";
// import Allproducts from "./Component/Allproducts";
import ShopNav from "./Component/ShopNav";
import ProductDetail from "./Component/ProductDetail";
import Cart from "./Component/Cart";
import {ContextProvider} from "./Component/Context";
import Shop from "./Component/Shop"

function App() {
  return (
    <ContextProvider>
      <Router>
      <ShopNav/>
      <Routes>
        <Route path="/" element={<Shop/>}/>
        <Route path="/product/:productId" element={<ProductDetail/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </Router>
    </ContextProvider>
  );
}

export default App;
