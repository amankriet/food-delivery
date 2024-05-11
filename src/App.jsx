import './App.css'
import TopNavbar from "./components/TopNavbar.jsx";
import Header from "./components/Header.jsx";
import Restaurants from "./components/Restaurants.jsx";
import Footer from "./components/Footer.jsx";
import ErrorBoundary from "./components/ErrorBoundary.jsx";
import {useEffect, useState} from "react";
import {restaurantsMockList} from "./utils/mockData.js";

function App() {
    const [restaurantsList, setRestaurantsList] = useState([])

    useEffect(() => {
        if (restaurantsList.length === 0) {
            setRestaurantsList(restaurantsMockList)
        }
    }, [restaurantsList]);

    return (
        <>
            <ErrorBoundary>
                <TopNavbar />
                <Header restaurants={restaurantsMockList} onSearch={setRestaurantsList} />
                <Restaurants restaurants={restaurantsList} />
                <Footer />
            </ErrorBoundary>
        </>
    )
}

export default App
