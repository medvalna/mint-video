import { usePathname } from 'next/navigation'
import { match } from 'path-to-regexp'

import type { ISidebarItem } from '../sidebar.types'

import { MenuItem } from './MenuItem'

interface Props {
	title?: string
	menu: ISidebarItem[]
}

export function SidebarMenu({ menu, title }: Props) {
	const pathName = usePathname()
	console.info(pathName)
	return (
		<nav>
			{title && <div className='opacity-45 uppercase text-xs mb-3 font-medium'>{title}</div>}
			<ul>
				{menu.map(menuItem => (
					<MenuItem
						key={menuItem.label}
						item={menuItem}
						isActive={!!match(menuItem.link)(pathName)}
					/>
				))}
			</ul>
		</nav>
	)
}
