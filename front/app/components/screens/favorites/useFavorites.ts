import { useQuery } from 'react-query'

import { useAuth } from '@/hooks/useAuth'

import { UserService } from '@/services/user/user.service'

export const useFavorites = () => {
	const { user } = useAuth()
	const {
		isLoading,
		data: favoritesMovies,
		refetch,
	} = useQuery('Favorite movies', () => UserService.getFavorites(), {
		select: ({ data }) => data,
		enabled: !!user, // проверка регистрации, Два !! знака, что бы перевести к boolean
	})

	return { isLoading, favoritesMovies, refetch }
}
