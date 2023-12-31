import React from 'react'

export default function AuthLayout({children}:{children:React.ReactNode}) {
  return (
    <div className='bg-slate-700 h-full'>{children}</div>
  )
}
