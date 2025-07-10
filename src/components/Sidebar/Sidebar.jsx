import { Sidebar, SidebarItem, SidebarItemGroup, SidebarItems } from "flowbite-react";
import { HomeIcon, PencilIcon } from "@heroicons/react/24/solid";
import { ROUTES } from "../../const";
import { useState } from "react";

export default function SidebarComponent() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* ハンバーガーボタン：モバイルのみ表示 */}
      <div className="md:hidden p-4 flex justify-end">
        <button onClick={() => setIsOpen(true)} aria-label="メニューを開く">
          <svg className="w-6 h-6 text-gray-700 z-50" fill="none" stroke="currentColor" strokeWidth="2"
            viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* モバイル用スライドサイドバー */}
      <div className={`fixed top-0 right-0 h-full w-64 bg-gray-100 border-l transform transition-transform duration-300 z-40
        ${isOpen ? "translate-x-0" : "translate-x-full"} md:hidden`}>

        {/* ×ボタン */}
        <div className="flex justify-end p-4 absolute right-0 top-0">
          <button onClick={() => setIsOpen(false)} aria-label="メニューを閉じる">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2"
              viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* サイドバー本体 */}
        <Sidebar aria-label="Mobile sidebar">
          <SidebarItems>
            <div className="flex items-center text-white font-bold px-2 pt-3">
              <div className="mr-3 w-12"><img src="/img/logo.svg" alt="Favorite Music App Logo" /></div>
              <h1 className="shrink-0">Favorite Music App</h1>
            </div>
            <SidebarItemGroup>
              <SidebarItem href={ROUTES.HOME} icon={HomeIcon} onClick={() => setIsOpen(false)}>ホーム</SidebarItem>
              <SidebarItem href={ROUTES.POSTREVIEW} icon={PencilIcon} onClick={() => setIsOpen(false)}>投稿</SidebarItem>
            </SidebarItemGroup>
          </SidebarItems>
        </Sidebar>
      </div>

      {/* PC用サイドバー（常時表示） */}
      <div className="hidden md:block w-64 border-l border-gray-200 bg-gray-50 fixed right-0 top-0 h-screen">
        <Sidebar aria-label="Desktop sidebar">
          <SidebarItems>
            <div className="flex items-center text-white font-bold px-2">
              <div className="mr-3 w-12"><img src="/img/logo.svg" alt="Favorite Music App Logo" /></div>
              <h1 className="shrink-0">Favorite Music App</h1>
            </div>
            <SidebarItemGroup>
              <SidebarItem href={ROUTES.HOME} icon={HomeIcon}>ホーム</SidebarItem>
              <SidebarItem href={ROUTES.POSTREVIEW} icon={PencilIcon}>投稿</SidebarItem>
            </SidebarItemGroup>
          </SidebarItems>
        </Sidebar>
      </div>
    </>
  );
}
