import {useContext, useState} from 'react';
import {FormTypes, myFormContext} from '@/utils/formContext'

type Form = Pick<FormTypes, "placeholder" | "type" | "inputstyle" | "property">

const Text = (props: Form) => {

  // FormContextを受け取る
  const forms = useContext(myFormContext)
  const updateValue = (value: string) => {
    // プロパティを合わせるために動的にした =>  [props.key]: value
    forms.setIsForm( { ...forms.form, [props.property]: value })
  }

  return (
      <>
        <input
            type={props.type}
            placeholder={props.placeholder}
            className={props.inputstyle}
            value={forms.form[props.property]} // プロパティを合わせるために動的にした
            onChange={(event) => updateValue(event.target.value)}
        />
      </>
  );
};

export default Text;
