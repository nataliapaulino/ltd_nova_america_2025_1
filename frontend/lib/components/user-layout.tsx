import { UserType } from "@/lib/schemas/user-type";
import { PropsWithChildren } from "react";

type UserLayoutProps = {
  type: UserType
};

export function UserLayout({ type, children }: PropsWithChildren<UserLayoutProps>) {
  return (
    <div className="flex flex-row">
      <section id="left-sidebar">
        {(type === "admin" || type === "professor") && (
          <>
            <div id="user">
              <h1>Usuário</h1>
              <h2>NÃO IMPLEMENTADO</h2>
            </div>
            <div id="class">
              <h1>Turma</h1>
              <h2>NÃO IMPLEMENTADO</h2>
            </div>
          </>
        )}

        {type === "admin" && (
          <div id="unit">
            <h1>Unidade</h1>
            <h2>NÃO IMPLEMENTADO</h2>
          </div>
        )}

        {(type === "professor" || type === "monitor") && (
          <>
            <a href="#">Realizar Presença</a>
            <a href="#">Visualizar Presença</a>
          </>
        )}
      </section>

      <main>
        {children}
      </main>
    </div>
  )
}
