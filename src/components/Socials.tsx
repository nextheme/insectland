import React from 'react'
import { FaTelegram, FaInstagram } from 'react-icons/fa'

const Socials = () => {
    return (
        <>
            <div className="section py-20 bg-neutral-100 border-y-2 border-black/10 my-10">
                <div className="container mx-auto">
                    <div className="grid md:grid-cols-3 gap-4 items-center">
                        <div>
                            <span className='text-2xl font-bold'>
                                ما را در شبکه های اجتماعی دنبال کنید
                            </span>
                        </div>
                        <div className='flex flex-wrap gap-4 col-span-2'>
                            <a href="/instagram" rel='nofollow external' target='blank' className='flex-auto'>
                                <div className="social-banner from-sky-600 to-cyan-600 hover:bg-sky-700 telegram ">
                                    <span className="ltr text-2xl" dir='ltr'>
                                        @insectland.ir
                                    </span>
                                    <span className='icon mr-2 text-[62px]'>
                                        <FaTelegram />
                                    </span>
                                </div>
                            </a>

                            <a href="https://instagram.com/insectland.ir" rel='nofollow external ' target='blank' className='flex-auto'>
                                <div className="social-banner  from-pink-600 to-rose-600 telegram  mr-auto ">
                                    <span className="ltr text-2xl" dir='ltr'>
                                        @insectland.ir
                                    </span>
                                    <span className='icon mr-2 text-[62px]'>
                                        <FaInstagram />
                                    </span>
                                </div>
                            </a>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Socials
