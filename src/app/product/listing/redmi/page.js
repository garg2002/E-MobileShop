
"use client";

import CommonListing from "@/components/CommonListing";
import { productByCategory } from "@/services/product";

 async function RedmiAllProducts() {
  const getAllProducts = await productByCategory("redmi");


  return <CommonListing data={getAllProducts && getAllProducts.data} />;
}
export default RedmiAllProducts

