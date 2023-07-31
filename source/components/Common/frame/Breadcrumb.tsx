/* Modal について
 *  max-width とページ左右の余白を設定した共通コンポーネント
 *  コンポーネントを作るときは基本的にこのコンポーネントで囲う
 *  Container の中で Container を使うと余白がずれるので気をつける
 */
interface BreadcrumbItem {
    link: string;
    title: string;
  }
  
  interface BreadcrumbProps {
    items: BreadcrumbItem[];
  }

  const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
    return (
      <div className="w-full bg-gray-200">
        <ul className="flex items-center w-full md:w-9/12 md:mx-auto">
          {items.map((item, index) => (
            <li key={index}>
              {index > 0 && <span className="mx-2 text-gray-300">/</span>}
              <a
                href={item.link}
                className="text-gray-500 text-xs hover:text-white transition-colors duration-300"
                >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  };

export default Breadcrumb;
