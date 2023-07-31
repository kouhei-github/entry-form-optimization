import {useContext} from "react";
import {FormTypes, myFormContext} from '@/utils/formContext'

type Checkbox = Pick<FormTypes, "label">

export default function CheckBox(props: Pick<FormTypes, "type" | "property" | "defaultCheck" | "inputstyle">){

  // FormContextを受け取る
  const forms = useContext(myFormContext)
  const updateValue = (value: boolean) => {
    const checked = value ? "true" : ""
    // プロパティを合わせるために動的にした =>  [props.key]: value
    forms.setIsForm( { ...forms.form, [props.property]: checked })
  }

  return (
      <input
          type={props.type}
          onChange={(event) => updateValue(event.target.checked)}
          defaultChecked={props.defaultCheck}
          className={props.inputstyle}
      />
  );
};
