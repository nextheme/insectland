import ProductCard from "./product-card";
import React, { useEffect, useState } from 'react'
import { IProduct } from "@/interface";
import { getData } from "@/utils/functions";
import Link from "next/link";
const ProductsList = async () => {

    const data = await getData('/products');


    return (
        <>
            <div className="flex flex-wrap justify-between items-center mb-4 ">
                <h3 className="font-bold text-2xl">محصولات</h3>
                <div className="tab-items flex-auto md:flex-none flex overflow-x-scroll md:overflow-x-visible gap-4">
                    <Link className="bg-green-500 border border-solid border-green-600 text-white shadow-md py-2 px-3 rounded-lg hover:shadow-lg active:bg-green-600 text-sm" href="/products">مشاهده تمام محصولات</Link>
                </div>
            </div>
            <div className="productsList grid grid-cols-2 gap-4 md:grid-cols-4">

                {data?.map((i: IProduct) => (
                    <ProductCard
                        key={i?.slug}
                        photo={i?.photos[0]}
                        slug={i?.slug}
                        price={i?.price}
                        title={i?.title}
                    />
                ))}
            </div>

        </>
    )
}

export default ProductsList
