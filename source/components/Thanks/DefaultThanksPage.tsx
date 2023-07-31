import * as React from "react";
import {NextPage} from 'next'

const DefaultThanksPage = () => {
  return (
      <>
        <div className=" font-bold text-3xl text-pink-500">
          <div className="text-center">
            <h3 className="text-3xl mb-4">ご応募ありがとうございます</h3>
            <p>採用担当者より３営業日以内にご連絡させて頂きます。</p>
            <p>今しばらくお待ちくださいませ。</p>
          </div>
        </div>
      </>
  );
};

export default DefaultThanksPage
