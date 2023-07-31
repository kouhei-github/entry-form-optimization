
import{useState}  from 'react'
import {motion, useAnimationControls} from "framer-motion";

const wrapperVariants = {
    hidden: {
        opacity: 0,
        x: '100vw'
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: { type: 'linear',stiffness: 70 }
    },
    exit: {
        x: "-100vh",
        transition: { ease: 'easeInOut' }
    }
};
export default function SlideSideway() {
    const [clicked, setClicked] = useState<
        {one: boolean, two: boolean, three: boolean, four: boolean, five: boolean}
    >({one: false, two: false, three: false, four: false, five: false})
    const [count, setCount] = useState(1)
    const next = () => {
        if(count == 1){
            setClicked({...clicked, one: true})
            setCount(count +1)
        } else if(count == 2) {
            setClicked({...clicked, two: true})
            setCount(count +1)

        }else if(count == 3) {
            setClicked({...clicked, three: true})
            setCount(count +1)

        }else if(count == 4) {
            setClicked({...clicked, four: true})
            setCount(count +1)

        }else if(count == 5) {
            setClicked({...clicked, five: true})
            setCount(count +1)
        }
    }

    return (
        <>
            {count}
            {count === 2 ? (
                <motion.div
                    variants={wrapperVariants} initial="hidden" animate={clicked.one ? 'visible' : 'hidden'} exit="exit"
                >
                    <div className={"h-[80px] w-[80px] bg-pink-500 flex items-center justify-center"}>aaa</div>
                </motion.div>
            ) : count === 3 ? (
                <motion.div
                    variants={wrapperVariants} initial="hidden" animate={clicked.two ? 'visible' : 'hidden'} exit="exit"
                >
                    <div className={"h-[80px] w-[80px] bg-green-500 flex items-center justify-center"}>aaa</div>
                </motion.div>
            ) : count === 4 ? (
                <motion.div
                    variants={wrapperVariants} initial="hidden" animate={clicked.three ? 'visible' : 'hidden'} exit="exit"
                >
                    <div className={"h-[80px] w-[80px] bg-blue-500 flex items-center justify-center"}>aaa</div>
                </motion.div>
            ) : count=== 5 ? (
                <motion.div
                    variants={wrapperVariants} initial="hidden" animate={clicked.four ? 'visible' : 'hidden'} exit="exit"
                >
                    <div className={"h-[80px] w-[80px] bg-pink-500 flex items-center justify-center"}>aaa</div>
                </motion.div>
            ) : count === 6 ? (
                <motion.div
                    variants={wrapperVariants} initial="hidden" animate={clicked.five ? 'visible' : 'hidden'} exit="exit"
                >
                    <div className={"h-[80px] w-[80px] bg-green-500 flex items-center justify-center"}>aaa</div>
                </motion.div>
            ) : (
                <></>
            )}
            <motion.div
                className={clicked.four ? "block" : "hidden"}
                variants={wrapperVariants} initial="hidden" animate={clicked.four ? 'visible' : 'hidden'} exit="exit"
            >
                <div className={"h-[80px] w-[80px] bg-pink-500 flex items-center justify-center"}>aaa</div>
            </motion.div>
            <motion.div
                className={clicked.four ? "block" : "hidden"}

                variants={wrapperVariants} initial="hidden" animate={clicked.five ? 'visible' : 'hidden'} exit="exit"
            >
                <div className={"h-[80px] w-[80px] bg-green-500 flex items-center justify-center"}>aaa</div>
            </motion.div>






            <div onClick={() => next()}>Clicked me</div>
        </>

    );
}
