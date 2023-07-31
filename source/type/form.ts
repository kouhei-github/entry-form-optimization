import {JobInformations} from '@/type/response'

export type FormType = Array<string | number> | string

export type InputFormType = {
  name: string
  type: string
  required: boolean
  values: FormType
  birthDay?: Array<Array<number>>
  emptyValue?: string
  multiSelect?: boolean
  selected?: string
  dynamoDB: string
  template?: (props: TemplateInputFormType) => JSX.Element
  validate?: any
}

export type ApplyForm = {
  form: Array<InputFormType>
  isFormImage?: boolean,
  formImageUrl: string,
  response?: JobInformations
  color?: {hover:string, bgColor:string, textColor:string},
  width?: string,
  headerImg?:string,
  btnImg?:string,
  isBtnImg?:boolean,
  prevBtnImg?:string,
  state?:string,
  company?: string
}

// formImageUrl／
export type ApplyForm2 = {
  form: Array<InputFormType>
  isFormImage?: boolean,
  response?: JobInformations
  color?: {hover:string, bgColor:string, textColor:string},
  width?: string,
  headerImg?:string,
  btnImg?:string,
  isBtnImg?:boolean,
  prevBtnImg?:string,
  state?:string,
  company?: string
}

export type TemplateInputFormType = {
  color?:string, bgColor?:string,
  formValues?: {[keys: string]: any}
  changeHandler?: (value: {[keys: string]: any}) => void,
}
