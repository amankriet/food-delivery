import ErrorBoundary from "./ErrorBoundary.jsx"
import {imgBaseUrl} from "../utils/constants.js"

function RestaurantCard(props) {
    const {
        aggregatedDiscountInfoV3,
        name,
        area,
        cloudinaryImageId,
        cuisines,
        costForTwo,
        sla,
        promoted,
        avgRating
    } = props?.restaurant?.info
    let header = '', subHeader = ''
    if (aggregatedDiscountInfoV3) {
        header = aggregatedDiscountInfoV3.header
        subHeader = aggregatedDiscountInfoV3.subHeader
        // console.log('header:', header, 'subHeader:', subHeader, ' info:', aggregatedDiscountInfoV3)
    }

    return (
        <div className="card">
            <ErrorBoundary fallback={<h2>Error while loading restaurant image</h2>}>
                <div className="restaurant-img">
                    <img src={imgBaseUrl + cloudinaryImageId} alt={name}/>
                    <h2 className='discount-header'>{`${header} ${subHeader}`}</h2>
                </div>
            </ErrorBoundary>
            <div className="restaurant-data">
                <div className="main-text">
                    <p className={'restaurant-name'}>{name}</p>
                    <p className="meta">
                        <span className="star">Rating</span> <span
                        className="meta-text">{avgRating} &middot; {sla?.slaString}</span>
                    </p>
                </div>
                <div className="sub-text">
                    <p className={'cuisines'}>{cuisines.join(", ")}</p>
                    <p className="restaurant-area">{area}</p>
                </div>
            </div>
        </div>
    )
}

export default RestaurantCard