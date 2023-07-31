import { NextPage } from 'next';

type Props = { word: string, src?: string, background?: string, bgClassName?: string}
const Conversion :NextPage<Props> = (props: Props): JSX.Element => {
    const content = props.word
    const Img = props.src
    const bgImg = props.background
    const defaultClassName = "bg-cover lg:h-80 h-56";
    const customClassName = props.bgClassName || "";

    const replaceWithBr = (text:string) => {
        return text.replace(/\n/g, "<br />")
    }

    return (
        <div className={`${defaultClassName} ${customClassName}`} style={{ backgroundImage: `url(${bgImg})` }}>
            <div
                className='text-[#f08232] text-center font-bold lg:text-[1.6rem] sm:text-[20px] text-[16px] md:tracking-[2px] lg:pt-20 pt-12 lg:px-24 md:px-16 sm:px-10 px-4 md:pb-8 pb-4'
                dangerouslySetInnerHTML={{__html: replaceWithBr(content)}}
            >
            </div>
            <a href='#scroll_oubo_area'>
                <img src={Img} className='mx-auto xl:w-[25%] md:w-[35%] sm:w-[55%] w-[70%] hover:opacity-80' />
            </a>
        </div>
    );
};

export default Conversion