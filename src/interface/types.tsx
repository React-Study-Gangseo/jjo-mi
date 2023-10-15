export interface ProductData {
  product_id?: number;
  created_at?: string;
  updated_at?: string;
  product_name?: string;
  image?: string;
  price?: number;
  shipping_method?: string;
  shipping_fee?: number;
  stock?: number;
  products_info?: string;
  seller?: number;
  store_name?: string;
}

export interface CartItem {
  quantity: number;
}
