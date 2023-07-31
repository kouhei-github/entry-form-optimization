import React, {useContext, memo, useEffect, useState, useMemo} from "react";
import {myFormContext} from '@/utils/formContext'
import Required from "@/components/Forms/Label/Required";
import ImageSelect, {ImageType} from "@/components/Forms/parts/ImageSelect";
import Image from "next/image";
import PointerAnimation from "@/components/Common/PointerAnimation";
import {pageNationCtx} from "@/utils/pageNationContext";
import Optional from '@/components/Forms/Label/Optional'
import Text from '@/components/Forms/parts/Text'
import Select from '@/components/Forms/parts/Select'
import {CityType, getCityFromPrefecture} from '@/services/getCityFromPrefecture'
import getPrefAndCityFromPostCode from '@/services/getPrefANdCityFromPostalCode'
import {prefectures} from '@/models/prefectureModel'
import {birthDayMonths, birthDays, birthDayYears} from '@/models/birsdayModel'
import {motion} from "framer-motion";
import {slideSidewayIn} from "@/services/framerMotionValue";
import Popup from '@/components/Animation/Popup'
import {postToEndpoint} from '@/models/postToEndpoint'
import {useRouter} from 'next/router'
import {generateUuid} from '@/utils/generateUuid'

const buttonClass = "w-[70%] cursor-pointer mx-auto text-white h-[50px] flex items-center justify-center rounded-[6px] bg-black border-[2px] font-[700] text-[20px] border-black "

const gender: ImageType[] = [
  {altText: "男性"},
  {altText: "女性"},
]

const jobChanges: ImageType[] = [
  {altText: "未定"},
  {altText: "１ヶ月以内"},
  {altText: "３ヶ月以内"},
  {altText: "半年以内"},
  {altText: "１年以内"},
  {altText: "１年以上先"},
]


