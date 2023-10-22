import Image from 'next/image'
import { Inter } from 'next/font/google'
import Hero from '@/components/Hero/Hero'
import useAuthUser from '@/hooks/useAuthUser'
import Slidebar from '@/components/Slidebar/Slidebar'
import Chat from '@/components/Chat/Chat'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const user = useAuthUser()
  if(!user) return <Hero />

  return (
    <div className='app'> 
    <div className='app__body'>
      <Slidebar user={user} />
      <Chat     user={user} />
    </div>
  </div>
  )
}
