'use client'
import React, { useState } from 'react'
import Image from 'next/image';
const ProductGallery = ({ photos, title }: any) => {

    const [productImage, setProductImage] = useState(photos[0]?.url || '');

    return (
        <div className="postGallery">
            <div className="postImage realtive w-full rounded-xl shadow-sm overflow-hidden h-[400px] flex items-center justify-center bg-slate-100 hover:bg-slate-50">
                <a target='_blank' className='block w-full' href={productImage}>
                    <Image alt={title} src={productImage} className='w-full' width={400} height={400} />
                </a>
            </div>


            <div className="thumbnails mt-4 gap-4 items-center flex flex-wrap">
                {photos.map((photo: any) => {
                    let isActive = photo.url == productImage;
                    return (
                        <button key={photo.url} onClick={(e) => setProductImage(photo.url)} className={`thumbnail cursor-pointer border-4 border-solid overflow-hidden block rounded-lg h-[60px] ${isActive ? 'border-primary' : ''}`} >

                            <Image
                                src={photo.url}
                                width={80}
                                height={80}
                                alt={title}

                            />
                        </button>

                    )
                })}
            </div>
        </div>
    )
}

export default ProductGallery