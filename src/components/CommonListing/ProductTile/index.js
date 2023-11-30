"use client";

import { useRouter } from "next/navigation";

 function ProductTile({ item }) {
  const router = useRouter();

  return (
    <div onClick={() => router.push(`/product/${item._id}`)}>
      <div className="w-4/5 h-4/5 ml-6 ">
        <img
          src={item.imageUrl}
          alt="Product image"
          className="h-auto w-full "
        />
      </div>
      {item.onSale === "yes" ? (
        <div className="absolute top-[-23px]  bg-orange-700 rounded">
          <p className="rounded-full  p-1 text-[10px] font-bold uppercase tracking-wide text-white sm:py-1 sm:px-3">
            Sale
          </p>
        </div>
      ) : null}
      <div className="my-2 ml-8 mx-auto flex w-10/12 flex-col items-start justify-between">
      <h3 className="mt-2 text-black font-semibold text-sm">{item.name}</h3>

        <div className="mb-2 flex ">
          <p
            className={`mr-2 text-sm font-semibold ${
              item.onSale === "yes" ? "line-through" : ""
            }`}
          >{`₹ ${item.price}`}</p>
          {item.onSale === "yes" ? (
            <p className="mr-2 text-sm font-semibold text-red-700">{`₹ ${(
              item.price -
              item.price * (item.priceDrop / 100)
            ).toFixed(2)}`}</p>
          ) : null}
          {item.onSale === "yes" ? (
            <p className="mr-3 text-sm font-semibold">{`-(${item.priceDrop}%)off`}</p>
          ) : null}
        </div>
      </div>
    </div>
  );
}
export default ProductTile