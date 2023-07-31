import axios, {AxiosResponse} from 'axios';

export type CityType = {
  id: number,
  prefecture_id: number,
  prefecture_name: string,
  name: string
}

export type CityResponseType = {
  status: 'success' | 'error'
  total: number
  data: CityType[]
}

/**
 * 都道府県に合わせて市区町村のプルダウンを作成
 * @param prefectureId
 */
export const getCityFromPrefecture = async (prefectureId: number):Promise<CityResponseType> => {
  let data = JSON.stringify({
    "pref_id": prefectureId
  });

  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://uz2y65obak.execute-api.ap-northeast-1.amazonaws.com/get_city_from_pref',
    headers: {
      'Content-Type': 'application/json'
    },
    data : data
  };

  let cityResponse:CityResponseType
  return await axios.request(config)
      .then((response: AxiosResponse) => {
        cityResponse = JSON.parse(JSON.stringify(response.data))
        return cityResponse
      })
}
