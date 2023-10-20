import Image from 'next/image'
import { Inter } from 'next/font/google'
import Hero from '@/components/Hero/Hero'
import useAuthUser from '@/hooks/useAuthUser'
import Slidebar from '@/components/Slidebar/Slidebar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  // const user = useAuthUser();
  // console.log(user)
  // if(!user) return <Hero />

  return (
    <div>
      <Hero />
    </div>
    // <div className='app'> 
    //   <div className='app__body'>
    //     <Slidebar user={user} />
    //   </div>
    // </div>
  )
}
