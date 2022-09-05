export interface ProductInterface {
    id?: number;
    category: string;
    title: string;
    price?: number;
    imageUrl: string;
  }

  export interface Product {
    title: string;
    price: number;
    category: string;
    imageUrl: string;
  }