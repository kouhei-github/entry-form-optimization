export default function Required(props: {require: string, labeling: string}){

    return (
        <div className={"flex items-center"}>
            <span className={"bg-[#f66] text-white text-[14px] font-[700] py-[1px] px-[10px] my-[4px] mx-1 rounded-md"}>{props.require}</span>
            <label className={"text-[14px] font-[700]"}>{props.labeling}</label>
        </div>
        );
    };
