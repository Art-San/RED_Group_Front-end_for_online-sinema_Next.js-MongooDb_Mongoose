import { GetStaticProps, NextPage } from 'next'

import Collections from '@/screens/collections/Collections'

import { ICollection } from '@/components/screens/collections/collections.interface'

import { GenreService } from '@/services/genre/genre.service'

import Error404 from './404'

const GenresPage: NextPage<{ collections: ICollection[] }> = ({
	collections,
}) => {
	return collections ? (
		<Collections collections={collections || []} />
	) : (
		<Error404 />
	)
}

export const getStaticProps: GetStaticProps = async () => {
	try {
		const { data: collections } = await GenreService.getCollections()
		// console.log('collections из GenresPage', collections)

		return {
			props: { collections },
			revalidate: 60, // Пере сборка через 60 сек
		}
	} catch (e) {
		// console.log(errorCatch(e))

		return {
			props: {},
			// notFound: true,
		}
	}
}

export default GenresPage
