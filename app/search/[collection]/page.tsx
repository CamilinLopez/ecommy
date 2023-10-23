import Grid from "@/components/grid";
import ProductGridItems from "@/components/layout/product-grid-items";
import { productos } from "@/db/datos";

export default async function CategoryPage({
  params,
  searchParams,
}: {
  params: {
    collection: string;
  };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {

console.log(params,searchParams)

  return (
    <section>
      {
        productos.length === 0 ? (
          <p className="py-3 text-lg" >{`No products found in this collection`}</p>
        ):
        <Grid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <ProductGridItems products={productos} />
        </Grid>
      }
    </section>
  );
}
