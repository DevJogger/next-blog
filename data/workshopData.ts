export interface Practice {
  id?: number
  title: string
  tags?: ('HTML' | 'CSS' | 'JS' | 'API')[]
  description: string
  href?: string
  imgSrc?: string
}

const workshopData: Practice[] = [
  {
    id: 1,
    title: 'QR code component',
    tags: ['HTML', 'CSS'],
    description: `A perfect first challenge if you're new to HTML and CSS. The card layout doesn't shift, so it's ideal if you haven't learned about building responsive layouts yet. (UI design credit: Frontend Mentor)`,
    imgSrc:
      'https://res.cloudinary.com/dz209s6jk/image/upload/v1642681176/Challenges/qh97gysgjrzqyqlig2al.jpg',
    href: '/workshop/QR-code-component',
  },
]

export default workshopData
