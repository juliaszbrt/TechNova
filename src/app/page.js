import Title from './Title';
import Description from './Description';
import Banner from './Banner';
import Image from 'next/image'
import { Anton } from '@next/font/google';

const anton = Anton({
  subsets: ['latin'],
  weight: ['400']
})

export default function Home() {
  return (
    <main className="bg-[#F1718A] h-screen">
      <div>
        <Banner/>
      </div>
      <div className={anton.className}>
        <Title/>
      </div>
      <div>
        <Description/>
      </div>
    </main>
  )
}
