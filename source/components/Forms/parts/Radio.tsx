import {useContext, useState} from 'react';
import {FormTypes, myFormContext} from '@/utils/formContext'


export default function Radio(props: Pick<FormTypes, "array" | "gridstyle" | "btnstyle" | "changebtnstyle" | "property" | "isMultiple">){

  // FormContextを受け取る
  const forms = useContext(myFormContext)
  let [userSelected, setUserSelected] = useState<string[]>([])

  const upsert = (value: string) => {
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


  const selectContents = props.array

  return (
      <>
        <div className={props.gridstyle}>
          {selectContents.map((selectContent, index) => (
              <div
                  className={userSelected.includes(selectContent) ? props.changebtnstyle : props.btnstyle}
                  onClick={() => upsert(selectContent)}
                  key={index}
              >
                {selectContent}
              </div>
          ))}
        </div>
      </>
  );
}
