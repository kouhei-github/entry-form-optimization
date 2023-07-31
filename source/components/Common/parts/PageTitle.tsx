import React, {useState} from "react";
type Props = React.HTMLAttributes<HTMLDivElement> & {
    link:string;
    paragraph: Array<string>;
    title:string;
    color: string;
};

const PageTitle = (props: Props): JSX.Element => {
    const { title, link, paragraph, className = '',color, ...divHTMLAttributes } = props;
    return (
        <>
            <div className={"relative min-w-[1100px] border-b-2 border-b-gray-300"}>
            <div className={"bg-white w-full  m-auto items-center justify-center"}>
            <div className="pt-[1.72vw] w-[72vw] min-w-[1100px] max-w-[1683px] m-auto">
                    <div >
                        <h2 className={`font-bold text-[3.39vw] text-` + color}><a href={link} >{title}</a></h2>
                        <span className={"font-bold text-[1.15vw] tracking-wider"}>
                          {paragraph.map((text, index) => (
                              <span key={index}>
                              {text}
                              {index !== paragraph.length - 1 && <br />}
                            </span>
                          ))}
                        </span>
                    </div>
            </div>
            </div>
            </div>
        </>
    );
};

export default PageTitle;