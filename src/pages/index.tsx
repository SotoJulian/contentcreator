import Image from 'next/image';
import styles from '../app/page.module.css';
import ContentComponent from '../component/contentcomponent';

export default function Home() {
	return (
		<main>
			<div>
				<ContentComponent />
			</div>
		</main>
	);
}
