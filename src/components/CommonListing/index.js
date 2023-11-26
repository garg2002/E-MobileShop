"use client";

import { useRouter } from "next/navigation";
import ProductButton from "./ProductButtons";
import ProductTile from "./ProductTile";
import { useEffect } from "react";
import Notification from "../Notification";

export default function CommonListing({ data }) {
  const router = useRouter();

  useEffect(() => {
    router.refresh();
  }, []);

  return (
    <section className="bg-white py-1 sm:py-2">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 outline-2">
        <div className="my-10 grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-4 lg:mt-16">
          {data && data.length
            ? data.map((item) => (
                <article
                  className="relative flex flex-col  cursor-pointer pl-2 shadow-2xl rounded-xl hover:-translate-y-6 pt-4 mb-8 "
                  key={item._id}
                >
                  <ProductTile item={item} />
                  <div className="ml-2 flex gap-4 mt-4 mb-8">
                  <ProductButton item={item} />
                  </div>
                </article>
              ))
            : null}
        </div>
      </div>
      <Notification />
    </section>
  );
}
