import imagePlaceholder from '../assets/image-placeholder.svg'

function ShimmerRestaurants() {
	return (
		<div className="card shimmer-card">
			<div className="restaurant-img">
				<img src={imagePlaceholder} alt='image placeholder'/>
				<h2 className='discount-header'></h2>
			</div>
			<div className="restaurant-data shimmer-restaurant-data">
				<div className="main-text">
					<p className={'restaurant-name shimmer-restaurant-name'}></p>
					<p className="meta shimmer-meta">
						<span className="star"></span>
						<span className="meta-text"></span>
					</p>
				</div>
				<div className="sub-text">
					<p className={'cuisines shimmer-cuisines'}></p>
					<p className="restaurant-area shimmer-restaurant-area"></p>
				</div>
			</div>
		</div>
	)
}

export default ShimmerRestaurants