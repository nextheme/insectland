import React from 'react'

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

// Components
import Header from '@/components/header'

export default function Home() {
  return (
    <React.Fragment>
      <div className='container mx-auto'>
        <div className="grid grid-cols-2 gap-4 mt-10 ">
          <div className='mt-16' >
            <Skeleton count={5} />
            <div className='mt-6 flex justify-center gap-2 '>
              <Skeleton baseColor='' height={60} width={200} />
              <Skeleton height={60} width={200} />
            </div>
          </div>
          <div className='flex-auto gap-4 flex-wrap flex items-center justify-center'>
            <Skeleton height={200} width={300} />
            <Skeleton height={200} width={300} />
            <Skeleton height={200} width={300} />

          </div>

        </div>

        <div className='grid mt-14 grid-cols-3 gap-4 features'>
          <Skeleton height={160} />
          <Skeleton height={160} />
          <Skeleton height={160} />

        </div>
      </div>
    </React.Fragment>
  )
}
