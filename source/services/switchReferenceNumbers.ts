import {JobList, Jobs} from '@/type/response'

export const switchReferenceNumber = (queryParam: string | Array<string>|undefined, jobs: JobList): Jobs => {
  console.log(jobs)
  if(typeof queryParam === "undefined") return jobs.indeed
  switch (queryParam) {
    case "indeed":
      console.log(jobs.indeed)
      return jobs.indeed
    case "kbx":
      return jobs.kbx
    case "stanby":
      return jobs.stanby
    default:
      return jobs.indeed
  }
}
