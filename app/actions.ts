"use server";

import { redirect } from "next/navigation";
import { getURL } from "@/utils/helper";
import getStripe from "@/utils/stripe";

export async function handlePayment(stripePriceId: string) {
  const stripe = await getStripe();
  const session = await stripe.checkout.sessions.create({
    shipping_address_collection: { allowed_countries: ["IT"] },
    line_items: [
      {
        price: stripePriceId,
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: `${getURL()}/confirm?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${getURL()}/confirm`,
    tax_id_collection: { enabled: true },
  });

  if (!session) {
    return;
  }

  if (!session.url) {
    return;
  }

  redirect(session.url);
}
