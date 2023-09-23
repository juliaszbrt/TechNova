'use client'
import Marquee from 'react-fast-marquee';

const Banner2 = () => {
  return (
    <div>
        <div className="h-[7rem] text-[1.5rem] sm:h-[10rem] bg-[#FFDED2] flex items-center text-[#F3683B]">
            <Marquee direction={"right"}>
                <p className="whitespace-nowrap sm:text-[2.5rem]">
                    &nbsp;word&nbsp;&nbsp;word&nbsp;&nbsp;word&nbsp;
                    &nbsp;word&nbsp;&nbsp;word&nbsp;&nbsp;word&nbsp;
                    &nbsp;word&nbsp;&nbsp;word&nbsp;&nbsp;word&nbsp;
                    &nbsp;word&nbsp;&nbsp;word&nbsp;&nbsp;word&nbsp;
                    &nbsp;word&nbsp;&nbsp;word&nbsp;&nbsp;word&nbsp;
                    &nbsp;word&nbsp;&nbsp;word&nbsp;&nbsp;word
                </p>
            </Marquee>
        </div>
    </div>
  )
}

export default Banner2