'use client'
import { useState, useMemo, useRef } from 'react'

export default function HighlightEdge() {
  const [mouseX, setMouseX] = useState(0)
  const [mouseY, setMouseY] = useState(0)
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setMouseX(e.clientX)
    setMouseY(e.clientY)
  }
  return (
    <div className="flex items-center justify-center">
      <div className="grid grid-cols-4 gap-2" onMouseMove={(e) => handleMouseMove(e)}>
        {Array.from({ length: 16 }).map((_, index) => {
          return <Card key={index} index={index} mouseX={mouseX} mouseY={mouseY} />
        })}
      </div>
    </div>
  )
}

interface CardProps {
  index: number
  mouseX: number
  mouseY: number
}

function Card({ index, mouseX: mouse_x, mouseY: mouse_y }: CardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const x = useMemo(() => {
    return mouse_x - (cardRef.current?.getBoundingClientRect().left ?? 1000)
  }, [mouse_x])
  const y = useMemo(() => {
    return mouse_y - (cardRef.current?.getBoundingClientRect().top ?? 1000)
  }, [mouse_y])

  return (
    <div
      ref={cardRef}
      style={
        {
          '--backgroundColor': `hsl(${22.5 * index}, 70%, 20%)`,
          '--backgroundHighlightColor': `hsl(${22.5 * index}, 100%, 70%)`,
          // '--backgroundColor': `#333333`,
          // '--backgroundHighlightColor': `#ffffff`,
          '--x': `${x}px`,
          '--y': `${y}px`,
        } as React.CSSProperties
      }
      className="relative h-12 w-12 overflow-hidden rounded-md bg-[var(--backgroundColor)] before:absolute before:left-[var(--x)] before:top-[var(--y)] before:z-10 before:h-full before:w-full before:bg-[radial-gradient(closest-side_circle,_var(--tw-gradient-stops))] before:from-[var(--backgroundHighlightColor)] before:to-transparent before:content-[''] before:-translate-x-1/2 before:-translate-y-1/2 md:h-24 md:w-24 before:md:h-36 before:md:w-36"
    >
      <div className="absolute inset-1 z-20 grid place-items-center rounded-md bg-stone-900">
        <span className="text-2xl font-bold text-white">{index + 1}</span>
      </div>
    </div>
  )
}
