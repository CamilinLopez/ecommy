import { GridTileImage } from "../grid/tile";
import { getCollectionProducts } from "../lib/shopify";
import type { Product } from "../lib/shopify/types";
import Link from "next/link";

const productos: Product = {
  id:"1",
  handle:"holaghh",
  availableForSale:true,
  title:"el amor",
  description:"el amo es lindo",
  descriptionHtml:"no me gusta el engaño",
  options:[
    {
      id:"1",
      name:"color",
      values:["rojo","negro"]
    }
  ],
  priceRange:{
    maxVariantPrice:{
      amount:"400",
      currencyCode:"usd"
    },
    minVariantPrice:{
      amount:"500",
      currencyCode:"usd"
    }
  },
  variants:[
    {
      id:"1",
      title:"no me gusta",
      availableForSale: true,
      selectedOptions:[
        {
          name:"color",
          value:"red"
        }
      ],
      price:{
        amount:"500",
        currencyCode:"usd"
      }
    }
  ],
  featuredImage:{
    url:"next.svg",
    altText:"img1",
    width:35,
    height:35
  },
  images:[
    {
      url:'next.svg',
      altText:"image2",
      width:35,
      height:35
    }
  ],
  seo:{
    title:"title seo",
    description:"description seo"
  },
  tags:["tag1","tag2"],
  updatedAt:"updateAt"
};

function ThreeItemGridItem({
  item,
  size,
  priority,
}: {
  item: Product;
  size: "full" | "half";
  priority?: boolean;
}) {
  return (
    <div
      className={
        size === "full"
          ? "md:col-span-4 md:row-span-2"
          : "md:col-span-2 md:row-span-1"
      }
    >
      <Link
        className="relative block aspect-square h-full w-full"
        href={`/product/${item.handle}`}
      >
        <GridTileImage
          src={item.featuredImage.url}
          fill
          sizes={
            size === "full"
              ? "(min-width: 768px) 66vw, 100vw"
              : "(min-width: 768px) 33vw, 100vw"
          }
          priority={priority}
          alt={item.title}
          label={{
            position: size === "full" ? "center" : "bottom",
            title: item.title as string,
            amount: item.priceRange.maxVariantPrice.amount,
            currencyCode: item.priceRange.maxVariantPrice.currencyCode,
          }}
        />
      </Link>
    </div>
  );
}

export async function ThreeItemGrid() {
  // Collections that start with `hidden-*` are hidden from the search page.
  // const homepageItems = await getCollectionProducts({
  //   collection: "hidden-homepage-featured-items",
  // });

  // if (!homepageItems[0] || !homepageItems[1] || !homepageItems[2]) return null;

  // const [firstProduct, secondProduct, thirdProduct] = homepageItems;
  

  return (
    <section className="mx-auto grid max-w-screen-2xl gap-4 px-4 pb-4 md:grid-cols-6 md:grid-rows-2">
      <ThreeItemGridItem size="full" item={productos} priority={true} />
      <ThreeItemGridItem size="half" item={productos} priority={true} />
      <ThreeItemGridItem size="half" item={productos} />
    </section>
  );
}
