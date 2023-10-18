import Image from 'next/image'
import { Inter } from 'next/font/google'
import Hero from '@/components/Hero/Hero'
import useAuthUser from '@/hooks/useAuthUser'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  useAuthUser();
  return (
    <main className='CustomImg'>
      <Hero />
    </main>
  )
}
