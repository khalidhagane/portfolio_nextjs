import { buttonVariants } from '@/components/ui/button'
import { socialLinks } from '@/constants/social-links'
import { ArrowRightCircle, Download } from 'lucide-react'
import React from 'react'
import Image from 'next/image';
import { Effect } from '@/components/ui/effects';

const HomeSection = () => {
  return (
    <section id='home' className='grid md:grid-cols-12 items-center gap-6 '>

        {/* Socail links */}
        <ul className='flex md:flex-col gap-4 items-center size-fit mx-auto py-2 md:py-8 px-8 md:px-2 border rounded-3xl'>
            {socialLinks.map((link , index )=>{
                const {  href, icon:Icon} = link
                return (
                    <li key={index} className='hover:text-primary '>
                        <a href={href} target='_blank' rel='noopener noreferrer'>
                            <Icon className='size-5' />
                        </a>
                    </li>
                )
            })}
        </ul>
        {/* Presentation  */}
        <div className='md:col-span-6 flex flex-col items-center md:items-start gap-y-4 '>
            <h2 className='text-3xl md:text-5xl font-bold text-foreground capitalize'>
                hi, i&lsquo;m khalid
                </h2>
                <h5 className='text-xl md:text-2xl font-semibold capitalize'>
                    full stack developer
                </h5>
                <p className='leading-7 md:text-lg md:max-w-[85%] text-center md:text-start'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio assumenda accusantium quas ut nihil placeat, veritatis totam pariatur dignissimos iure voluptas dolorem. Sapiente est corporis, a laudantium soluta ipsum, ipsa commodi dicta eaque mollitia quis minus libero at. In vel deleniti vitae culpa. Temporibus itaque ipsum aliquam non sint asperiores?
                </p>
                <div className='flex items-center gap-2 py-4 '>
                <a href="#projects" className={buttonVariants({size:"lg"})}>
                    <span>my works</span>
                    <ArrowRightCircle className='size-4' />
                </a>
                <a href="/cv.pdf" className={buttonVariants({variant:"outline" , size:"lg"})} target='_blank'download >
                    <span>Download CV</span>
                    <Download className='size-4' />
                </a>

                </div>
        </div>
        {/* Image */}
        <div className='md:col-span-5 grid place-content-center'>
            <div className='relative flex items-center      justify-center size-80 md:size-96'>
                <Effect className='size-full'/>
                <Effect variant='square' size="sm" className='top-[8%] left-[25%] -rotate-12'/>
                <Effect variant='square' size="sm" className='top-[58%] right-[2%] rotate-12'/>
                <Effect variant='square' size="sm" className='bottom-[18%] left-[12%] -rotate-6'/>
                <Image width={420} height={420} alt="profile" src="/profile.jpg" className=' object-fill size-[80%] border-2 rounded-full ring-4 ring-primary ring-offset-4 ring-offset-background '/>

            </div>
        </div>
    </section>
  )
}

export default HomeSection