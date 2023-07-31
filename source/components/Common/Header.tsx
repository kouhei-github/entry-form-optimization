import Image from "next/image";


export default function Header() {
    return (
        <header className="relative py-[7px] px-3 shadow-xl">
            <div className="flex items-center space-x-2">
                <div className={"font-bold text-black"}>株式会社〇〇〇〇</div>
            </div>
            <Image
                src={"/easy-apply.webp"}
                alt={"強み"}
                width={100}
                height={60}
                className="object-contain absolute right-[2%] bottom-[0%]"
            />
        </header>
    )
}
