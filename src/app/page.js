import Heading from './Heading';
import Description from './Description';
import Banner from './Banner';
import Banner2 from './Banner2';
import Image from 'next/image'
// import { Anton } from '@next/font/google';

// const anton = Anton({
//   subsets: ['latin'],
//   weight: ['400']
// })

export default function Home() {
  return (
    <main className="h-screen flex-col">
      <div className="justify-center">
        <div>
          <Banner/>
        </div>
        <div>
          <Heading/>
        </div>
        <div>
          <Description/>
        </div>
        <div className="">
          <Banner2/>
        </div>
      </div>
    </main>
  )
}
