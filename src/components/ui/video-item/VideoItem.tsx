import { BadgeCheck, type LucideIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { PAGE } from '@/config/public-page.config'

import { transformDate } from '@/utils/transformData'
import { transformViews } from '@/utils/transformViews'

import type { IVideo } from '@/types/video.type'

interface Props {
	video: IVideo
	Icon?: LucideIcon
}

export function VideoItem({ video, Icon }: Props) {
	return (
		<div>
			<div>
				<Link href={PAGE.VIDEO(video.slug)}>
					<Image
						src={video.thumbnailUrl}
						width={250}
						height={140}
						alt={video.title}
					/>
				</Link>
				<Link href={PAGE.CHANNEL(video.channel.slug)}>
					<Image
						src={video.channel.avatarUrl}
						width={30}
						height={30}
						alt={video.channel.name}
					/>
				</Link>
			</div>
			<div>
				<div>{Icon && <Icon />}</div>
				<span>{transformViews(video.viewsCount)}</span>
				<div>
					<span>{transformDate(video.createdAt)}</span>
				</div>
			</div>
			<div>{video.title}</div>
			<div>
				<span>{video.channel.name}</span>
				<span>
					<BadgeCheck className='text-green-500' />
				</span>
			</div>
		</div>
	)
}
