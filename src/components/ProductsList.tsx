import styled from "styled-components";
import { getProducts, ProductItem } from "../service/productsServ";
import { useMemo, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const ProductsBox = styled.div`
  display: flex;
  gap: 30px;
  padding: 24px;
  justify-content: center;
`;

const ProductsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  box-shadow: 6px 6px 12px rgb(180, 180, 180);
  border-radius: 8px;
  padding: 14px;
  cursor: pointer;
`;

export default function ProductList() {
  const [productItemList, setProductItemList] = useState<ProductItem[]>([]);

  const navigate = useNavigate();

  function goToSlide(id: number) {
    navigate(`/product/${id}`);
  }

  useMemo(() => {
    getProducts().then((res) => setProductItemList([...res]));
  }, []);
  return (
    <ProductsBox>
      {productItemList.map((productItem) => (
        <ProductsWrapper
          key={productItem.id}
          onClick={() => goToSlide(productItem.id)}
        >
          <img
            src={productItem.img}
            height={350}
            width={350}
            alt="изображение товара"
            style={{ objectFit: "cover" }}
          />
          <span>{productItem.name}</span>
          <span>{productItem.price} Р</span>
        </ProductsWrapper>
      ))}
    </ProductsBox>
  );
}
