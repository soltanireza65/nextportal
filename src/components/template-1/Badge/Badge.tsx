import React from 'react';
import styles from './Badge.module.scss';

interface IProps {
  title: string;
}

const Badge: React.FC<IProps> = ({ title }) => {
  return <span className={`${styles.badge} px-2 py-1`}>{title}</span>;
};

export default Badge;
