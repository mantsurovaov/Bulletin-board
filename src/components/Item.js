import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import './Item.css';

const Item = ({ match }) => {
	useEffect(() => {
		fetchItem();
	}, []);

	const [item, setItem] = useState({
		images: [],
	});

	const fetchItem = async () => {
		const data = await fetch(`http://134.209.138.34/item/${match.params.id}`);
		const [item] = await data.json();
		console.log(item);
		setItem(item);
	};

	return (
		<div className="itemDetailed">
			<h1>{item.title}</h1>
			<Carousel>
				{item.images.map(image => (
					<Carousel.Item>
						<img
							className="d-block w-100 carousel-item-img"
							src={image}
							alt="slide"
						/>
					</Carousel.Item>
				))}
			</Carousel>
			<p>{item.address}</p>
			<p>
				<strong>{item.price}</strong>
			</p>
			<p style={{ margin: '0 20px' }}>{item.description}</p>
			<p>{item.sellerName}</p>
		</div>
	);
};

export default Item;
