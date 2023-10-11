import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const getProduct = async (id: number) => {
  return await prisma.product.findUnique({ where: { id } });
};

export default async function EditPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const product = await getProduct(parseInt(id));

  const updateProduct = async (data: FormData) => {
    "use server";

    const productName = data.get("name") as string;
    await prisma.product.update({
      where: { id: parseInt(id) },
      data: {
        name: productName,
      },
    });
    redirect("/admin");
  };

  if (!product) {
    return <div>NOT FOUND</div>;
  }
  return (
    <form
      className=" flex justify-center w-full bg-white  px-16"
      action={updateProduct}
    >
      <div className="space-y-12 w-full">
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3">
          <div>
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Product
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Edit your product
            </p>
          </div>

          <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
            <div className="sm:col-span-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                name
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="block flex-1 border-0 bg-transparent py-1.5  text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="www.example.com"
                    defaultValue={product.name}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="button"
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>
  );
}
