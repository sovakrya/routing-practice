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
  return products;
}

export async function getProduct(id: number): Promise<ProductItem> {
  const productId = products.find((elem) => elem.id === id);
  if (!productId) {
    throw new Error("NO_ITEM");
  }

  return productId;
}
