import React, {useContext, useState} from "react";
import {myFormContext} from '@/utils/formContext'
import Textarea from '@/components/Forms/parts/Textarea'
import Radio from '@/components/Forms/parts/Radio'
import Text from '@/components/Forms/parts/Text'
import Select from '@/components/Forms/parts/Select'

const ApplicationForm= () => {
  const customCtx = useContext(myFormContext)

  const [currentPage, setCurrentPage] = useState(1);

  const validate = () => {
    console.log("そり")
  }

  const sendDataToServer = () => {
    console.log("DBに保存")
    console.log(customCtx.form)
  }

  return (
    <div className={' bg-white w-11/12 mx-auto my-10'}>
        <form className={"md:px-[10%] px-0 mx-auto py-7"}>
          <div className={currentPage === 1 ? "inline-block w-full space-y-8" : "hidden"}>
            <div className=''>
              <div className='flex font-bold items-center mb-1'>
                <div className='md:text-xs text-[9px] bg-[#e95464] py-[2px] px-2 text-white rounded mr-2 h-5 pb-2'>必須</div>
                <label className={'text-[16px] text-[#12243a]'}>お名前</label>
              </div>
              <Text
                  type={"text"}
                  placeholder={"山田太郎"}
                  inputstyle={'border border-[#bfbec5] mx-auto w-full cursor-pointer h-12 items-center grid rounded pl-4 text-[#12243a]'}
                  property={"name"}
              />
            </div>

            <div className=''>
              <div className='flex font-bold items-center mb-1'>
                <div className='md:text-xs text-[9px] bg-[#e95464] py-[2px] px-2 text-white rounded mr-2 h-5 pb-2'>必須</div>
                <label className={'text-[16px] text-[#12243a]'}>フリガナ</label>
              </div>
              <Text
                  type={"text"}
                  placeholder={"ヤマダタロウ"}
                  inputstyle={'border border-[#bfbec5] mx-auto w-full cursor-pointer h-12 items-center grid rounded pl-4 text-[#12243a]'}
                  property={"name"}
              />
            </div>

            <div className=''>
              <div className='flex font-bold items-center mb-1'>
                <div className='md:text-xs text-[9px] bg-[#e95464] py-[2px] px-2 text-white rounded mr-2 h-5 pb-2'>必須</div>
                <label className={'text-[16px] text-[#12243a]'}>性別</label>
                <div className={'font-light text-xs md:mr-0 ml-auto'}>※いずれか1つ選択</div>
              </div>
              <Radio
                  gridstyle={'grid grid-cols-2 gap-2 md:text-[16px] text-[14px]'}
                  btnstyle={'border border-[#bfbec5] text-center mx-auto w-full cursor-pointer h-12 items-center grid rounded text-[#12243a]'}
                  changebtnstyle={'bg-[#1fb5ae] text-white text-center mx-auto w-full cursor-pointer h-12 items-center grid rounded'}
                  array={["男性", "女性"]}
                  property={"gender"}
                  isMultiple={false}
              />
            </div>

            <div className=''>
              <div className='flex font-bold items-center mb-1'>
                <div className='md:text-xs text-[9px] bg-[#e95464] py-[2px] px-2 text-white rounded mr-2 h-5 pb-2'>必須</div>
                <label className={'text-[16px] text-[#12243a]'}>転職時期</label>
                <div className={'font-light text-xs md:mr-0 ml-auto'}>※複数可</div>
              </div>
              <Radio
                  gridstyle={'grid grid-cols-2 gap-2 md:text-[16px] text-[14px]'}
                  btnstyle={'border border-[#bfbec5] text-center mx-auto w-full cursor-pointer h-12 items-center grid rounded text-[#12243a]'}
                  changebtnstyle={'bg-[#1fb5ae] text-white text-center mx-auto w-full cursor-pointer h-12 items-center grid rounded'}
                  array={["1ヶ月以内", "3ヶ月以内", "半年以内", "希望なし"]}
                  property={"name"}
                  isMultiple={true}
              />
            </div>

            <div className=''>
              <div className='flex font-bold items-center mb-1'>
                <div className='md:text-xs text-[9px] bg-[#e95464] py-[2px] px-2 text-white rounded mr-2 h-5 pb-2'>必須</div>
                <label className={'text-[16px] text-[#12243a]'}>都道府県</label>
              </div>
              <Select
                  array={["選択してください", "北海道", "青森県", "岩手県", "宮城県", "秋田県", "山形県", "福島県", "茨城県", "栃木県", "群馬県", "埼玉県", "千葉県", "東京都", "神奈川県", "新潟県", "富山県", "石川県", "福井県", "山梨県", "長野県", "岐阜県", "静岡県", "愛知県", "三重県", "滋賀県", "京都府", "大阪府", "兵庫県", "奈良県", "和歌山県", "鳥取県", "島根県", "岡山県", "広島県", "山口県", "徳島県", "香川県", "愛媛県", "高知県", "福岡県", "佐賀県", "長崎県", "熊本県", "大分県", "宮崎県", "鹿児島県", "沖縄県"]}
                  inputstyle={'border border-[#bfbec5] mx-auto w-full cursor-pointer h-12 items-center grid rounded pl-4 text-[#12243a]'}
                  property={"name"}
              />
            </div>

            <div className=''>
              <div className='flex font-bold items-center mb-1'>
                <div className='md:text-xs text-[9px] bg-[#bfbec5] py-[2px] px-2 text-white rounded mr-2 h-5 pb-2'>任意</div>
                <label className={'text-[16px] text-[#12243a]'}>連絡可能時間帯・メッセージ</label>
              </div>
              <Textarea
                  inputstyle={'border border-[#bfbec5] mx-auto w-full cursor-pointer rounded px-4 pt-3 text-[#12243a]'}
                  cols={55}
                  rows={5}
                  property={"name"}
                  placeholder={'その他資格を保有、ご希望連絡時間がある場合は記載してください。'}
              />
            </div>
          </div>
        </form>

        <div className={'flex flex-cols mx-auto md:px-[10%] md:pb-8 md:w-auto w-[90%] items-end'}>
          <div className={"w-1/4 py-3 mx-auto bg-pink-500 text-white"} onClick={() => validate()}>送信する</div>
        </div>
      </div>
  );
};

export default ApplicationForm;
