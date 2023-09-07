import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const loading = () => {
    return (
        <div className='container mx-auto'>
            <div className="grid md:grid-cols-2 mt-10 gap-6 ">
                <div className="my-auto">
                    <Skeleton count={1} />
                    <div className='flex justify-between my-2'>
                        <Skeleton height={40} width={200} />
                        <Skeleton height={40} width={100} />

                    </div>
                    <Skeleton height={60} baseColor='#dcdcdc' />

                </div>
                <div>
                    <Skeleton height={400} />
                    <div className='flex mt-4'>
                        <Skeleton height={60} width={120} />

                    </div>
                </div>
            </div>
            <div className='pt-10 mt-10'>
            <Skeleton count={4} />

            </div>
        </div>
    )
}

export default loading
