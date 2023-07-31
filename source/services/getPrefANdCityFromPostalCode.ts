import axios from 'axios'

/**
 * 入力された郵便番号を取得して、APIエンドポイントにリクエストを送信し、レスポンスを取得する
 * 郵便番号を入力したら下記が取れる
 * {
 *     "status": 200,
 *     "result": [
 *         13,
 *         "品川区",
 *         "大崎"
 *     ]
 * }
 */
const getPrefAndCityFromPostCode = async (postCode: string) => {
  let data = JSON.stringify({
    "postal_code": postCode
  });

  let config = {
    method: 'post',
    url: 'https://rplmxapkm9.execute-api.ap-northeast-1.amazonaws.com/dev/',
    headers: {
      'Content-Type': 'application/json'
    },
    data : data
  };

  return await axios.request(config)
      .then((response) => {
        return response.data
      })
      .catch((error) => {
        return "error"
      });
}

export default getPrefAndCityFromPostCode
