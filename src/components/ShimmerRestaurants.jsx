import imagePlaceholder from '../assets/image-placeholder.svg'

function ShimmerRestaurants() {
	return (
		<div className="card" style={{display: 'flex',flexDirection:'column',animation:'pulse 2s infinite'}}>
			<div className="restaurant-img">
				<img src={imagePlaceholder} alt='image placeholder'/>
				<h2 className='discount-header'>               </h2>
			</div>
			<div className="restaurant-data" style={{marginRight:'12px',marginTop:'8px'}}>
				<div className="main-text">
					<p className={'restaurant-name'} style={{height:'24px',borderRadius:'4px',backgroundColor:'#eee'}}></p>
					<p className="meta" style={{height:'24px',width:'70%',borderRadius:'4px',backgroundColor:'#eee'}}>
						<span className="star"></span>
						<span className="meta-text"></span>
					</p>
				</div>
				<div className="sub-text">
					<p className={'cuisines'} style={{height:'20px',borderRadius:'4px',backgroundColor:'#eee'}}></p>
					<p className="restaurant-area" style={{height:'20px',width:'40%',borderRadius:'4px',backgroundColor:'#eee'}}></p>
				</div>
			</div>
		</div>
	)
}

export default ShimmerRestaurants