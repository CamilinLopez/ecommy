export type Menu = {
  id: number;
  title: string;
  path: string;
};

export const menu: Menu[] = [
  {
    id: 1,
    title: "All",
    path: "/search",
  },
  {
    id: 2,
    title: "Shirts",
    path: "/search/shirt",
  },
  {
    id: 3,
    title: "Stikers",
    path: "/search/stiker",
  },
];

