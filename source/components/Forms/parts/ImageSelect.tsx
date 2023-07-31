import {useContext, useState} from 'react';
import {FormTypes, myFormContext} from '@/utils/formContext'
import Image from "next/image";
import {PickItUp} from "@/utils/customConvinienseType";
import {pageNationCtx} from '@/utils/pageNationContext'

//export default function ImageSelect(props: Pick<FormTypes, "array" | "inputstyle" | "property">){
export type ImageType = {
    file?: string
    altText: string
}
export default function ImageSelect(props: PickItUp<FormTypes, "property" | "isMultiple"> & {images: ImageType[]}){
    const pageCtx = useContext(pageNationCtx)
    // FormContextを受け取る
    const forms = useContext(myFormContext)
    let [userSelected, setUserSelected] = useState<string[]>(forms.form[props.property].split(","))
    const updateValue = (value: string) => {
        let result= [value]
        if (props.isMultiple){
            // 既に配列に含まれていたら取り除く
            if(userSelected.includes(value)){
                result = userSelected.filter((select: string) => select !== value)
                setUserSelected(result)
            } else {
                // 含まれていないなら追加
                result = [ ...userSelected, value ]
                setUserSelected(result)
            }
        } else {
            setUserSelected(result)
        }

        forms.setIsForm({ ...forms.form, [props.property]: result.join(',') })
    }

    return (
        <div className={"grid grid-cols-2 gap-[10px] text-center"}>
            {props.images.map((image, index) => (
                <div
                    key={index}
                    onClick={() => updateValue(image.altText)}
                >
                    {typeof image.file !== "undefined" ? (
                        <div
                            className={userSelected.includes(image.altText) ? "bg-[#fccd00] rounded-[8px] border-2 border-[#fccd00] flex flex-col items-center justify-center text-black" : "text-[rgb(61,61,61)] rounded-[8px] border-2 border-[rgb(211,211,211)] flex flex-col items-center justify-center"}>
                            <Image
                                src={image.file}
                                alt={image.altText}
                                width={85}
                                height={85}
                                className="object-contain"
                            />
                            <p className={userSelected.includes(image.altText) ? "font-[100] text-[15px] text-white" :"font-[100] text-[15px] text-[rgb(51,51,51)]"}>{image.altText}</p>
                        </div>
                    ) : (
                        <div key={index} className={userSelected.includes(image.altText) ? "bg-[#fccd00] text-black rounded-[8px] border-2 border-[#fccd00] h-[55px] flex flex-col items-center justify-center" : "rounded-[8px] border-2 border-[rgb(211,211,211)] text-[rgb(51,51,51)] h-[55px] flex flex-col items-center justify-center"}>
                            <p className={"font-[100] text-[15px]"}>{image.altText}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
        );
};
