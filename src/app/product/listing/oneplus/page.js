"use client";
import CommonListing from "@/components/CommonListing";
import { productByCategory } from "@/services/product";

 async function OnePlusAllProducts() {
  const getAllProducts = await productByCategory("oneplus");


  return <CommonListing data={getAllProducts && getAllProducts.data} />;
}
export default OnePlusAllProducts