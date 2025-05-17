import { UserLayout } from "@/lib/components/user-layout";
import { PropsWithChildren } from "react";

export default function AdminLayout({ children }: PropsWithChildren) {
  return (
    <UserLayout type="admin">{children}</UserLayout>
  );
}
