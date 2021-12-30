import React from 'react';
import { ILink } from 'interfaces';
import styles from './Breadcrumb.module.scss';
import Link from 'next/link';
interface IProps {
	links: ILink[];
}

const Breadcrumb: React.FC<IProps> = ({ links }) => {
	return (
		<ul
			className={styles.breadcrumb}
			itemScope
			itemType="https://schema.org/BreadcrumbList"
		>
			<li
				className={styles.breadcrumbItem}
				itemProp="itemListElement"
				itemScope
				itemType="https://schema.org/ListItem"
			>
				<Link href="/">
					<a className={styles.breadcrumbLink} target="_blank" itemProp="item">
						<span itemProp="name">صفحه اصلی</span>
						<meta itemProp="position" content="1" />
					</a>
				</Link>
			</li>
			{links &&
				links.map((linkItem: ILink, index: number) => (
					<li
						className={styles.breadcrumbItem}
						key={index}
						itemProp="itemListElement"
						itemScope
						itemType="https://schema.org/ListItem"
					>
						<Link href={`#`}>
							<a
								className={styles.breadcrumbLink}
								target="_blank"
								itemProp="item"
							>
								<span itemProp="name">{linkItem.title}</span>
								<meta itemProp="position" content="2" />
							</a>
						</Link>
					</li>
				))}
			<li
				className={styles.breadcrumbItem}
				itemProp="itemListElement"
				itemScope
				itemType="https://schema.org/ListItem"
			>
				<Link href="#">
					<a className={styles.breadcrumbLink} target="_blank" itemProp="item">
						<span itemProp="name"> رازی پرس</span>
						<meta itemProp="position" content="3" />
					</a>
				</Link>
			</li>
		</ul>
	);
};

export default Breadcrumb;
