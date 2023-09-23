import Image from "next/image"

const Heading = () => {
  return (
    <div className="flex justify-center mt-[0.7rem] sm:mt-[3.5rem]">
        <h1 className="tracking-[0.6rem] sm:tracking-[1rem] text-[3rem] text-[#F3683B] text-center sm:text-[7rem]">Goose</h1>
        <div>
            <Image></Image>
        </div>
    </div>
  )
}

export default Heading