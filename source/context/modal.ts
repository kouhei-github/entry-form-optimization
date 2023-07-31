// 1. コンテキストの使い方
// 永松光平の作成したリポジトリを参照
// https://github.com/kouhei-github/nextjs-form-context-sample

import {createContext, useCallback, useState} from 'react'


type ModalContext = {
    isOpen: boolean
    setIsOpen: (isOpen: boolean) => void;
};

const defaultValue: ModalContext = {
    isOpen: true,
    // 初期値を作成するが、eslintに引っかかる
    setIsOpen: () => {},
};

// context object
export const modalContext = createContext<ModalContext>(defaultValue);

// custom Hook
export const useModalContext = (): ModalContext => {
    // state名はThemeContext typeのプロパティに合わせる。
    const [isOpen, setOpen] = useState<boolean>(defaultValue.isOpen);
    // 関数名はThemeContext typeのプロパティに合わせる。
    const setIsOpen = useCallback((current: boolean): void => {
        setOpen(current);
    }, []);
    return {
        isOpen,
        setIsOpen,
    };
};
