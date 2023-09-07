import React from 'react'
import { FaPhone, FaInstagram, FaEnvelope } from 'react-icons/fa'
import Socials from '@/components/Socials'
const ContactData = [
    {
        key: "email",
        icon: <FaEnvelope />,
        text: 'contact@insectland.ir',
        link: 'mailto:contact@insectland.ir'
    },
    {
        key: "phone1",
        icon: <FaPhone />,
        text: '09025207555',
        link: 'tel:09194653041'
    },
    {
        key: "phone2",
        icon: <FaInstagram />,
        text: <div dir="ltr">@insectland.ir</div>,
        link: 'https://instagram.com/insectland.ir'
    },

]
const page = () => {
    return (
        <>
            <div className='container mx-auto '>
                <h3 className='text-3xl font-bold mb-6'>با ما در ارتباط باشید</h3>
                <div className="contact-list grid grid-cols-1 md:grid-cols-3 gap-4">
                    {ContactData.map((contact) => (
                        <a key={contact.key} href={contact.link} className="contact-card group rounded-lg bg-gray-50 border-4 border-solid hover:border-primary hover:text-green-500 cursor-pointer flex flex-col justify-center items-center p-4 active:bg-primary active:text-white">
                            <span className='text-3xl m-4  group-hover:text-white group-hover:bg-primary p-4 rounded-full'>
                                {contact.icon}

                            </span>
                            <span className='text-3xl tracking-wide'>
                                {contact.text}
                            </span>
                        </a>
                    ))}



                </div>

            </div>
            <Socials />
        </>
    )
}

export default page
