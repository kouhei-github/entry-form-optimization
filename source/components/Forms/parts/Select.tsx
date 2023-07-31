import {useContext, useState} from 'react';
import {FormTypes, myFormContext} from '@/utils/formContext'

export default function Select(props: Pick<FormTypes, "array" | "inputstyle" | "property">){

  // FormContextを受け取る
  const forms = useContext(myFormContext)
  const updateValue = (value: string) => {
    // プロパティを合わせるために動的にした =>  [props.key]: value
    forms.setIsForm( { ...forms.form, [props.property]: value })
  }

  const selectContents = props.array

  return (
      <>
        <select
            name=""
            id=""
            className={props.inputstyle}
            value={forms.form[props.property]} // プロパティを合わせるために動的にした
            onChange={(event) => updateValue(event.target.value)}
        >
          {selectContents.map((selectContent, index) => (
              <option
                  key={index}
                  value={selectContent}
              >
                {selectContent}
              </option>
          ))}
        </select>
      </>
  );
};
