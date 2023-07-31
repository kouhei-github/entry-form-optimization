import { NextPage } from 'next';

export type Card = {
  title: string
  date: string
  image: string
}
const Home= (props: Card) => {

  return (
    <div className={"relative w-[470px] h-[570px] my-14 flex items-center flex-col shadow-xl hover:opacity-70"}>
      <img className={"h-[440px] object-cover"} src={props.image} alt=""/>
      <div className={"absolute top-4 -left-6 bg-[rgb(255,103,82)] h-[37px] w-[170px] flex items-center justify-center font-bold text-white"}>就活note!</div>
      <div className={"bg-white h-[130px] flex flex-col justify-center px-5 "}>
        <p className={"text-sm"}>{props.title}</p>
        <p className={"mt-5 text-[rgb(150,150,150)] text-xs"}>{props.date}</p>
      </div>
    </div>
  );
};

export default Home;
