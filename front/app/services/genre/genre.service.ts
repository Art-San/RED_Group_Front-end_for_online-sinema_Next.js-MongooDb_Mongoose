import { axiosClassic } from 'api/interceptors'
import axios from 'api/interceptors'

import { IGenre } from '@/shared/types/movie.types'

import { getGenresUrl } from '@/configs/api.config'

export const GenreService = {
	async getAll(searchTerm?: string) {
		return axiosClassic.get<IGenre[]>(getGenresUrl(``), {
			params: searchTerm
				? {
						searchTerm,
				  }
				: {},
		})
	},

	async deleteGenre(_id: string) {
		return axios.delete<string>(getGenresUrl(`/${_id}`))
	},

	// 2:39
}
// 19. Редактирование жанра
