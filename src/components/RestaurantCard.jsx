import ErrorBoundary from "./ErrorBoundary.jsx"
import {imgBaseUrl} from "../utils/constants.js"

function RestaurantCard(props) {
    const {
        name,
        area,
        cloudinaryImageId,
        cuisines,
        costForTwo,
        sla,
        slaString,
        promoted,
        avgRating
    } = props?.restaurant?.info || props.restaurant?.data
    
    let header = '', subHeader = ''
    if (props?.restaurant?.info?.aggregatedDiscountInfoV3) {
        header = aggregatedDiscountInfoV3.header
        subHeader = aggregatedDiscountInfoV3.subHeader
        // console.log('header:', header, 'subHeader:', subHeader, ' info:', aggregatedDiscountInfoV3)
    } else {
        let aggregatedDiscountInfo = props?.restaurant?.data?.aggregatedDiscountInfo
        header = aggregatedDiscountInfo.header
        subHeader = aggregatedDiscountInfo.subHeader
    }

    return (
        <div className="card card-scroll">
            <ErrorBoundary fallback={<h2>Error while loading restaurant image</h2>}>
                <div className="restaurant-img">
                    <img src={imgBaseUrl + cloudinaryImageId} alt={name}/>
                    {header  && (
                        <h2 className='discount-header'>{`${header} ${subHeader}`}</h2>
                    )}
                </div>
            </ErrorBoundary>
            <div className="restaurant-data">
                <div className="main-text">
                    <p className={'restaurant-name'}>{name}</p>
                    <p className="meta">
                        <span className="star">Rating</span> <span
                        className="meta-text">{avgRating} &middot; {sla?.slaString || slaString}</span>
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