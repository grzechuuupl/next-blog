import CardList from '@/components/cardList/CardList'
import Menu from '@/components/Menu/Menu'
import CategoryList from '@/components/categoryList/CategoryList'
import Featured from '@/components/featured/Featured'
import Link from 'next/link'
import styles from './homepage.module.css'

export default function Home() {
	return (
		<div className={styles.container}>
			<Featured />
			<CategoryList />
			<div className={styles.content}>
				<CardList />
				<Menu />
			</div>
		</div>
	)
}
