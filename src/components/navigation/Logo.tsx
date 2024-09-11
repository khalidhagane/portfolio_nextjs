import React from 'react'
import Image from 'next/image';

const Logo = () => {
  return (
    <a href="/">
        <Image src="/logo.svg" alt='logo' width={40} height={10}/>
    </a>
  )
}

export default Logo