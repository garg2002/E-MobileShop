import CommonListing from "@/components/CommonListing";
import { productByCategory } from "@/services/product";

async function SamsungAllProducts() {
  const getAllProducts = await productByCategory("samsung");

  return <CommonListing data={getAllProducts && getAllProducts.data} />;
}
export default  SamsungAllProducts