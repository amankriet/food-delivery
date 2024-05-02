import './App.css'

function App() {

  return (
    <>
        <div className="top-navbar">
            <div className="container">
                <ul className="list">
                    <li>
                        <a href="#">Become a Seller</a>
                    </li>
                    <li>
                        <a href="#">Login to Seller</a>
                    </li>
                    <li>
                        <a href="tel:+91 9999999999">Helpline +91 9999999999</a>
                    </li>
                </ul>
            </div>
        </div>
        <header>
            <img className="logo" src="/logo.png" alt="Food Delivery"/>
            <form id="search" onSubmit={e => e.preventDefault()}>
                <input type="text" className="text-search" placeholder="Search for restaurants and food" />
                <button className="btn-search">Search</button>
            </form>
            <div className="config">
                <button className={'btn-cart'}>Cart {0}</button>
                <ul className="list">
                    <li>
                        <a href="#">Login</a>
                    </li>
                    <li>
                        <a href="#">Register</a>
                    </li>
                </ul>
            </div>
        </header>
        <main>
            <h2 className={'data-missing'}>No restaurants available</h2>
        </main>
        <footer>
            <div className="copyright">
                <img className="logo" src="/logo.png" alt="Food Delivery"/>
                <h2>Food Delivery</h2>
                <p>&copy; 2024 Aman Kumar</p>
            </div>
            <div className="company">
                <h3>Company</h3>
                <ul>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Team</a></li>
                </ul>
            </div>
            <div className="contact">
                <h3>Contact us</h3>
                <ul>
                    <li><a href="#">Help & Support</a></li>
                    <li><a href="#">Partner with us</a></li>
                    <li><a href="#">Ride with us</a></li>
                </ul>
                <br/>
                <h3>Legal</h3>
                <ul>
                    <li><a href="#">Terms & Conditions</a></li>
                    <li><a href="#">Cookie Policy</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                </ul>
            </div>
            <div className="deliver-to">
                <h3>We deliver to:</h3>
                <ul>
                    <li><a href="#">Bangalore</a></li>
                    <li><a href="#">Delhi</a></li>
                    <li><a href="#">Gurgaon</a></li>
                    <li><a href="#">Noida</a></li>
                </ul>
            </div>
        </footer>
    </>
  )
}

export default App
