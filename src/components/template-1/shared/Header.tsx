import React from 'react';
import { HeaderBottomWrapper } from './HeaderBottomWrapper';
import { HeaderTopWrapper } from './HeaderTopWrapper';

const Header: React.FC = () => {
	return (
		<>
			<div className="container-fluid header-top-container">
				<div className="container">
					<HeaderTopWrapper />
				</div>
			</div>
			<div className="container-fluid header-bottom-container">
				<div className="container">
					<HeaderBottomWrapper />
				</div>
			</div>
		</>
	);
};

export default Header;