const DefaultForm = () => {
  // バリデーション
  const [validate, setValidate] = useState({
    tel: "電話番号は10文字以上でなければなりません",
    postCode: "郵便番号は7文字でなければなりません",
    email: "メールアドレスの形式ではありません"
  })

  const [handPosition, setHandlePosition] = useState("absolute top-[10px] right-[90px] z-50")
  const customCtx = useContext(myFormContext)
  // ユニークIDの生成
  const originalId = useMemo(() => generateUuid(), []);
  const watcher = customCtx.form
  const pageCtx = useContext(pageNationCtx);
  const pageWatcher = pageCtx.currentStep
  const [buttonOpacity, setButtonOpacity] = useState<string>(buttonClass + "opacity-50")
  const [beforeState, setBeforeState] = useState<
      {city: string, pref: string, postCode: string, year: string, month: string, day: string, gender: string}
  >(
      {
        city: customCtx.form.city,
        pref: customCtx.form.pref,
        postCode: customCtx.form.postCode,
        year: customCtx.form.year,
        month: customCtx.form.month,
        day: customCtx.form.day,
        gender: customCtx.form.gender,
      }
  )
  useEffect(() => {
    if(watcher.gender === "" && pageWatcher === 1){
      setButtonOpacity(buttonClass + "opacity-50")
      setHandlePosition("absolute top-[10px] right-[90px] z-50")
      return
    }
    if(watcher.gender !== "" && pageWatcher === 1){
      setButtonOpacity(buttonClass + "opacity-100 shadow-md shadow-gray-500")
      setHandlePosition("absolute -bottom-[8%] right-[20px] z-50")
      if(beforeState.gender !== watcher.gender){
        pageCtx.setCurrentStep(pageCtx.currentStep + 1)
        setClicked({ ...clicked, two: true, one: false})
      }

      setBeforeState({...beforeState, gender: watcher.gender,  })
      return
    }
    if(watcher.postCode !== "" && isNaN(Number(watcher.postCode)) && pageWatcher === 2){
      setValidate({...validate, postCode: "数値以外が入力されています"})
    } else {
      setValidate({...validate, postCode: "郵便番号は7文字でなければなりません"})
    }

    if(watcher.pref === "選択してください" && pageWatcher === 2){
      setButtonOpacity(buttonClass + "opacity-50")
      setHandlePosition("absolute top-[42%] right-[10%] z-50")
      setBeforeState({...beforeState, pref: watcher.pref })
      return
    }
    if(watcher.city === "市区町村" && pageWatcher === 2){
      setButtonOpacity(buttonClass + "opacity-50")
      setHandlePosition("absolute top-[55%] right-[10%] z-50")
      return
    }
    if(watcher.pref !== "選択してください" && watcher.city !== "市区町村" && pageWatcher === 2){
      setButtonOpacity(buttonClass + "opacity-100 shadow-md shadow-gray-500")
      setHandlePosition("absolute -bottom-[7%] right-[20px] z-50")
      if(beforeState.city !== watcher.city){
        if(watcher.postCode === ""){
          pageCtx.setCurrentStep(pageCtx.currentStep + 1)
          setClicked({ ...clicked, three: true, two: false})
        }
      }

      setBeforeState({...beforeState, city: watcher.city, pref: watcher.pref  })
      return
    }

    if(watcher.year === "年" && pageWatcher === 3){
      setButtonOpacity(buttonClass + "opacity-50")
      setHandlePosition("absolute top-[47%] right-[63%] z-50")
      setBeforeState({...beforeState, year: watcher.year })
      return
    }

    if(watcher.month === "月" && pageWatcher === 3){
      setButtonOpacity(buttonClass + "opacity-50")
      setHandlePosition("absolute top-[47%] right-[30%] z-50")
      setBeforeState({...beforeState, month: watcher.month })
      return
    }

    if(watcher.day === "日" && pageWatcher === 3){
      setButtonOpacity(buttonClass + "opacity-50")
      setHandlePosition("absolute top-[47%] right-[4%] z-50")
      setBeforeState({...beforeState, day: watcher.day })
      return
    }
    if(watcher.year !== "年" && watcher.month !== "月" && watcher.day !== "日" && pageWatcher === 3){
      setButtonOpacity(buttonClass + "opacity-100 shadow-md shadow-gray-500")
      setHandlePosition("absolute -bottom-[14%] right-[6%] z-50")
      if(beforeState.month !== watcher.month || beforeState.year !== watcher.year || beforeState.day !== watcher.day){
        pageCtx.setCurrentStep(pageCtx.currentStep + 1)
        setClicked({ ...clicked, four: true, three: false})
      }
      setBeforeState({...beforeState, year: watcher.year, month: watcher.month, day: watcher.day  })
      return
    }
    if(watcher.name === "" && pageWatcher === 4){
      setButtonOpacity(buttonClass + "opacity-50")
      setHandlePosition("absolute top-[42px] right-[30px] z-50")
      return
    }
    if(watcher.kana === "" && pageWatcher === 4){
      setButtonOpacity(buttonClass + "opacity-50")
      setHandlePosition("absolute top-[42px] right-[30px] z-50")
      return
    }
    if(watcher.name !== "" && watcher.kana !== ""  && pageWatcher === 4){
      setButtonOpacity(buttonClass + "opacity-100 shadow-md ")
      setHandlePosition("absolute top-[94%] right-[8%] z-50")
      return
    }
    if(watcher.tel.length < 10 && pageWatcher === 5){
      setButtonOpacity(buttonClass + "opacity-50")
      setHandlePosition("absolute top-[42px] right-[30px] z-50")
      setValidate({...validate, tel: "電話番号は10文字以上でなければなりません"})
      return
    }

    if(isNaN(Number(watcher.tel)) && pageWatcher === 5){
      setValidate({...validate, tel: "数値以外が入力されています"})
      return
    }
    setValidate({...validate, tel: ""})

    if(watcher.mail === "" && pageWatcher === 5){
      setButtonOpacity(buttonClass + "opacity-50")
      setHandlePosition("absolute top-[62px] right-[30px] z-50")
      return
    }

    if(!watcher.mail.match(/.+@.+\..+/)){
      setButtonOpacity(buttonClass + "opacity-50")
      setHandlePosition("absolute top-[62px] right-[30px] z-50")
      return
    }

    if(watcher.tel !== "" && watcher.mail !== "" && pageWatcher === 5){
      setButtonOpacity(buttonClass + "opacity-100 shadow-md ")
      setHandlePosition("absolute top-[94%] right-[8%] z-50")
      return
    }

  }, [watcher, pageWatcher])

  const [cities, setCities] = useState<string[]>(["市区町村"])
  const getCity = async () => {
    const data = await getCityFromPrefecture( prefectures.indexOf( watcher.pref ) )
    let cityData: CityType[] = data.data
    const city = cityData.map( (city) => city.name )
    city.unshift( "市区町村" )
    setCities( city )
  }

  const getAddress = async () => {
    if ( customCtx.form.postCode === "") return
    const temporaryPostCode: {status: number, result: (string | number)[]} = await getPrefAndCityFromPostCode(customCtx.form.postCode.replaceAll("-", ""))

    if(typeof temporaryPostCode === "undefined") return

    if (temporaryPostCode.status === 200){
      // 都道府県を表示
      const prefNum = Number(temporaryPostCode.result[0])
      const pref = prefectures[prefNum]

      // 市区町村名を表示
      const city = String(temporaryPostCode.result[1])

      customCtx.setIsForm({
        ...customCtx.form,

        "postCode": customCtx.form.postCode,
        "pref": pref,
        "city": city
      })
    }
  }

  useEffect(() => {
    if (watcher.postCode !== "" && beforeState.postCode !== watcher.postCode){
      if(watcher.postCode.replaceAll("-", "").length === 7){
        getAddress()
        setBeforeState({...beforeState, city: watcher.city, pref: watcher.pref, postCode: watcher.postCode })
        return
      }
    }
    if (watcher.pref !== "" && beforeState.pref !== watcher.pref) {
      getCity()
      return
    }
  }, [watcher])

  const router = useRouter();
  const [clicked, setClicked] = useState<
      {one: boolean, two: boolean, three: boolean, four: boolean, five: boolean}
  >({one: true, two: false, three: false, four: false, five: false})
  const nextPage = async () => {
    if(customCtx.form.gender !== "" && pageCtx.currentStep === 1){
      pageCtx.setCurrentStep(pageCtx.currentStep + 1)
      setClicked({ ...clicked, one: false, two: true})
    } else if(customCtx.form.pref !== "選択してください" && customCtx.form.city !== "市区町村" && pageCtx.currentStep === 2){
      pageCtx.setCurrentStep(pageCtx.currentStep + 1)
      setClicked({ ...clicked, three: true, two: false})
    } else if(customCtx.form.year !== "年" && customCtx.form.month !== "月" && customCtx.form.day !== "日" && pageCtx.currentStep === 3){
      pageCtx.setCurrentStep(pageCtx.currentStep + 1)
      setClicked({ ...clicked, four: true, three: false})
    } else if(customCtx.form.name !== "" && customCtx.form.kana !== "" && pageCtx.currentStep === 4) {
      pageCtx.setCurrentStep(pageCtx.currentStep + 1)
      setClicked({ ...clicked, five: true, four: false})
      customCtx.setIsForm({...customCtx.form, applyId: originalId})
    } else if(validate.tel === "" && customCtx.form.mail.match(/.+@.+\..+/) && pageCtx.currentStep === 5) {
      pageCtx.setCurrentStep(pageCtx.currentStep + 1)
      // TODO バックエンドへ送信する処理を書く
      // await postToEndpoint(customCtx.form)
      const today = new Date();
      today.setMinutes(today.getMinutes()+2)
      const applyDate = today.getTime()
      // サンクスページに飛ばす
//      window.location.href = `/thanks?applyId=${originalId}&applyDate=${applyDate}`
      router.push({
        pathname:"/thanks",   //URL
        query: {applyId :originalId, applyDate: applyDate} //検索クエリ
      });
    }
  }

  const prevPage = () => {
    pageCtx.setCurrentStep(pageCtx.currentStep -1)
    if(pageCtx.currentStep === 5){
      pageCtx.setCurrentStep(pageCtx.currentStep - 1)
      setClicked({ ...clicked, four: true, five: false})
    } else if(pageCtx.currentStep === 4){
      pageCtx.setCurrentStep(pageCtx.currentStep - 1)
      setClicked({ ...clicked, three: true, four: false})
    } else if(pageCtx.currentStep === 3){
      pageCtx.setCurrentStep(pageCtx.currentStep - 1)
      setClicked({ ...clicked, two: true, three: false})
    } else if( pageCtx.currentStep === 2) {
      pageCtx.setCurrentStep(pageCtx.currentStep - 1)
      setClicked({ ...clicked, one: true, two: false})
    }
  }


  return (
      <div className={"bg-white relative h-max w-[95%] mx-auto text-[text-[#333]]"}>
        {pageCtx.currentStep < 6 ? (
            <div className={`${handPosition}`}>
              <PointerAnimation />
            </div>
        ) : (
         <></>
        )}
        <motion.div
            className={pageCtx.currentStep === 1 ? "block" : "hidden"}
            variants={slideSidewayIn} initial={"hidden"} animate={clicked.one ? 'visible' : 'hidden'} exit="exit"
        >
          <h2 className={"text-[14px] font-[700] m-[2px] text-[rgb(51,51,51)]"}>性別を教えてください</h2>
          <div>
            <div className="flex items-center justify-between w-full">
              <Required require={"必須"} labeling={"働き方"} />
            </div>
            <div className={"w-full"}>
              <ImageSelect property={"gender"} images={gender} isMultiple={false} />
            </div>
          </div>
        </motion.div>

        <motion.div
            className={pageCtx.currentStep === 2 ? "block" : "hidden"}
            variants={slideSidewayIn} initial={"hidden"} animate={clicked.two ? 'visible' : 'hidden'} exit="exit"
        >
          <h2 className={"text-[14px] font-[700] m-[2px] text-[rgb(51,51,51)]"}>現在のお住まいは？</h2>

          <div>
            <div className="flex items-center w-full space-x-1">
              <Optional require={"任意"} labeling={"郵便番号"} />
              <span className="text-[3vw] font-[400] mt-1">（住所自動入力）</span>
            </div>
            <div className={"w-full relative"}>
              <Text
                  type={"text"}
                  placeholder={"例) 1234567"}
                  inputstyle={'border border-[#bfbec5] mx-auto w-full cursor-pointer h-12 items-center grid rounded pl-4 text-[#12243a]'}
                  property={"postCode"}
              />

              {customCtx.form.postCode.replaceAll("-", "").length >= 1 && customCtx.form.postCode.replaceAll("-", "").length < 7 ? (
                  <>
                    <div className={"flex items-center space-x-2"}>
                      <Image
                          src={"/icon-caution.webp"}
                          alt={"注意"}
                          width={12}
                          height={12}
                          className="object-contain"
                      />
                      <p className={"text-[#ff3330] font-[700] text-[14px]"}>{validate.postCode}</p>
                    </div>
                    <div className={"absolute -top-[10%] right-0 bg-blue-200 px-[2px] py-[1px] text-[rgb(85,85,85)] text-[10px]"}>ハイフンなし <span className={"font-[700] text-[#ff3330]"}>あと{7 - customCtx.form.postCode.replaceAll("-", "").length}桁</span></div>
                  </>
              ) : (
                  <></>
              )}
            </div>
            <div className="flex items-center justify-between w-full my-2">
              <Required require={"必須"} labeling={"住所"} />
            </div>
            <div className={"w-full mb-[4vw]"}>
              <Select
                  array={prefectures}
                  inputstyle={'border border-[rgb(118,118,118)] mx-auto w-full cursor-pointer h-12 items-center grid rounded px-[3vw] text-[#12243a]　text-[4.3vw]'}
                  property={"pref"}
              />
            </div>
            <div className={"w-full my-4"}>
              <Select
                  array={cities}
                  inputstyle={'border border-[rgb(118,118,118)]  mx-auto w-full cursor-pointer h-12 items-center grid rounded px-[3vw] text-[#12243a]'}
                  property={"city"}
              />
            </div>
          </div>
          <div className={"mt-2 mb-14"}>
            <Popup message={"従業員数〇〇以上！福利厚生充実！〇〇〇〇で働くなら！株式会社〇〇"} />
          </div>

        </motion.div>

        <motion.div
            className={pageCtx.currentStep === 3 ? "block" : "hidden"}
            variants={slideSidewayIn} initial="hidden" animate={clicked.three ? 'visible' : 'hidden'} exit="exit"
        >
          <h2 className={"text-[14px] font-[700] m-[5px] text-[rgb(51,51,51)]"}>生年月日を選択してください。</h2>
          <Required require={"必須"} labeling={"生まれた年・月・日"} />
          <div className={"w-full flex items-center justify-center space-x-1"}>
            <div className={"w-[30%] flex items-center"}>
              <Select
                  array={birthDayYears}
                  inputstyle={'border border-[rgb(118,118,118)] mx-auto w-full cursor-pointer h-11 items-center grid rounded px-[3vw] text-[#12243a]'}
                  property={"year"}
              />
            </div>
            <span className={"w-[5%] mx-auto text-center"}>年</span>
            <div className={"w-[30%]  flex items-center"}>
              <Select
                  array={birthDayMonths}
                  inputstyle={'border border-[rgb(118,118,118)]  mx-auto w-full cursor-pointer h-11 items-center grid rounded px-[3vw] text-[#12243a]'}
                  property={"month"}
              />
            </div>
            <span className={"w-[5%] mx-auto text-center"}>月</span>

            <div className={"w-[30%]  flex items-center"}>
              <Select
                  array={birthDays}
                  inputstyle={'border border-[rgb(118,118,118)]  mx-auto w-full cursor-pointer h-11 items-center grid rounded px-[3vw] text-[#12243a]'}
                  property={"day"}
              />
            </div>
            <span className={"w-[5%] mx-auto text-center"}>日</span>
          </div>
        </motion.div>

        <motion.div
            className={pageCtx.currentStep === 4 ? "block" : "hidden"}
            variants={slideSidewayIn} initial="hidden" animate={clicked.four ? 'visible' : 'hidden'} exit="exit"
        >
          <h2 className={"text-[14px] font-[700] m-[5px] text-[rgb(51,51,51)]"}>お名前・ふりがなを入力してください</h2>
          <Required require={"必須"} labeling={"お名前(漢字)"} />
          <div className={"w-full"}>
            <Text
                type={"text"}
                placeholder={"例) 山田太郎"}
                inputstyle={'border border-[#bfbec5] mx-auto w-full cursor-pointer h-12 items-center grid rounded pl-4 text-[#12243a]'}
                property={"name"}
            />
          </div>
          <Required require={"必須"} labeling={"ふりがな"} />
          <div className={"w-full"}>
            <Text
                type={"text"}
                placeholder={"例) やまだたろう"}
                inputstyle={'border border-[#bfbec5] mx-auto w-full cursor-pointer h-12 items-center grid rounded pl-4 text-[#12243a]'}
                property={"kana"}
            />
          </div>
        </motion.div>

        <motion.div
            className={pageCtx.currentStep === 5 ? "block" : "hidden"}
            variants={slideSidewayIn} initial="hidden" animate={clicked.five ? 'visible' : 'hidden'} exit="exit"
        >
          <h2 className={"text-[14px] font-[700] m-[5px] text-[rgb(51,51,51)]"}>ご連絡先を入力してください。</h2>
          <Required require={"必須"} labeling={"電話番号"} />
          <div className={"w-full"}>
            <Text
                type={"tel"}
                placeholder={"例) 09011112222"}
                inputstyle={'border border-[#bfbec5] mx-auto w-full cursor-pointer h-12 items-center grid rounded pl-4 text-[#12243a]'}
                property={"tel"}
            />
          </div>

          <div className={`flex items-center space-x-2 ${validate.tel === "" ? "hidden" : "block"}`}>
            <Image
                src={"/icon-caution.webp"}
                alt={"注意"}
                width={12}
                height={12}
                className="object-contain"
            />
            <p className={"text-[#ff3330] font-[700] text-[14px]"}>{validate.tel}</p>
          </div>

          <p className={"bg-[#ffebeb] text-[12px] py-[4px] px-[10px] my-[5px] rounded-[3px] tracking-[.05em] text-[#777] font-[700]"}>お電話にて非公開求人をご紹介いたします。</p>
          <Required require={"必須"} labeling={"メールアドレス"} />
          <div className={"w-full"}>
            <Text
                type={"text"}
                placeholder={"例) free@yourmail.com"}
                inputstyle={'border border-[#bfbec5] mx-auto w-full cursor-pointer h-12 items-center grid rounded pl-4 text-[#12243a]'}
                property={"mail"}
            />
          </div>
          {customCtx.form.mail.length >= 1 && !customCtx.form.mail.match(/.+@.+\..+/) ? (
              <div className={"flex items-center space-x-2"}>
                <Image
                    src={"/icon-caution.webp"}
                    alt={"注意"}
                    width={12}
                    height={12}
                    className="object-contain"
                />
                <p className={"text-[#ff3330] font-[700] text-[14px]"}>{validate.email}</p>
              </div>
          ) : (
              <></>
          )}
        </motion.div>

        {pageCtx.currentStep < 6 ? (
            <div className={"my-6 flex items-center justify-center relative"}>
              {pageCtx.currentStep === 1 ? (
                  <></>
              ) : (
                  <div　onClick={() => prevPage()} className={"text-[#333] w-[25%] h-[50px] flex items-center justify-center rounded-[6px] mx-auto text-[14px] text-center border-[2px] border-[#dfdfdf] font-[700] shadow-md"}>戻る</div>
              )}

              <div onClick={() => nextPage()} className={pageCtx.currentStep === 5 ? buttonOpacity.replace(" h-[50px]", " h-[55px]").replace("bg-[rgb(45,99,131)]", "bg-[#ff7f00]").replace("border-[rgb(45,99,131)]", "border-[#ff7f00] shadow-md shadow-[#b75700]") : buttonOpacity}>

                {pageCtx.currentStep === 4 ? (
                    <span className={"tracking-[.05em]"}>残り1STEP</span>
                ) : pageCtx.currentStep === 5 ? (
                    <p className={"tracking-[.05em] text-[2vw] w-full text-center"}>
                      <span className={"text-white text-[12px] font-[700]"}>利用規約と個人情報の取扱いに</span><br />
                      <span className={"text-[17px] font-[700]"}>同意して次へ進む</span>
                    </p>
                ) : (
                    <>次へ</>
                )}
              </div>
            </div>
        ) : (
          <></>
        )}
      </div>
  );
};

export default memo(DefaultForm);
