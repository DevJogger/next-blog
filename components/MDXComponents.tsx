import TOCInline from 'pliny/ui/TOCInline'
import Pre from 'pliny/ui/Pre'
import BlogNewsletterForm from 'pliny/ui/BlogNewsletterForm'
import type { MDXComponents } from 'mdx/types'
import Image from './Image'
import CustomLink from './Link'
import EplPlayerCard from '../components/post/EplPlayerCard'
import MultiColorsBoxes from '../components/post/MultiColorsBoxes'
import CircleProgressIndicators from '../components/post/CircleProgressIndicators'
import CircleProgressIndicatorsArbitrary from '../components/post/CircleProgressIndicatorsArbitrary'
import CircleProgressIndicatorsBasicTailwind from '../components/post/CircleProgressIndicatorsBasicTailwind'
import CircleProgressIndicatorsThought from '../components/post/CircleProgressIndicatorsThought'
import HighlightEdge from '../components/post/HighlightEdge'

export const components: MDXComponents = {
  Image,
  TOCInline,
  a: CustomLink,
  pre: Pre,
  BlogNewsletterForm,
  EplPlayerCard,
  MultiColorsBoxes,
  CircleProgressIndicators,
  CircleProgressIndicatorsArbitrary,
  CircleProgressIndicatorsBasicTailwind,
  CircleProgressIndicatorsThought,
  HighlightEdge,
}
