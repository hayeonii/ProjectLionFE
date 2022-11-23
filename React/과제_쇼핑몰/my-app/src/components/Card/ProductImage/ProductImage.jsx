import React from 'react'
import './productImage.css'

export default function ProductImage({thumbnailImg, productName}) {
  const url = 'https://test.api.weniv.co.kr/' + thumbnailImg

  return (
    <img src={url} alt={productName}/>
  )
}
