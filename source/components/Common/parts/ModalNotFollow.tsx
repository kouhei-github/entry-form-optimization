/* Modal について
 *  max-width とページ左右の余白を設定した共通コンポーネント
 *  コンポーネントを作るときは基本的にこのコンポーネントで囲う
 *  Container の中で Container を使うと余白がずれるので気をつける
 */

import React, {Dispatch, SetStateAction, useState} from 'react'
import Image from 'next/image'

type Props = React.HTMLAttributes<HTMLDivElement> & {
  fullWidth?: boolean;
  children: React.ReactNode;
  modalState: boolean;
  setTarget: Dispatch<SetStateAction<boolean>>
};

const Container = (props: Props): JSX.Element => {
  const { fullWidth = false, children, modalState, setTarget } = props;
  const [popCard, setPopCard] = useState(modalState ? "inline-block" : "hidden left-[600px]");
  const [fade, setFade] = useState(modalState);

  const handleXClick = () => {
    setPopCard("hidden left-[600px]");
    setFade(false);
    setTarget(false)
  };

  const openModal = () => {
    setPopCard("inline-block");
    setFade(true);
  }

  return (
      <>
        <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
            {/* {modal start} */}
            <>
            <div className={popCard +"overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none transform translate-x-0 transition-all duration-150 delay-150 "+`${fade ? "opacity-100" : "opacity-0"}`}>
                <div className="modal-dialog absolute w-full min-h-screen opacity-50 bg-black"></div>

                <div className="modal-content absolute top-[5%] bg-white h-[90%] inset-x-4 md:inset-x-[35px]  md:top-2 lg:inset-x-[100px] lg:top-2 w-11/12 md:max-w-[800px]  mx-auto rounded shadow-lg z-50 overflow-hidden">
            {/* {close button} */}
                <div className="modal-close relative h-0 w-30 cursor-pointer flex flex-col items-center text-black text-sm z-50">
                  <Image width={50} height={50} className="absolute top-0 right-0 cursor-pointer" onClick={handleXClick} src={"/popup2.png"} alt=""/>
                </div>
                {/* {close button} */}

                <div className=" z-50 overflow-y-scroll h-[96%] absolute top-[5%] px-3">
                    {/* <!--Body--> */}

                    { children }

                    {/* <!--Body--> */}
                </div>
                </div>
            </div>
            </>
        {/* {modal end} */}
        </div>
    </>
  );
};

export default Container;
