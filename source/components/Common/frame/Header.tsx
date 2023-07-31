/* Modal について
 *  max-width とページ左右の余白を設定した共通コンポーネント
 *  コンポーネントを作るときは基本的にこのコンポーネントで囲う
 *  Container の中で Container を使うと余白がずれるので気をつける
 */
import Link from "next/link";

type Props = {
    readonly logo: string;
};

interface Menu {
    link: string;
    name: string;
}

const Header = (props: Props): JSX.Element => {
    const MenuListItem: Menu[] = [
        { link: "/", name: "求人を探す" },
        { link: "/kyujin", name: "求人一覧" },
        { link: "#", name: "よくあるご質問" },
        { link: "#", name: "ふれツリ求人なびについて" },
        { link: "#", name: "運営会社情報" },
        { link: "#", name: "検索履歴" }
    ]


    return (
        <>
            <div className="container bg-white w-full">
                <div className={"flex items-center justify-between h-[92px] w-full"}>
                    <div className={"flex items-center justify-center"}>
                        <img className={"w-[181px] mx-5"} src={props.logo} />
                        <p className={"tracking-wide"}>RECRUITMENT</p>
                    </div>
                    <Link href={"/entry"} className={"cursor-pointer bg-[rgb(255,119,30)] hover:opacity-60 ml-3 text-white w-14 h-8 md:w-[181px] md:h-full flex items-center justify-center "}>
                        <div className={"font-bold text-xs md:text-2xl"}>ENTRY</div>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Header;
