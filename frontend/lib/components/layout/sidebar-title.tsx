type SidebarTitleProps = {
  href: string,
  title: string,
}

export function SidebarTitle({ href, title }: SidebarTitleProps) {
  return (
    <a href={href} className="flex flex-row items-center gap-x-3">
      <div className="w-6 h-2 bg-black"></div>
      {title}
    </a>

  )
}
