import { Sidebar, SidebarItem, SidebarItemGroup, SidebarItems } from "flowbite-react";
import { HomeIcon, PencilIcon, TagIcon, UserIcon } from "@heroicons/react/24/solid";
import { ROUTES } from "../../const";

export default function SidebarComponent() {
  return (
    <Sidebar aria-label="Default sidebar">
      <SidebarItems>
        <div className="text-white font-bold px-2">音楽アプリ</div>
        <SidebarItemGroup>
          <SidebarItem href={ROUTES.HOME} icon={HomeIcon}>
            ホーム
          </SidebarItem>
          <SidebarItem href={ROUTES.POSTREVIEW} icon={PencilIcon}>
            投稿
          </SidebarItem>
          <SidebarItem href={ROUTES.TAG} icon={TagIcon}>
            検索
          </SidebarItem>
          <SidebarItem href={ROUTES.PROFILE} icon={UserIcon}>
            プロフィール
          </SidebarItem>
        </SidebarItemGroup>
      </SidebarItems>
    </Sidebar>
  );
}