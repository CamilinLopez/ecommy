import { ThreeItemGrid } from "@/components/grid/three-items";
import { Suspense } from "react";
import { Carousel } from "@/components/carousel";
import Footer from "@/components/layout/footer";

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
