import React, { useState } from 'react'
import Parser from 'html-react-parser';
import Image from 'next/image';
import { FaCheck, FaBan, FaShoppingBasket } from 'react-icons/fa';
import ProductGallery from '@/components/product-gallery';
import { getData } from '@/utils/functions';

const getProductData = async (slug:string) => {
  const data = await getData('/products/search/find/slug/' + slug);
  return data;
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const data =  await getProductData(params.slug)
  return ( {
    title:data.title, 
  })
}

const ProductShow = async ({ params }: { params: { slug: string } }) => {

  const data = await getProductData(params.slug);

  return (
    <React.Fragment>

      <div className="container mx-auto">
        {data ? (
          <>
            <div className='grid md:grid-cols-2 gap-8 mt-8'>
              <div className="postInfo flex flex-col justify-center">
                <h1 className='text-2xl font-bold'>
                  {data.title}
                </h1>


                <div className='price mt-4 flex justify-between'>
                  <span className='text-2xl text-primary'>
                    {data.price.toLocaleString()} تومان
                  </span>
                  <span>{data.inStock ?
                    (<div className='text-green-500 flex gap-2'><FaCheck /> موجود است</div>)
                    : (<div className='text-red-500 flex gap-2'><FaBan /> ناموجود</div>)}</span>
                </div>
                <button className='bg-primary text-white hover:bg-green-600 active:bg-green-700 p-4 rounded-lg shadow-lg flex gap-2 items-center justify-center mt-5'>
                  <FaShoppingBasket />
                  برای خرید تماس بگیرید
                </button>
              </div>
                

                <ProductGallery title={data.title} photos={data.photos} />
              

            </div>
            <div className='mt-8 pt-8  border-t border-slate-200 text-lg'>
              {Parser(data.content)}
            </div>
          </>
        ) : "NO data"}
      </div>
    </React.Fragment>

  )
}

export default ProductShow
