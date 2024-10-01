import React from 'react';
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Products from '@/components/Products/products';

export const metadata: Metadata = {
    title: "Next.js Chart | TailAdmin - Next.js Dashboard Template",
    description:
      "This is Next.js Chart page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};

const Page = async () => {
    const res = await fetch('https://dummyjson.com/products/search?q=title');
    const productsdata = await res.json();

    // Assuming productsdata.products is an array
    const products = productsdata.products || [];

    return (
        <DefaultLayout>
            <div>
              <Products prod ={products}/>
                  {/* {products.map((product: any) => (
                        <h2 key={product.id}>{product.title}</h2>
                    )
                )
                } */}
            </div>
        </DefaultLayout>
    );
}

export default Page;
