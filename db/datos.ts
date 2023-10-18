import type { Product } from "@/components/lib/shopify/types";

export const productos: Product[] = [
  {
    id: "1",
    handle: "camiza-negra",
    availableForSale: true,
    title: "shirt-black",
    description: "description of shirt black",
    descriptionHtml:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
    optionsColor: [
      {
        id: "1",
        name: "color",
        values: ["rojo", "negro", "verde"],
      },
    ],
    optionsSize: [
      {
        id: "1",
        name: "size",
        values: ["XS", "XL"],
      },
    ],
    priceRange: {
      maxVariantPrice: {
        amount: "400",
        currencyCode: "usd",
      },
      minVariantPrice: {
        amount: "500",
        currencyCode: "usd",
      },
    },
    variants: [
      {
        id: "1",
        title: "no me gusta",
        availableForSale: true,
        selectedOptions: [
          {
            name: "color",
            value: "yellow",
          },
        ],
        price: {
          amount: "500",
          currencyCode: "usd",
        },
      },
    ],
    featuredImage: {
      url: "/shirt.webp",
      altText: "img1",
      width: 35,
      height: 35,
    },
    images: [
      {
        url: "/shirt.webp",
        altText: "image2",
        width: 60,
        height: 60,
      },
      {
        url: "/shirt2.webp",
        altText: "image3",
        width: 60,
        height: 60,
      },
    ],
    seo: {
      title: "title seo",
      description: "description seo",
    },
    tags: ["tag1", "tag2"],
    updatedAt: "updateAt",
  },
];
