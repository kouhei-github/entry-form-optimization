import {useContext, useState} from 'react';
import {FormTypes, myFormContext} from '@/utils/formContext'


export default function Textarea(props: Pick<FormTypes, "inputstyle" | "cols" | "rows" | "property" | "placeholder">){

  // FormContextを受け取る
  const forms = useContext(myFormContext)
  const updateValue = (value: string) => {
    // プロパティを合わせるために動的にした =>  [props.key]: value
    forms.setIsForm( { ...forms.form, [props.property]: value })
  }

  return (
      <>
          <textarea
              name=""
              id="" className={props.inputstyle}
              placeholder={props.placeholder}
              cols={props.cols}
              rows={props.rows}
              value={forms.form[props.property]} // プロパティを合わせるために動的にした
              onChange={(event) => updateValue(event.target.value)}
          />
      </>
  );
}

