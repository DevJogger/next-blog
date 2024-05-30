'use client'

import { type Practice } from '@/data/workshopData'
import { useTheme } from 'next-themes'

const TagInCard = ({ tags }: { tags: Practice['tags'] }) => {
  const { theme } = useTheme()

  if (tags && tags?.length > 0) {
    return (
      <h3 className="mb-3 flex gap-2">
        {tags.map((tag, i) => (
          <span
            className={`font-bold ${tag === 'HTML' ? 'text-[#6abecd]' : tag === 'CSS' ? 'text-[#3e54a3]' : tag === 'JS' ? 'text-[#cf6390]' : 'text-[#aad742]'}${theme === 'dark' ? ' brightness-200' : ''}`}
            key={i}
          >
            {tag}
          </span>
        ))}
      </h3>
    )
  }
}

export default TagInCard
