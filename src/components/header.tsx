"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Search from './search'

import { usePathname } from 'next/navigation';

import { FaChevronDown, FaBell } from 'react-icons/fa'

const MenuData = [
    {
        key: 'main',
        title: "صفحه اصلی",
        href: "/",
    },
    {
        key: 'about',
        title: "درباره ما",
        href: "/about",
    },
    {
        key: 'products',
        title: "محصولات",
        href: "/products",
        submenu: [
            {
                key: 'allProducts',
                title: 'همه محصولات',
                href: '/products',
            },
            {
                key: 'mealworm',
                title: 'ویلورم',
                href: '/products/mealworm/',
            },
        ]
    },
    {
        key: 'contact',
        title: "تماس با ما",
        href: "/contact",
    },

]

interface MenuItem {
    title: string,
    href: string,
    submenu: any,
}


const MenuItem = ({ title, href, submenu }: MenuItem) => {
    let current_path = usePathname();
    let hasSubmenu = (submenu && submenu.length > 0) ? true : false;
    let isActive = (current_path == href) ? true : false;

    return (
        <li className={`relative ${hasSubmenu ? 'has-submenu' : '' }`} >
            <Link
                href={href}
                className={`py-2 px-4 flex items-center active:bg-white rounded-lg active:shadow ${isActive ? ("border border-solid border-primary") : '' }`}

            >
                {title}
                {hasSubmenu ? <FaChevronDown className="mr-2 text-sm" /> : null}

            </Link>

            {(hasSubmenu) ? <ul className='submenu text-base min-w-[200px] bg-white border border-solid border-primary shadow-md rounded-lg absolute top-full overflow-hidden'>

                {
                    submenu.map((item: any) => {
                        return (
                            <MenuItem
                                href={item.href}
                                title={item.title}
                                submenu={item.submenu}
                                key={item.key}
                            />
                        )
                    })
                }
            </ul> : null}



        </li>
    )
}

function Header() {
    return (
        <nav className='items-center flex p-3 mb-6 px-10 w-full justify-between flex-row-reverse'>
            <Link
                className='opacity-80 hover:opacity-100'
                href="/"
            >
                <Image
                    className='logo'
                    alt="Insectland"
                    width={200}
                    height={100}
                    src='/assets/images/logo-no-background.svg' />
            </Link>
            <ul className='menulist flex items-center gap-8 font-medium flex-wrap text-lg'>

                {
                    MenuData.map((item: any) => {
                        return (
                            <MenuItem
                                href={item.href}
                                title={item.title}
                                submenu={(item.submenu) ? item.submenu : []}
                                key={item.key} />
                        )
                    })
                }


            </ul>

        </nav>
    )
}

export default Header
