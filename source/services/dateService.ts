/**
 * 誕生日のクラスを実装するためのインターフェース
 * getYear => 今年の年を表示する
 * createBirthOptions => 生年月日の<option></option>タグを生成する
 */
interface BirthdayInterface {
  getYear(): number;
  createBirthOptions(start: number, end: number, isReverse: boolean): Array<number>;
}


export class Birthday implements BirthdayInterface
{
  private date;
  public constructor() {
    this.date = new Date()
  }

  public getYear(): number
  {
    return this.date.getFullYear()
  }

  public createBirthOptions(start: number, end: number, isReverse:boolean): Array<number>
  {
    let result = []
    for(start; start <= end; start++) {
      result.push(start)
    }
    return isReverse ? result.reverse() : result
  }
}

