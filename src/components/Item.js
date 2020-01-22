import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import './Item.css';

const BASE_PATH = 'http://134.209.138.34';
const SEARCH_PATH = '/item/';

const Item = ({ match }) => {
	useEffect(() => {
		fetchItem();
	}, []);

	const [item, setItem] = useState({
		images: [],
	});

	const fetchItem = async () => {
		const data = await fetch(`${BASE_PATH}${SEARCH_PATH}${match.params.id}`);
		const [item] = await data.json();
		setItem(item);
	};

	const { title, images, address, price, description, sellerName } = item;
	return (
		<div className="itemDetailed">
			<h1>{title}</h1>
			<Carousel>
				{images.map(image => (
					<Carousel.Item>
						<img
							className="d-block w-100 carousel-item-img"
							src={image}
							alt="slide"
						/>
					</Carousel.Item>
				))}
			</Carousel>
			<p>{address}</p>
			<p>
				<strong>{price}</strong>
			</p>
			<p style={{ margin: '0 20px' }}>{description}</p>
			<p>{sellerName}</p>
		</div>
	);
};

export default Item;
