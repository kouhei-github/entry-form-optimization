import Image from "next/image";
import { memo } from "react";
import {motion} from "framer-motion";
import React, {useState} from "react";

const distance = 10;

const PointerAnimation = () => {
    const [x, setX] = useState(distance);
    return (
        <motion.div
            initial={{ x: -distance }}
            animate={{ x }}
            transition={{
                type: "spring",
                duration: 1,
                bounce: 0,
                velocity: 0
            }}
            onAnimationComplete={() => {
            setX(x === distance ? -distance : distance);
        }}
        >
            <Image
                src={"/point.png"}
                alt={"矢印"}
                width={70}
                height={70}
                className="object-contain opacity-80"
            />
        </motion.div>
    )
}

export default memo(PointerAnimation)
