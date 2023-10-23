import { ThreeItemGrid } from "@/components/grid/three-items";
import { Suspense } from "react";
import { Carousel } from "@/components/carousel";
import Footer from "@/components/layout/footer";


export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

export default function Home() {
  return (
    <>
      <ThreeItemGrid />
      <Suspense>
        <Carousel />
        <Suspense>
          <Footer />
        </Suspense>
      </Suspense>
    </>
  );
}
