type SideBarActionProps = {
  of: string;
} & React.HTMLAttributes<HTMLAnchorElement>;

export function SideBarAction({ of, ...props }: SideBarActionProps) {
  return (
    <a {...props}>{of}</a>
  );
}

