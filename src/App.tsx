import { Navigate, Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import ProductList from "./components/ProductsList";
import Product from "./components/Product";
import MemeCat from "./components/MemeCat";
import { useState } from "react";
import styled from "styled-components";
import Home from "./components/Home";
import NotFound from "./components/NotFound";

const LoginBtn = styled.button`
  width: 70px;
  height: 40px;
  cursor: pointer;
  align-self: flex-end;
  margin-right: 8px;
`;

const AppBox = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  gap: 34px;
  flex-direction: column;
`;

function App() {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <AppBox>
      <Menu />
      <LoginBtn onClick={() => setIsAuth(!isAuth)}>
        {isAuth ? "Logout" : "Login"}
      </LoginBtn>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/:id" element={<Product />} />
        <Route path="/authorized">
          {isAuth ? <MemeCat /> : <Navigate replace to="/" />}
        </Route>
        <Route element={<NotFound />} />
      </Routes>
    </AppBox>
  );
}

export default App;
