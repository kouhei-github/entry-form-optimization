// テスト

interface EndpointInterface {
  jobList: string
  showJobList: string
  // dev_get_job_info_by_ref_number_from_dynamodb
  referenceNumber: string
  registerApplyer: string
}
const Endpoint: EndpointInterface = {
  // dev_get_ref_numbers_related_to_company_from_dynamodb
  jobList: typeof process.env.NEXT_PUBLIC_JOBLIST_ORIGIN === "undefined" ? "" : process.env.NEXT_PUBLIC_JOBLIST_ORIGIN,
  showJobList: typeof process.env.NEXT_PUBLIC_SHOW_JOBLIST_ORIGIN === "undefined" ? "" : process.env.NEXT_PUBLIC_SHOW_JOBLIST_ORIGIN,
  // dev_get_job_info_by_ref_number_from_dynamodb
  referenceNumber: typeof process.env.NEXT_PUBLIC_REFNO_ORIGIN === "undefined" ? "" : process.env.NEXT_PUBLIC_REFNO_ORIGIN,
  registerApplyer: typeof process.env.NEXT_PUBLIC_API_ORIGIN === "undefined" ? "" : process.env.NEXT_PUBLIC_API_ORIGIN
}
export default Endpoint
