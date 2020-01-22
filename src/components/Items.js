import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Items.css';

const BASE_PATH = 'http://134.209.138.34';
const SEARCH_PATH = '/items';

const Items = () => {
	useEffect(() => {
		fetchItems();
	}, []);

	const [items, setItems] = useState([]);

	const fetchItems = async () => {
		const data = await fetch(`${BASE_PATH}${SEARCH_PATH}`);
		const items = await data.json();
		setItems(items);
	};

	return (
		<>
			<h1>Items</h1>
			<div className="container">
				{items.map(({ id, title, address, price, previewImage }) => (
					<div className="item">
						<h2 key={id} style={{ padding: '0 5px' }}>
							<Link to={`/item/${id}`} target="_blank">
								{title}
							</Link>
						</h2>
						<p style={{ padding: '0 5px' }}>{address}</p>
						<p>{price}</p>
						<img
							src={previewImage}
							alt="previewImage"
							style={{ padding: '5px 0' }}
						/>
					</div>
				))}
			</div>
		</>
	);
};

export default Items;
