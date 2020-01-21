import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Items.css';

const Items = () => {
	useEffect(() => {
		fetchItems();
	}, []);

	const [items, setItems] = useState([]);

	const fetchItems = async () => {
		const data = await fetch('http://134.209.138.34/items');
		const items = await data.json();
		console.log(items);
		setItems(items);
	};

	return (
		<>
			<h1>Items</h1>
			<div className="container">
				{items.map(item => (
					<div className="item">
						<h2 key={item.id} style={{ padding: '0 5px' }}>
							<Link to={`/item/${item.id}`} target="_blank">
								{item.title}
							</Link>
						</h2>
						<p style={{ padding: '0 5px' }}>{item.address}</p>
						<p>{item.price}</p>
						<img
							src={item.previewImage}
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
