import Cookies from "js-cookie";

export const callStripeSession = async (formData) => {
  try {
    const res = await fetch("https://e-mobile-shop.vercel.app/api/stripe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    return data;
  } catch (e) {
    console.log(e);
  }
};
