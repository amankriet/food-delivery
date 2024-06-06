import './App.css'
import TopNavbar from "./components/TopNavbar.jsx";
import Header from "./components/Header.jsx";
import Restaurants from "./components/Restaurants.jsx";
import Footer from "./components/Footer.jsx";
import ErrorBoundary from "./components/ErrorBoundary.jsx";
import {useEffect, useState} from "react";
import {restaurantsMockList} from "./utils/mockData.js";
import {  } from 'react-router-dom'

function App() {
    const [restaurantsList, setRestaurantsList] = useState([])

    useEffect(() => {
        if (restaurantsList.length === 0) {
            const restaurantsData = fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.3699574&lng=83.0005493&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING\n')
            restaurantsData
                .then(resp => resp.json())
                .then(jResp => {
                    setRestaurantsList(jResp?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
                })
                .catch(err => {
                    console.log(err)
                    setRestaurantsList(restaurantsMockList)
                    console.log(restaurantsList)
                });
        }

        console.log('App.jsx')

    }, [restaurantsList]);

    return (
        <>
            <ErrorBoundary>
                <TopNavbar/>
                <Header restaurants={restaurantsMockList} onSearch={setRestaurantsList}/>
                <Restaurants restaurants={restaurantsList}/>
                <Footer/>
            </ErrorBoundary>
        </>
    )
}

export default App
