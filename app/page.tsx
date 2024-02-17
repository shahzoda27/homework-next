"use client";
import React  from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import  Link  from 'next/link';
export default function Home() {

  return (
    <div className='d-flex  gap-[15px]'>
        <Link href="/login" className='btn btn-info'>Login started</Link>
        <Link href="/dashboard" className='btn btn-info'>Dashboard started</Link>
      </div>
  )
}