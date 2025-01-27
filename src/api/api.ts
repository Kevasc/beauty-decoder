export const getProducts = async (
  product: string,
  filters: string[]
): Promise<ProductDetail[] | undefined> => {
  try {
    const response = await fetch(
      `http://makeup-api.herokuapp.com/api/v1/products.json?product_type=${product}&product_tags=${filters}`,
      {
        method: "GET",
      }
    );

    if (!response.ok) {
      throw new Error("Request failed!");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export type ProductDetail = {
  api_featured_image: string;
  brand: string;
  category: null | string;
  created_at: string;
  currency: null | string;
  description: string;
  id: number;
  image_link: string;
  name: string;
  price: string | null;
  price_sign: null | string;
  product_api_url: string;
  product_colors: { hex_value: string; colour_name: string }[];
  product_link: string;
  product_type: string;
  rating: number;
  tag_list: [];
  updated_at: string;
  website_link: string;
};
