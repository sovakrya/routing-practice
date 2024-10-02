import { Route } from "react-router-dom";
import "./App.css";
import Menu from "./components/Menu";
import ProductList from "./components/ProductsList";
import Product from "./components/Product";
import MemeCat from "./components/MemeCat";

function App() {
  return (
    <div className="App">
      <Menu />
      <Route path="/" component={ProductList} exact />
      <Route path="/blog" component={Product} />
      <Route path="/authorized" component={MemeCat} />
    </div>
  );
}

export default App;
