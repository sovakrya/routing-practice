import { useEffect, useState } from "react";
import { getProduct, ProductItem } from "../service/productsServ";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const ProductItemBox = styled.div`
  padding: 24px;
  display: flex;
  gap: 26px;
  align-self: center;
  width: 1200px;
  box-shadow: 6px 6px 12px rgb(180, 180, 180);
  border-radius: 8px;
`;

const ProductContentBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const ProductTitle = styled.h1`
  font-size: 28px;
  font-weight: 600;
`;

export default function Product() {
  const [productItem, setProductItem] = useState<ProductItem>();

  const params = useParams<{ id: string }>();

  useEffect(() => {
    const id = Number(params.id);
    if (Number.isNaN(id)) {
      throw new Error("ID_NOT_NUMBER");
    }
    getProduct(id).then((res) => {
      setProductItem({ ...res });
    });
  }, [params.id]);

  return (
    <ProductItemBox>
      <img
        src={productItem?.img}
        height={600}
        width={600}
        style={{ objectFit: "cover" }}
        alt="изображение товара"
      />
      <ProductContentBox>
        <ProductTitle>{productItem?.name}</ProductTitle>

        <span>Описание: {productItem?.description}</span>
        <span>Цвет: {productItem?.color}</span>
        <span>Материал: {productItem?.material}</span>
        <span>Цена: {productItem?.price}</span>
      </ProductContentBox>
    </ProductItemBox>
  );
}
