import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
	<nav>
		<Link to={'/'} style={{ color: 'white' }}>
			Home
		</Link>
		<Link to={'/items'} style={{ color: 'white' }}>
			Items
		</Link>
	</nav>
);

export default Navbar;
