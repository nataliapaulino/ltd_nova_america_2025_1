import { UserLayout } from "@/lib/components/user-layout";
import { PropsWithChildren } from "react";

export default function ProfessorLayout({ children }: PropsWithChildren) {
  return (
    <UserLayout type="professor">{children}</UserLayout>
  );
}
