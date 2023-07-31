
import {pageNationCtx, usePageNationCtx} from '@/utils/pageNationContext'
import React, {useContext, useEffect, useRef, useState} from 'react'
import Step from '@/components/Forms/Step'
import Header from '@/components/Common/Header'
import LatestNotify from '@/components/Common/LatestNotify'
import Footer from '@/components/Common/Footer'
import {useRouter} from 'next/router'

export default function Home() {

  const pageCtx = usePageNationCtx(6);
  
  return (
      <>


        <pageNationCtx.Provider value={pageCtx}>
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
            <div className={"h-[75vh] bg-white overflow-y-scroll"}>
              <div className={"h-[65vh] w-full"}>
                <h3 className={"mt-12 text-[#DD370D] text-[20px] font-bold text-center"}>応募いただきありがとうございます！</h3>
                <div className={"my-6 text-center mx-auto w-max text-[16px] text-[#515151]"}>
                  <p>1営業日以内を目安に、<br />担当者よりご連絡いたします</p>
                </div>
              </div>
            </div>
            <div className={"block"}>
              <div className={"h-[5vh] bg-white sticky bottom-0 border-t-2 border-[rgb(206,206,206)]"}>
                <div className={`w-[100%] flex items-center justify-center bg-white h-[30px]`}>
                  <Footer />
                </div>
              </div>
            </div>
          </div>
        </pageNationCtx.Provider>
      </>
  )
}
