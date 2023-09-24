import Heading from './Heading';
import Description from './Description';
import Banner from './Banner';
import Banner2 from './Banner2';

export default function Home() {
  return (
    <main>
      <div className="my-[3rem] md:my-[4.2rem]">
        <Banner />
        <Heading />
        <Description />
        <Banner2 />
      </div>
    </main>
  )
}
