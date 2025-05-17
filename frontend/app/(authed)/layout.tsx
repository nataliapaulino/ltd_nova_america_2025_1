import { PropsWithChildren } from "react";

export default function AuthedLayout({ children }: PropsWithChildren) {
  return (
    <>
      <header className="flex flex-row py-3">
        HEADER
      </header>

      {children}
    </>
  )
}
