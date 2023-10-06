'use client'

import style from "./ProductCard.module.css"
import React from 'react'

export default function ProductCard() {
  return (
    <div className={style.card}>
        <button className="
        p-5
      bg-sky-400 
      text-white text-xl 
      hover:bg-sky-600
      " onClick={() => console.log('Click')} >Add To Cart</button>
    </div>
  )
}
