'use client'
import Marquee from 'react-fast-marquee';

const Banner = () => {
  return (
    <div>
        <div className="h-[7rem] text-[1.5rem] sm:h-[10rem] bg-[#FFDED2] flex items-center text-[#F3683B]">
            <Marquee speed={50}>
                <p className="whitespace-nowrap sm:tracking-[7px] tracking-[4px] sm:text-[2.5rem] ">
                    CREATE TOKEN&nbsp;&nbsp;MINT TOKEN&nbsp;&nbsp;CHECK BALANCE&nbsp;
                    PAUSE TOKEN&nbsp;&nbsp;RESUME TOKEN&nbsp;&nbsp;
                </p>
            </Marquee>
        </div>
    </div>
  )
}

export default Banner