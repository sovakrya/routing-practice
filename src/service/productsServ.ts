import products from "../products.json";

export type ProductItem = {
  id: number;
  img: string;
  name: string;
  price: number;
  description: string;
  color: string;
  material: string;
};

export async function getProduct(id: number) {
  return new Promise(() => {});
}
