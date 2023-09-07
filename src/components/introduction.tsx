import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaHeadset, FaTruck , FaBug} from 'react-icons/fa'

const Features = [
  {
    key: 0,
    title: "خرید بدون واسطه",
    description: "از آنجایی که ما در اینسکت لند تمام محصولات را خودمان از تولید به مصرف می رسانیم ،آسوده با بهترین کیفیت و قیمت خرید کنید.",
    icon: <FaHeadset />,
  }, 
  {
    key: 1,
    title: "ارسال به سراسر کشور",
    description: "ارسال با تیپاکس برای محصولات خشک و ارسال سریع از طریق اتوبوسرانی برای محصولات زنده.",
    icon: <FaTruck />,
  },
  {
    key: 2,
    title: "دریافت سفارشات",
    description: "پرورش سفارشی کرم‌ها و حشرات برای کسب و کارها به صورت همکاری",
    icon: <FaBug />,
  }
]

const ImageUrls = [
  {
    key: 0,
    alt: "Mealwerm",
    src: "/content/image1-1280x1280.jpg",
    width: 300,
    height: 200,
  },

  {
    key: 1,
    alt: "Mealwerm",
    src: "/content/image3-1280x1280.jpg",
    width: 300,
    height: 200,
  },
  {
    key: 2,
    alt: "Mealwerm",
    src: "/content/image2-1280x1280.jpg",
    width: 300,
    height: 200,
  },
]

const Introduction = () => {
  return (
    <div className="container mx-auto">
      <div className='flex  py-12 flex-wrap lg:flex-nowrap justify-between items-center'>
        {/* Introduction typographies */}
        <div className='text-center'>
          <h1 className='text-4xl font-bold mb-6'>
            <strong className='text-green-500'>اینسکت لند</strong> : مرکز تخصصی خرید میلورم و غذای دام و طیور
          </h1>
          <div className='flex justify-center gap-3'>
            <Link href='/contact' className='border border-solid border-green-600 text-green-600 shadow-md py-2 px-3 rounded-lg hover:shadow-lg active:bg-green-600 active:text-white text-lg'>
              مشاوره رایگان
            </Link>
            <Link href='/products' className='bg-green-500 border border-solid border-green-600 text-white shadow-md py-2 px-3 rounded-lg hover:shadow-lg active:bg-green-600 text-lg'>
              مشاهده محصولات
            </Link>

          </div>
        </div>
        {/* Image boxes */}
        <div className='flex-auto flex-wrap flex items-center justify-center'>

          {ImageUrls.map(
            (item) => {
              return (
                <div key={item.key} className='m-3 imagebox shadow-lg hover:shadow-xl rounded-2xl overflow-hidden'>
                  <Image
                    src={item.src}
                    width={item.width}
                    height={item.height}
                    alt={item.alt}
                    key={item.key}
                  />
                </div>
              )
            }
          )}


        </div>


      </div>

      <div className='grid grid-cols-1 gap-4 md:grid-cols-3 features'>

        {
          Features.map((item) => {
            return (
              <div key={item.key} className="flex  items-center bg-white flex-auto border-2 border-solid border-slate-200 rounded-lg  shadow-sm">
                <span className="icon text-2xl bg-slate-200 p-2 rounded-l-full ">

                  {item.icon}
                </span>
                <div className="p-6">
                  <h4 className=' text-xl mb-2 font-bold'>{item.title}</h4>
                  <p className='text-base text-gray-5   00'>
                    {item.description}
                  </p>
                </div>
              </div>
            )
          })
        }

      </div>
    </div>
  )
}

export default Introduction
