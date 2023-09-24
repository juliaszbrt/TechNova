import Image from "next/image"

const Heading = () => {
  return (
    <div className="flex justify-center items-center mt-[0.7rem] sm:mt-[3.5rem]">
        <h1 className="font-bold tracking-[0.6rem] sm:tracking-[1rem] text-[3rem] text-[#F3683B] text-center sm:text-[7rem]">Gøøse</h1>
        <div className="relative h-[3.7rem] w-[3.7rem] sm:h-[8rem] sm:w-[8rem]">
            <Image fill src="/goose.png" className="object-cover"></Image>
        </div>
    </div>
  )
}

export default Heading