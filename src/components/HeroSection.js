import React from "react";
import CustomImage from "./CustomImage";

export default function HeroSection() {
	const images = [
		"/img/gallery/img03.jpg",
		"/img/gallery/img05.jpg",
		"/img/gallery/img01.jpg",
		"/img/gallery/img04.jpg",
		"/img/gallery/img02.jpg",
		"/img/gallery/img06.jpg",
		"/img/gallery/img07.jpg",
		"/img/gallery/img08.jpg",
		"/img/gallery/img09.jpg",
	];
	return (
		<div className="section hero">
			<div className="col typography">
				<h1 className="title">What Are We About</h1>
				<p className="info">
					FoodiesExpress is a place where you can please your soul and tummy
					with delicious food recepies of all cuisine.And our service is
					absolutely free. So start exploring now.
				</p>
				<button className="btn">
					<a
						href="https://www.food.com/"
						target="_blank"
						rel="noopener noreferrer"
					>
						explore more
					</a>
				</button>
			</div>
			<div className="col gallery">
				{images.map((src, index) => (
					<CustomImage key={index} imgSrc={src} pt={"90%"} />
				))}
			</div>
		</div>
	);
}
