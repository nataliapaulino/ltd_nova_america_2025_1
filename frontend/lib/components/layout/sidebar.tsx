import { UserType } from "@/lib/schemas/user-type";
import { Divider } from "../divider";
import { SidebarTitle } from "./sidebar-title";

type SideBarLayoutProps = {
  type: UserType
};

// TODO: Colocar links corretos nas paginas e nos hrefs
export function SideBarLayout({ type }: SideBarLayoutProps) {
  return (
    <section id="sidebar" className="bg-gray-300 px-2 space-y-2 h-full py-2 text-lg">
      {(type === "admin" || type === "professor") && (
        <>
          <div id="user" className="space-y-1">
            <SidebarTitle href="#" title="Usuário" />
            <div className="pl-10 space-y-1">
              <h2>NÃO IMPLEMENTADO</h2>
            </div>
          </div>

          <Divider />

          <div id="class" className="space-y-1">
            <SidebarTitle href="#" title="Turma" />
            <div className="pl-10 space-y-1">
              <h2>NÃO IMPLEMENTADO</h2>
            </div>
          </div>

          <Divider />
        </>
      )}

      {type === "admin" && (
        <>
          <div id="unit" className="space-y-1">
            <SidebarTitle href="#" title="Unidade" />
            <div className="pl-10 space-y-1">
              <h2>NÃO IMPLEMENTADO</h2>
            </div>
          </div>

          <Divider />
        </>
      )}

      {(type === "professor" || type === "monitor") && (
        <>
          <SidebarTitle href="#" title="Realizar Presença" />
          <Divider />

          <SidebarTitle href="#" title="Visualizar Presença" />
          <Divider />
        </>
      )}
    </section>

  )
}
