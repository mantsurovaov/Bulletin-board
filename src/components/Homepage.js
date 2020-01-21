import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => (
	<>
		<h1>Homepage</h1>
		<Link to={'/items'}>Show items</Link>
	</>
);

export default Homepage;
