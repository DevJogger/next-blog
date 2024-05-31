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
  {
    id: 2,
    title: 'Blog preview card',
    tags: ['HTML', 'CSS'],
    description: `This HTML & CSS-only challenge is a perfect project for beginners getting up to speed with HTML and CSS fundamentals, like HTML structure and the box model. (UI design credit: Frontend Mentor)`,
    imgSrc:
      'https://res.cloudinary.com/dz209s6jk/image/upload/v1703155602/Challenges/cmab9xsatnq8m04w5ikl.jpg',
    href: '/workshop/Blog-preview-card',
  },
]

export default workshopData
