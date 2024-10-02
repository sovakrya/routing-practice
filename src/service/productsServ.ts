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

export async function getProducts(): Promise<ProductItem[]> {
  return new Promise((res) => {
    res(products);
  });
}

export async function getProduct(id: number): Promise<ProductItem> {
  return new Promise((res) => {
    res(products[id]);
  });
}
