import Image from "next/image"
import React from 'react';
export const metadata = {
  title: "azir page",
  description: "Generated by create next app",
};
const ProductsPage = () => {
  return (
    <div>
      <h1>This is Products pages</h1>
 <Image src="https://i.ibb.co/34Ffc9F/azir.jpg" width={300} height={300}
 alt="my img"
 />
    </div>
  );
};

export default ProductsPage;