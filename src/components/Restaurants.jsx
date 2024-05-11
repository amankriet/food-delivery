import RestaurantCard from "./RestaurantCard.jsx"
import ErrorBoundary from "./ErrorBoundary.jsx";

function Restaurants({ restaurants }) {
    return (
        <main>
            <ErrorBoundary>
                {/*<h2 className={'data-missing'}>No restaurants available</h2>*/}
                <div className="grid-container">
                    {restaurants && restaurants.length > 0 && (
                        restaurants.map((restaurant, index) => (
                            <RestaurantCard key={index} restaurant={restaurant}/>))
                    )}
                </div>
            </ErrorBoundary>
        </main>
    )
}

export default Restaurants