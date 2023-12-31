import { FC } from 'react'

import SkeletonLoader from '@/components/ui/skeleton-loader/SkeletonLoader'

import MovieList from './MovieList'
import { usePopularMovie } from './usePopularMovie'

const PopularMovie: FC = () => {
	const { isLoading, popularMovies } = usePopularMovie()
	// const { isLoading, data: popularMovies } = useQuery(
	// 	'Popular movies in sidebar',
	// 	() => MovieService.getMostPopularMovies(),
	// 	{
	// 		select: (data) => data.slice(0, 3), // ограничили количество фильмов 11:30
	// 	}
	// )

	return isLoading ? (
		<div className="mt-11">
			<SkeletonLoader count={3} className="h-28 mb-4" />
		</div>
	) : (
		<MovieList
			link="/trending"
			movies={popularMovies || []}
			title="Popular Movies"
		/>
	)
}
export default PopularMovie
