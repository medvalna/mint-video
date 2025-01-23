import type { IVideo } from './video.type'

export interface IChannel {
	id: string
	slug: string
	name: string
	description: string
	isVerified: boolean
	avatarUrl: string
	bannerUrl: string
	videos: IVideo[]
	subscribers: []
	createdAt: string
}
