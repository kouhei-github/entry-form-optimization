import React from 'react'
import Image from 'next/image'

export default function Popup(props: {message: string}) {
  return (
    <div className={"flex items-center justify-center"}>
      <Image
          src={"/cute.webp"}
          alt={"矢印"}
          width={55}
          height={55}
          className="object-contain opacity-70"
      />

      <div className={"relative text-[13px] w-2/3 ml-6 bg-[#e2f4f5] font-[600] p-2"}>
        <div className={"absolute md:-left-[30px] sm:-left-[20px] -left-[8%] md:top-[2px] sm:top-[10px] top-[30%] w-0 h-0 border-t-[17px] border-t-transparent border-r-[30px] border-r-[#e2f4f5] border-b-[17px] border-b-transparent"} />
        <p>{props.message}</p>
      </div>
    </div>
  )
}
