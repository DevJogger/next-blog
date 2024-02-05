'use client'
import { useState, useEffect } from 'react'
interface Props {
  progress: number
  color: string
  title: string
  className?: string
}

function CircleProgressIndicator({ progress: initialProgress, color, title, className }: Props) {
  // For demonstration, to simulate progress
  const [progress, setProgress] = useState(initialProgress)
  useEffect(() => {
    setTimeout(() => {
      if (progress < 1) {
        const nextProgress = progress + Math.random() / 50
        if (nextProgress <= 1) {
          setProgress(nextProgress)
        } else {
          setProgress(1)
        }
      } else {
        setProgress(0)
      }
    }, 750)
  }, [progress])

  return (
    <div
      className={`flex flex-auto flex-col items-center gap-3 rounded-xl bg-stone-200 p-7 dark:bg-stone-600 ${className}`}
    >
      <div
        className="relative grid h-40 w-40 place-items-center rounded-full before:absolute before:inset-3 before:rounded-full before:bg-stone-200 before:content-[''] before:dark:bg-stone-600"
        style={
          {
            '--circleProgressColor': `${color}`,
            '--circleProgress': `${progress * 100}%`,
            background:
              'conic-gradient(from 0deg, var(--circleProgressColor) 0%, var(--circleProgressColor) 0% var(--circleProgress), #333333 var(--circleProgress), #333333 100%)',
          } as React.CSSProperties
        }
      >
        <h1 className="absolute m-0">
          {(progress * 100).toFixed()}
          <small>%</small>
        </h1>
      </div>
      <h2 className="m-0">{title}</h2>
    </div>
  )
}

export default function CircleProgressIndicators() {
  return (
    <div className="flex justify-start gap-4">
      <CircleProgressIndicator title="Loading Progress" progress={0} color="#04e762" />
      <CircleProgressIndicator
        className="hidden sm:flex"
        progress={0}
        color="#f5b700"
        title="Rendering Tracker"
      />
      <CircleProgressIndicator
        className="hidden md:flex"
        progress={0}
        color="#dc0073"
        title="Syncing Status"
      />
    </div>
  )
}
