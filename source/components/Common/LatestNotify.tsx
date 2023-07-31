import { memo } from "react";

const LatestNotify = () => {
    const date = new Date()
    const today = `${date.getMonth() + 1}月${date.getDate()}日`
    return (
        <div className={"w-full bg-black text-white font-[700] text-right text-sm py-[8px] px-[1em]"}>
            <span>{today}</span>時点、募集中！
        </div>
    )
}
export default memo(LatestNotify)
