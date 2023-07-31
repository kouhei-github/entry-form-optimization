export type Jobs = {
  company_id: string,
  company_name: string,
  reference_numbers: string[],
  total_items:number,
  last_page:number,
}

export type JobList = {
  reference_numbers: Array<string>
  indeed: Jobs,
  stanby: Jobs,
  kbx: Jobs
}

export type JobInformations = {
  rawlocation: string
  hires: string
  ref_no: string
  utag: string
  template: string
  country: string
  state: string
  city: string
  date: string
  expirationdate: string
  company: string
  publisher: string
  keywords: string
  kvimg: string
  streetaddress: string
  subwayaccess: string
  logoimg: string
  station: string
  domain: string
  experience: string
  salary: string
  poststatus: string
  gtag: string
  postalcode: string
  apply_root: string
  applyurl: string
  jobtype: string
  jobType: string
  rawsalary: string
  education: string
  indeedtag: string
  category: string
  timeshift: string
  benefits: string
  description: string
  title: string
  expdate: string
  company_id: string
  address: string
  workingHours: string
  holiday: string
  feature: string
  businessContents: string
  jobInformation: string
  joburl?: string
  background: string
}

export type PropsJobInformations = {
  data: JobInformations
}

export type Media = {
  media: string | string[] | undefined
}

type ref = {
  ref_no: string
}

export type Props = {
  next_page_token: string,
  reference_numbers: ref[]
}
