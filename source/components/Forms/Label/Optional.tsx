export default function Optional(props: {require: string, labeling: string}){

  return (
      <div className={"flex items-center"}>
        <span className={"bg-gray-600 text-white text-[14px] font-[700] py-[1px] px-[10px] my-2 mx-1 rounded-md"}>{props.require}</span>
        <label className={"text-[14px] font-[700]"}>{props.labeling}</label>
      </div>
  );
};
