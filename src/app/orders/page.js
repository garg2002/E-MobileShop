"use client";

import Notification from "@/components/Notification";
import { GlobalContext } from "@/context";
import { getAllOrdersForUser } from "@/services/order";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";
import { PulseLoader } from "react-spinners";
import { toast } from "react-toastify";

export default function Orders() {
  const {
    user,
    pageLevelLoader,
    setPageLevelLoader,
    allOrdersForUser,
    setAllOrdersForUser,
  } = useContext(GlobalContext);

  const router = useRouter();

  async function extractAllOrders() {
    setPageLevelLoader(true);
    const res = await getAllOrdersForUser(user?._id);

    if (res.success) {
      setPageLevelLoader(false);

      setAllOrdersForUser(res.data);
      toast.success(res.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      setPageLevelLoader(false);
      toast.error(res.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  }

  useEffect(() => {
    if (user !== null) extractAllOrders();
  }, [user]);

  console.log(allOrdersForUser);

  if (pageLevelLoader) {
    return (
      <div className="w-full min-h-screen flex justify-center items-center">
        <PulseLoader
          color={"#000000"}
          loading={pageLevelLoader}
          size={30}
          data-testid="loader"
        />
      </div>
    );
  }

  return (
    <section>
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-8 mx-auto max-w-screen-xl  sm:px-6 lg:px-8">
          <div>
            <div className=" py-6 sm:px-8 sm:py-10">
              <div className="flow-root">
                {allOrdersForUser && allOrdersForUser.length ? (
                  <ul className="flex flex-col gap-4">
                    {allOrdersForUser.map((item) => (
                      <li
                        key={item._id}
                        className="bg-gray-200 shadow pl-2 lg:p-5 flex flex-col space-y-3 py-6 text-left"
                      >
                        <div className="flex gap-2">
                          <h1 className="font-bold text-sm lg:text-lg mb-3 flex-1">
                            #order: {item._id}
                          </h1>
                          <div className="items-center">
                            <p className="ml-2 text-lg lg:text-2xl font-bold text-gray-900">
                              Total 
                            </p>
                            <p className="mr-3 text-lg  lg:text-2xl  font-semibold text-gray-900">
                            ₹{item.totalPrice}
                            </p>
                          </div>
                        </div>
                        <div className="flex gap-2 ">
                          {item.orderItems.map((orderItem, index) => (
                            <div key={index} className="shrink-0 ">
                              <img
                                alt="Order Item"
                                className="h-24 w-24 max-w-full  "
                                src={
                                  orderItem &&
                                  orderItem.product &&
                                  orderItem.product.imageUrl
                                }
                              />
                            </div>
                          ))}
                        </div>
                        <div className="flex gap-5">
                          <button className="disabled:opacity-50 mt-5 mr-5  inline-block bg-red-700 hover:bg-black text-white px-2 py-2 text-xs font-medium uppercase tracking-wide lg:text-sm">
                            {item.isProcessing
                              ? "Order is Processing"
                              : "Order is delivered"}
                          </button>
                          <button
                            onClick={() => router.push(`/orders/${item._id}`)}
                            className=" mt-5 mr-5  inline-block bg-yellow-500 hover:bg-black text-white px-2 py-2 lg:px-5 lg:py-4 text-xs font-medium uppercase tracking-wide lg:text-sm"
                          >
                            View Order Details
                          </button>
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Notification />
    </section>
  );
}
