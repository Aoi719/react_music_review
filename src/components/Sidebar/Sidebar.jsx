import { Sidebar, SidebarItem, SidebarItemGroup, SidebarItems } from "flowbite-react";
import { HomeIcon, PencilIcon, TagIcon, UserIcon } from "@heroicons/react/24/solid";
import { ROUTES } from "../../const";

export default function SidebarComponent() {
  return (
    <Sidebar aria-label="Default sidebar">
      <SidebarItems>
        <div className="flex items-center text-white font-bold px-2">
          <div className="mr-3 w-12"><img src="/img/logo.svg" alt="Favorite Music App Logo" /></div>
          <div className="shrink-0"><h1>Favorite Music App</h1></div>
        </div>
        <SidebarItemGroup>
          <SidebarItem href={ROUTES.HOME} icon={HomeIcon}>
            ホーム
          </SidebarItem>
          <SidebarItem href={ROUTES.POSTREVIEW} icon={PencilIcon}>
            投稿
          </SidebarItem>
          {/* <SidebarItem href={ROUTES.TAG} icon={TagIcon}>
            検索
          </SidebarItem> */}
          {/* <SidebarItem href={ROUTES.PROFILE} icon={UserIcon}>
            プロフィール
          </SidebarItem> */}
        </SidebarItemGroup>
      </SidebarItems>
    </Sidebar>
  );
}