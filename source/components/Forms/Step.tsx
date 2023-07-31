import Image from "next/image";
import {memo, useContext} from "react";
import {usePageNationCtx, pageNationCtx} from "@/utils/pageNationContext";

export type StepType = {
  steps: number[]
}
const Step = (props: StepType) => {
  const pageCtx = useContext(pageNationCtx)

  return (
      <div className={"flex items-center justify-around w-[95%] mx-auto"}>
          {props.steps.map((step, index) => (
              <div key={index} className={"flex items-center justify-around"}>
                <div

                    className={pageCtx.currentStep > step ? "flex items-center justify-center bg-black text-white w-10 h-10 font-bold text-center rounded-full" : `flex items-center justify-center bg-white w-10 h-10 text-[14px] text-center rounded-full ${pageCtx.currentStep === step ? "border-black text-black" : "border-300 text-gray-300" } border-4`}
                >
                  {pageCtx.currentStep > step ? (
                      <svg className={"fill-white text-xl"} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
                  ) : (
                      <span className={"text-xl"}>{step}</span>
                  )}
                </div>
                <div className={`${step === 5 ? "hidden" : "block"} w-[40px] h-[2px] ${pageCtx.currentStep > step ? "bg-black" : "bg-gray-300"} `} />
              </div>
          ))}
      </div>
    )
}

export default memo(Step)
