import { Menu, SquarePlay } from 'lucide-react'
import Link from 'next/link'

import { COLORS } from '@/constants/colors.constants'

import { PAGE } from '@/config/public-page.config'

export function SidebarHeader({ toggleSidebar }: { toggleSidebar: () => void }) {
	return (
		<div className='flex items-center gap-6 mb-12'>
			<button
				onClick={toggleSidebar}
				className='opacity-85 hover:opacity-100 transition-opacity'
			>
				<Menu />
			</button>
			<Link
				href={PAGE.HOME}
				className='flex items-center gap-2'
			>
				<SquarePlay
					color={COLORS.primary}
					size={28}
				/>
				<span className='font-medium text-xl'>Mint Video</span>
			</Link>
		</div>
	)
}
