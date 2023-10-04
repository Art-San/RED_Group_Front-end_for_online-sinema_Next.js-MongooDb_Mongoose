import { FC } from 'react'

import SkeletonLoader from '@/components/ui/skeleton-loader/SkeletonLoader'

import Menu from '../Menu'

import { usePopularGenres } from './usePopularGenres'

const GenreMenu: FC = () => {
	const { isLoading, data } = usePopularGenres()

	return isLoading ? (
		<div className="mx-11 mp-6">
			<SkeletonLoader count={4} className="h-7 mt-6" />
		</div>
	) : (
		<Menu menu={{ title: 'Popular genres', items: data || [] }} />
	)
}
export default GenreMenu
