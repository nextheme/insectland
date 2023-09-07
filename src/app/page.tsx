import { Component } from 'react'
import React from 'react'
// Components
import Header from '@/components/header'
import Introduction from '@/components/introduction'
import ProductsList from '@/components/products-list'
import Socials from '@/components/Socials'
export default function Home() {
  return (
    <React.Fragment>
      <Introduction />
      <div className="bg-slate-100 py-10 my-10 border-y-2 border-solid border-slate-400/20">
        <div className="container mx-auto">
          <ProductsList />
        </div>
      </div>
      <Socials />
    </React.Fragment>
  )
}
