
export default function PreviousSearches() {
	const searches = [
		"soup",
		"juice",
		"salad",
		"pizza",
		"burger",
		"lasagna",
		"biriyani",
		"ice cream",
		"pudding",
	];

	return (
		<div className="previous-searches section">
			
			<div className="previous-searches-container">
				{searches.map((search, index) => (
					<div
						key={index}
						style={{ animationDelay: index * 0.1 + "s" }}
						className="search-item"
					>
						{search}
					</div>
				))}
			</div>

		</div>
	);
}
