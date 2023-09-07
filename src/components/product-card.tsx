import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const ProductCard = ({ photo, slug, price, title }: any) => {
  return (
    <Link href={"/products/" + slug}>
      <div className='p-4 bg-white rounded-lg shadow-md'>
        <Image className='w-full' src={photo.url} width={200} height={200} alt={title} />
        <h2 className='text-lg mt-2'>{title}</h2>
      </div>
    </Link>
  )
}

export default ProductCard
