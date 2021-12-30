import Link from 'next/link';
import React from 'react';
import { INews } from 'interfaces';
import styles from './LastNews.module.scss';
interface IProps {
	news: INews[];
}
const LastNews: React.FC<IProps> = ({ news }) => {
	return (
		<div className={styles.oneLineNewsWrapper}>
			<ul className="list-unstyled m-0">
				{news &&
					news.length > 0 &&
					news.map((newsItem: any) => (
						<li className="media p-3">
							<h3 className={`${styles.hasBullet}`}>
								<Link href="#">
									<a className={`${styles.titrAnchor}`}>{newsItem.titr}</a>
								</Link>
							</h3>
						</li>
					))}
			</ul>
		</div>
	);
};

export default LastNews;
