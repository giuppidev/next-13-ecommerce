import { stripe } from "@/utils/stripe";

export default async function ConfirmPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const { session_id } = searchParams;
  const session = await stripe.checkout.sessions.retrieve(session_id as string);

  if (!session) {
    return <div>NO SESSION</div>;
  }

  return <pre>{JSON.stringify(session, null, 2)}</pre>;
}
