import RestaurantCard from "./RestaurantCard.jsx"
import ErrorBoundary from "./ErrorBoundary.jsx"
import ShimmerRestaurants from './ShimmerRestaurants.jsx'

function Restaurants({ restaurants }) {
    const restaurantsArray = []

    const getRestaurantCards = (count) => {
        for (var i = 0; i <= count; i++) {
            restaurantsArray.push(<ShimmerRestaurants key={i} />)
        }

        return restaurantsArray
    }

    return (
        <main>
            <ErrorBoundary>
                {/*<h2 className={'data-missing'}>No restaurants available</h2>*/}
                <div className="grid-container">
                    {
                        (restaurants && restaurants.length > 0) ? (
                            restaurants.map((restaurant, index) => (
                                <RestaurantCard key={index} restaurant={restaurant}/>))
                            ) 
                        : (getRestaurantCards(16)
                            )
                    }
                    </div>
                    </ErrorBoundary>
                    </main>
                    )
}

export default Restaurants