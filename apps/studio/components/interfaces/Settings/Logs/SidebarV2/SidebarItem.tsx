import { MoreHorizontal } from 'lucide-react'
import Link from 'next/link'
import { Button, cn, DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from 'ui'

type Props = {
  label: string
  icon: React.ReactNode
  dropdownItems?: React.ReactNode
  href: string
  isActive: boolean
  onClick?: (e: any) => void
}
export function LogsSidebarItem({ label, icon, dropdownItems, href, isActive, onClick }: Props) {
  return (
    <div
      className={cn(
        {
          'bg-foreground-lighter/10': isActive,
        },
        'relative flex [&:has([data-state=open])]:bg-foreground-lighter/10 [&:has([data-state=open])]:text-foreground hover:text-foreground hover:bg-foreground-lighter/10 transition-all text-foreground-light group'
      )}
    >
      <Link
        onClick={onClick}
        href={href}
        className={'flex-1 h-7 justify-between flex items-center text-sm px-4'}
      >
        <div className="flex items-center gap-2 justify-between w-full">
          <span className="flex items-center gap-2">
            {icon}
            {label}
          </span>
        </div>
      </Link>
      {dropdownItems && (
        <DropdownMenu>
          <DropdownMenuTrigger
            asChild
            onClick={(e) => {
              // Prevents clicking the dropdown from also clicking the parent link and navigating to it
              e.preventDefault()
            }}
          >
            <Button
              type="text"
              title="Actions"
              className="space-x-0 h-7 px-1.5 opacity-0 group-hover:opacity-100 !bg-transparent data-[state=open]:opacity-100"
              icon={<MoreHorizontal size={14} />}
            >
              <div className="sr-only">Actions</div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-48" align="start">
            {dropdownItems}
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </div>
  )
}
