import styled from "styled-components";
import products from "../products.json";
import { ProductItem } from "../service/productsServ";

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
  const productItemList: ProductItem[] = products;
  return (
    <ProductsBox>
      {productItemList.map((productItem) => (
        <ProductsWrapper key={productItem.id}>
          <img
            src={productItem.img}
            height={350}
            width={350}
            alt="изображение товара"
          />
          <span>{productItem.name}</span>
          <span>{productItem.price} Р</span>
        </ProductsWrapper>
      ))}
    </ProductsBox>
  );
}
