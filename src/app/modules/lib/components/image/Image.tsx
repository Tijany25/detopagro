'use client'

import NextImage from 'next/image'
import { FC } from 'react'
import { ImageSrcFolder, getImageDir } from '../../utility/utility'

export interface IImage {
    src: string,
    alt: string,
    className?: string,
    type?: 'image' | 'logo' | 'icon',
    onClick?: Function
}

const Image: FC<IImage> = ({className, src, alt, type = 'image', onClick}) => {
  return (
    <img
        className={className}
        src={getImageDir((type + 's' as ImageSrcFolder), src)}
        alt={alt}
        onClick={() => onClick?.()}
    />
  )
}


export default Image