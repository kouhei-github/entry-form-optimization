
// 1. コンテキストの使い方
// https://reffect.co.jp/react/react-usecontext-understanding

// 2. 【React + Typescript】useContext の値を子コンポーネントから更新
// https://qiita.com/ragnar1904/items/0a4338523863922952bb
// context default value

import {createContext, useCallback, useState} from 'react'
export type SendServerData = {
    name: string,
    kana: string,
    gender: string
    year: string
    month: string
    day: string
    tel: string
    mail: string
    address: string
    agree: boolean
}


type MyFormContext = {
    form: SendServerData;
    setIsForm: (isForm: SendServerData) => void;
};

const defaultValue: MyFormContext = {
    form: {
        name: "", kana: "", gender: "", year: "", month: "", day: "", tel: "", mail: "", address: "", agree: false
    },
    // 初期値を作成するが、eslintに引っかかる
    setIsForm: () => {},
};

// context object
export const myFormContext = createContext<MyFormContext>(defaultValue);

// custom Hook
export const useMyFormContext = (): MyFormContext => {
    // state名はThemeContext typeのプロパティに合わせる。
    const [form, setForm] = useState<SendServerData>(defaultValue.form);
    // 関数名はThemeContext typeのプロパティに合わせる。
    const setIsForm = useCallback((current: SendServerData): void => {
        setForm(current);
    }, []);
    return {
        form,
        setIsForm,
    };
};
