"use client";

import CommonListing from "@/components/CommonListing";
import { getAllAdminProducts } from "@/services/product";

 async function AllProducts() {
  const getAllProducts = await getAllAdminProducts();


  return <CommonListing data={getAllProducts && getAllProducts.data} />;
}
export default AllProducts;