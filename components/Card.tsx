import Image from './Image'
import Link from './Link'
import TagInCard from '@/components/TagInCard'
import { type Practice } from '@/data/workshopData'

const Card = ({ title, tags, description, imgSrc, href }: Practice) => (
  <div className="p-4">
    <div
      className={`${
        imgSrc && 'h-full'
      }  overflow-hidden rounded-md border-2 border-gray-200 border-opacity-60 dark:border-gray-700`}
    >
      {imgSrc &&
        (href ? (
          <Link href={href} aria-label={`Link to ${title}`}>
            <Image
              alt={title}
              src={imgSrc}
              className="w-full object-cover object-center transition-transform duration-300 hover:scale-105"
              width={544}
              height={306}
            />
          </Link>
        ) : (
          <Image
            alt={title}
            src={imgSrc}
            className="w-full object-cover object-center transition-transform duration-300 hover:scale-105"
            width={544}
            height={306}
          />
        ))}
      <div className="p-6">
        <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">
          {href ? (
            <Link href={href} aria-label={`Link to ${title}`}>
              {title}
            </Link>
          ) : (
            title
          )}
        </h2>
        <TagInCard tags={tags} />
        <p className="prose max-w-none text-gray-500 dark:text-gray-400">{description}</p>
        {/* {href && (
          <Link
            href={href}
            className="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label={`Link to ${title}`}
          >
            Learn more &rarr;
          </Link>
        )} */}
      </div>
    </div>
  </div>
)

export default Card
