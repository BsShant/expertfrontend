import { server } from "../fetch";

export const fetchProducts = async () => {
  const res2 = await fetch(`${server}/product`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  const products = await res2.json();

  return products;
};

export const fetchProductHero = async () => {
  const res2 = await fetch(`${server}/productHero`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  const productHero = await res2.json();

  return productHero;
};
