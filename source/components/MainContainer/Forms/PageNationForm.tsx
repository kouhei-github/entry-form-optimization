import React, {memo, useContext, useEffect, useRef, useState} from 'react';
import { pageNationCtx} from "@/utils/pageNationContext";
import Header from '@/components/Common/Header'
import Step from '@/components/Forms/Step'
import LatestNotify from '@/components/Common/LatestNotify'
import {myFormContext, useMyFormContext} from '@/utils/formContext'
import DefaultForm from '@/components/Forms/DefaultForm'
import Footer from '@/components/Common/Footer'

const defaultStyle = "h-[105vh] z-[999] bg-black opacity-40 absolute top-0 w-full "
const Job = () => {
    const customCtx = useMyFormContext();

    const usePaginationCtx = useContext(pageNationCtx);
    // ページネーションの際にページネーションの際に黒い画面を差し込む
    const [pageNationOpacity, setPageNationOpacity] = useState<string>(defaultStyle + "hidden")

    const isFirstRender = useRef(false);
    useEffect(() => { // このeffectは初回レンダー時のみ呼ばれるeffect
        isFirstRender.current = true
    }, [])


    useEffect(() => {
        if(isFirstRender.current){
            isFirstRender.current = false;
        } else {
            setPageNationOpacity(defaultStyle + "block")
            setTimeout(() =>{
                setPageNationOpacity(defaultStyle + "hidden")
            }, 300)
        }
    }, [usePaginationCtx.currentStep])

    return (
        <div className={"relative"}>
            <div className={pageNationOpacity} />
            <div className={"bg-[rgb(238,238,238)] flex flex-col min-h-screen"}>
                <div className={"h-[20vh] bg-white"}>
                    <div className={"bg-white"}>
                        <Header />
                    </div>
                    <div className={"py-2"}>
                        <Step steps={[1,2,3,4,5]} />
                    </div>
                    <LatestNotify />
                </div>
                <div className={usePaginationCtx.currentStep === 2 ? "h-[80vh] bg-white overflow-y-scroll" : usePaginationCtx.currentStep === 5 ? "h-[75vh] bg-white overflow-y-scroll" : "h-[75vh] bg-white overflow-y-scroll"}>
                    <myFormContext.Provider value={customCtx}>
                        <DefaultForm />
                    </myFormContext.Provider>
                </div>
                <div className={usePaginationCtx.currentStep === 2 ? "hidden" : "block z-[80]"}>
                    <div className={usePaginationCtx.currentStep === 2 ? "h-[2vh]  bg-white border-t-2 border-[rgb(206,206,206)]" : "h-[5vh] bg-white sticky bottom-0 border-t-2 border-[rgb(206,206,206)]"}>
                        <div className={`w-[100%] flex items-center justify-center bg-white ${usePaginationCtx.currentStep === 2 ? "h-[36px]" : "h-[30px]"}`}>
                            <Footer />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(Job);
