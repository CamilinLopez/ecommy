import type { Product, Menu, Page } from "@/components/lib/shopify/types";

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
      priority: true,
    },
    images: [
      {
        url: "/shirt.webp",
        altText: "image2",
        width: 60,
        height: 60,
        priority: true,
      },
      {
        url: "/shirt2.webp",
        altText: "image3",
        width: 60,
        height: 60,
        priority: true,
      },
    ],
    seo: {
      title: "title seo",
      description: "description seo",
    },
    tags: ["tag1", "tag2"],
    updatedAt: "updateAt",
  },
  // {
  //   id: "2",
  //   handle: "camiza-negra",
  //   availableForSale: true,
  //   title: "shirt-black",
  //   description: "description of shirt black",
  //   descriptionHtml:
  //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
  //   optionsColor: [
  //     {
  //       id: "1",
  //       name: "color",
  //       values: ["rojo", "negro", "verde"],
  //     },
  //   ],
  //   optionsSize: [
  //     {
  //       id: "1",
  //       name: "size",
  //       values: ["XS", "XL"],
  //     },
  //   ],
  //   priceRange: {
  //     maxVariantPrice: {
  //       amount: "400",
  //       currencyCode: "usd",
  //     },
  //     minVariantPrice: {
  //       amount: "500",
  //       currencyCode: "usd",
  //     },
  //   },
  //   variants: [
  //     {
  //       id: "1",
  //       title: "no me gusta",
  //       availableForSale: true,
  //       selectedOptions: [
  //         {
  //           name: "color",
  //           value: "yellow",
  //         },
  //       ],
  //       price: {
  //         amount: "500",
  //         currencyCode: "usd",
  //       },
  //     },
  //   ],
  //   featuredImage: {
  //     url: "/shirt.webp",
  //     altText: "img1",
  //     width: 35,
  //     height: 35,
  //   },
  //   images: [
  //     {
  //       url: "/shirt.webp",
  //       altText: "image2",
  //       width: 60,
  //       height: 60,
  //     },
  //     {
  //       url: "/shirt2.webp",
  //       altText: "image3",
  //       width: 60,
  //       height: 60,
  //     },
  //   ],
  //   seo: {
  //     title: "title seo",
  //     description: "description seo",
  //   },
  //   tags: ["tag1", "tag2"],
  //   updatedAt: "updateAt",
  // },
  // {
  //   id: "3",
  //   handle: "camiza-negra",
  //   availableForSale: true,
  //   title: "shirt-black",
  //   description: "description of shirt black",
  //   descriptionHtml:
  //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
  //   optionsColor: [
  //     {
  //       id: "1",
  //       name: "color",
  //       values: ["rojo", "negro", "verde"],
  //     },
  //   ],
  //   optionsSize: [
  //     {
  //       id: "1",
  //       name: "size",
  //       values: ["XS", "XL"],
  //     },
  //   ],
  //   priceRange: {
  //     maxVariantPrice: {
  //       amount: "400",
  //       currencyCode: "usd",
  //     },
  //     minVariantPrice: {
  //       amount: "500",
  //       currencyCode: "usd",
  //     },
  //   },
  //   variants: [
  //     {
  //       id: "1",
  //       title: "no me gusta",
  //       availableForSale: true,
  //       selectedOptions: [
  //         {
  //           name: "color",
  //           value: "yellow",
  //         },
  //       ],
  //       price: {
  //         amount: "500",
  //         currencyCode: "usd",
  //       },
  //     },
  //   ],
  //   featuredImage: {
  //     url: "/shirt.webp",
  //     altText: "img1",
  //     width: 35,
  //     height: 35,
  //   },
  //   images: [
  //     {
  //       url: "/shirt.webp",
  //       altText: "image2",
  //       width: 60,
  //       height: 60,
  //     },
  //     {
  //       url: "/shirt2.webp",
  //       altText: "image3",
  //       width: 60,
  //       height: 60,
  //     },
  //   ],
  //   seo: {
  //     title: "title seo",
  //     description: "description seo",
  //   },
  //   tags: ["tag1", "tag2"],
  //   updatedAt: "updateAt",
  // },
  // {
  //   id: "4",
  //   handle: "camiza-negra",
  //   availableForSale: true,
  //   title: "shirt-black",
  //   description: "description of shirt black",
  //   descriptionHtml:
  //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
  //   optionsColor: [
  //     {
  //       id: "1",
  //       name: "color",
  //       values: ["rojo", "negro", "verde"],
  //     },
  //   ],
  //   optionsSize: [
  //     {
  //       id: "1",
  //       name: "size",
  //       values: ["XS", "XL"],
  //     },
  //   ],
  //   priceRange: {
  //     maxVariantPrice: {
  //       amount: "400",
  //       currencyCode: "usd",
  //     },
  //     minVariantPrice: {
  //       amount: "500",
  //       currencyCode: "usd",
  //     },
  //   },
  //   variants: [
  //     {
  //       id: "1",
  //       title: "no me gusta",
  //       availableForSale: true,
  //       selectedOptions: [
  //         {
  //           name: "color",
  //           value: "yellow",
  //         },
  //       ],
  //       price: {
  //         amount: "500",
  //         currencyCode: "usd",
  //       },
  //     },
  //   ],
  //   featuredImage: {
  //     url: "/shirt.webp",
  //     altText: "img1",
  //     width: 35,
  //     height: 35,
  //   },
  //   images: [
  //     {
  //       url: "/shirt.webp",
  //       altText: "image2",
  //       width: 60,
  //       height: 60,
  //     },
  //     {
  //       url: "/shirt2.webp",
  //       altText: "image3",
  //       width: 60,
  //       height: 60,
  //     },
  //   ],
  //   seo: {
  //     title: "title seo",
  //     description: "description seo",
  //   },
  //   tags: ["tag1", "tag2"],
  //   updatedAt: "updateAt",
  // },
  // {
  //   id: "5",
  //   handle: "camiza-negra",
  //   availableForSale: true,
  //   title: "shirt-black",
  //   description: "description of shirt black",
  //   descriptionHtml:
  //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
  //   optionsColor: [
  //     {
  //       id: "1",
  //       name: "color",
  //       values: ["rojo", "negro", "verde"],
  //     },
  //   ],
  //   optionsSize: [
  //     {
  //       id: "1",
  //       name: "size",
  //       values: ["XS", "XL"],
  //     },
  //   ],
  //   priceRange: {
  //     maxVariantPrice: {
  //       amount: "400",
  //       currencyCode: "usd",
  //     },
  //     minVariantPrice: {
  //       amount: "500",
  //       currencyCode: "usd",
  //     },
  //   },
  //   variants: [
  //     {
  //       id: "1",
  //       title: "no me gusta",
  //       availableForSale: true,
  //       selectedOptions: [
  //         {
  //           name: "color",
  //           value: "yellow",
  //         },
  //       ],
  //       price: {
  //         amount: "500",
  //         currencyCode: "usd",
  //       },
  //     },
  //   ],
  //   featuredImage: {
  //     url: "/shirt.webp",
  //     altText: "img1",
  //     width: 35,
  //     height: 35,
  //   },
  //   images: [
  //     {
  //       url: "/shirt.webp",
  //       altText: "image2",
  //       width: 60,
  //       height: 60,
  //     },
  //     {
  //       url: "/shirt2.webp",
  //       altText: "image3",
  //       width: 60,
  //       height: 60,
  //     },
  //   ],
  //   seo: {
  //     title: "title seo",
  //     description: "description seo",
  //   },
  //   tags: ["tag1", "tag2"],
  //   updatedAt: "updateAt",
  // },
];

export const GetMenu: Menu[] = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Terms & Conditions",
    path: "/terms-conditions",
  },
  {
    title: "Shipping & Return Policy",
    path: "/shipping-return-policy",
  },
  {
    title: "Privacy Policy",
    path: "/privacy-policy",
  },
  {
    title: "FAQ",
    path: "/frequently-asked-questions",
  },
];

export const pages: Page[] = [
  {
    id: "1",
    title: "About",
    handle: "about",
    body: "<p>este es about</p>",
    bodySummary: "Este es el bodySumary",
    seo: {
      title: "About",
      description: "Seo description",
    },
    createdAt: "2023-10-23T13:03:32.000Z",
    updatedAt: "2023-10-23T13:03:32.000Z",
  },
];
