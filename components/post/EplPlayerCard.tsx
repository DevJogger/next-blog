'use client'
import React from 'react'

type Props = {
  primaryColor: string
  number: number
  firstName: string
  lastName: string
}

export default function EplPlayerCard(props: Props) {
  const { primaryColor, number, firstName, lastName } = props
  const cardWrapperRef = React.useRef<HTMLDivElement>(null)
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    console.log(
      'mouse offset',
      e.clientX - (cardWrapperRef.current?.offsetLeft ?? 0 - e.currentTarget.offsetWidth)
    )
  }

  return (
    <div className="perspective-1000" ref={cardWrapperRef}>
      <div className="relative h-48 w-32 transition-all duration-700 transform-style-3d hover:-rotate-y-180 hover:scale3d-300">
        <div
          className={`absolute left-0 top-0 z-10 flex h-full w-full flex-col items-center justify-end rounded-[1.2rem] rounded-br-none backface-hidden ${primaryColor}`}
        >
          <span className="font-outline-1 flex flex-1 items-center font-TiltPrism text-7xl text-white">
            {number}
          </span>
          <span className="font-outline-1 font-TiltPrism text-xl text-white">{lastName}</span>
        </div>
        <div
          onMouseMove={(e) => handleMouseMove(e)}
          className="absolute left-0 top-0 z-0 flex h-full w-full flex-col justify-between rounded-[1.2rem] rounded-bl-none bg-[#ec0000] rotate-y-180 backface-hidden"
        >
          <span className="font-TiltPrism text-6xl text-white">{number}</span>
          <div className="flex flex-col">
            <span className="font-TiltPrism leading-4 text-white">{firstName}</span>
            <span className="font-TiltPrism text-xl font-bold leading-4 text-white">
              {lastName}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
