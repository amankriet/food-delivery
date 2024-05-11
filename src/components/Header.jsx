import {useEffect, useRef, useState} from "react"
import {useDebounce} from "../utils/hooks.js"
import CartIcon from "../assets/cart.svg?react"
import UserIcon from "../assets/user.svg?react"

function Header(props) {
    const {restaurants, onSearch} = props;
    const [searchQuery, setSearchQuery] = useState("")
    const [queryResults, setQueryResults] = useState([])
    const [showQueryResults, setShowQueryResults] = useState(false)
    const [showUserActions, setShowUserActions] = useState(false)

    const searchInputRef = useRef(null)
    let debouncedSearch = useDebounce(searchQuery, 500)

    function handleClear() {
        setSearchQuery('')
        setQueryResults([])
    }

    function handleSearchQuery(query) {
        return restaurants.filter(restaurant => {
            console.log('query:', query, restaurant.data.name.toLowerCase().includes(query.toLowerCase()))
            if (restaurant.data.name.toLowerCase().includes(query.toLowerCase())) {
                return true
            } else {
                return restaurant.data.cuisines.find((cuisine) => cuisine.toLowerCase().includes(query.toLowerCase()))
            }
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        if (showQueryResults) {
            setShowQueryResults(false)
        }
        onSearch(queryResults)
    }

    useEffect(() => {
        onSearch(queryResults)
    }, [queryResults]);

    useEffect(() => {
        if (searchQuery.length === 0) {
            setQueryResults([])
        }
    }, [searchQuery]);

    useEffect(() => {
        const query = () => {
            console.log('ds:', debouncedSearch)
            const qs = handleSearchQuery(debouncedSearch)

            console.log('qs:', qs)
            setQueryResults(qs)
            if (!showQueryResults) {
                setShowQueryResults(true)
            }
        }

        if (searchQuery && searchQuery.length > 1) {
            query()
        }

    }, [debouncedSearch]);

    return (
        <header id={'header'}>
            <img className="logo" src="/logo.png" alt="Food Delivery"/>
            <div className="search-container">
                <form id="search" onSubmit={handleSubmit}>
                    {searchQuery && searchQuery.length > 0 && (
                        <button type={'submit'} className="btn-search" onClick={(e)=>
                            e.currentTarget.blur()}>Search</button>
                    )}
                    <input type="text" className="text-search"
                           onChange={(e) =>
                               setSearchQuery(() => e.target.value)
                           } value={searchQuery}
                           onBlur={() => setShowQueryResults(false)}
                           ref={searchInputRef}
                           placeholder="Restaurants and Food"/>
                    {searchQuery && searchQuery.length > 0 && (
                        <button type={'reset'} className="btn-clear" onClick={handleClear}>Clear</button>
                    )}
                </form>
                {queryResults && queryResults.length > 0 && showQueryResults &&
                    <div className="query-results">
                        {queryResults.map((item, i) => {
                            return <p key={i}>{item.data.name}</p>
                        })}
                    </div>}
            </div>
            <div className="config">
                <div className="btn-cart" title={'Cart'}>
                    <CartIcon className="cart-icon" />
                </div>
                <div className="btn-user" title={'User'}>
                    <UserIcon className="user-icon" onClick={() => setShowUserActions(!showUserActions)} />
                </div>
                {showUserActions && (
                    <div className="user-actions">
                        <ul className="list">
                            <li>
                                <a href="#">Login</a>
                            </li>
                            <li>
                                <a href="#">Register</a>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </header>
    )
}

export default Header