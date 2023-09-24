import Image from "next/image"

const Heading = () => {
  return (
    <div className="flex justify-center items-center mt-[3rem] sm:mt-[4rem]">
        <h1 className="font-bold tracking-[0.8rem] sm:tracking-[1.4rem] text-[3rem] text-[#F3683B] text-center sm:text-[7rem]">Gøøse</h1>
        <div className="relative h-[3.7rem] w-[3.7rem] sm:h-[8rem] sm:w-[8rem] hover:animate-bounce ease-in-out duration-700">
            <Image fill src="/goose.png" className="object-cover"></Image>
        </div>
    </div>
  )
}

export default Heading