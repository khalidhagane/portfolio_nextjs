"use client"

import React, { useEffect, useState } from 'react'
import { Button } from './ui/button'
import { cn } from '@/lib/utils'
import { ArrowUpCircle } from 'lucide-react'

const ScrollToTop = () =>{
    const [isOverScreen , setIsOverScreen] = useState<boolean>(true)

    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if (window.scrollY > 80 ) {
                setIsOverScreen(true)
            }else{
                setIsOverScreen(false)
            }
        })
    },[])
    return(
        <Button size="icon" className={cn("fixed bottom-12 md:bottom-8 end-6 md:end-12 transition-transform duration-300 z-[99]" ,!isOverScreen && "opacity-0 translate-y-6 pointer-events-none") } onClick={()=>window.scrollTo(0,0)
        }>
            <ArrowUpCircle/>
        </Button>
    )
}

export default ScrollToTop