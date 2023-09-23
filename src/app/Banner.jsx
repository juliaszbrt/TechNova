'use client'
import Marquee from 'react-fast-marquee';

const Banner = () => {
  return (
    <div>
        <div className="h-[3rem] sm:h-[5rem] bg-[#FAA0B1] flex items-center text-[#7A2C3B]">
            <Marquee>
                <p className="whitespace-nowrap sm:text-[2rem] ">
                    &nbsp;word&nbsp;&nbsp;word&nbsp;&nbsp;word&nbsp;
                    &nbsp;word&nbsp;&nbsp;word&nbsp;&nbsp;word&nbsp;
                    &nbsp;word&nbsp;&nbsp;word&nbsp;&nbsp;word&nbsp;
                    &nbsp;word&nbsp;&nbsp;word&nbsp;&nbsp;word&nbsp;
                </p>
            </Marquee>
        </div>
        <div className="h-[0.8rem] bg-[#681928] sm:h-[1.8rem]">
        </div>
    </div>
  )
}

export default Banner