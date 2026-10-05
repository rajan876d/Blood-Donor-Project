import { HOME_ROUTE } from '@/constants/routes'
import Link from 'next/link'
import React from 'react'

function Logo() {
  return (
    <div> <Link href={HOME_ROUTE} className="flex items-center space-x-3 rtl:space-x-reverse">
      <span className="self-center text-xl text-heading font-semibold whitespace-nowrap"> 🩸<span className='text-2xl bold text-red-400'>Blood</span>bor</span>
  </Link></div>
  )
}

export default Logo