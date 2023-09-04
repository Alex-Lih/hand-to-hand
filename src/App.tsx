import './App.css'

function Header() {
    return (
    <header className='header'>
        <div className='header__all'>
            <img src='../src/images/logo.svg'></img>
            <div className='header-center'>
                <button className='button__header button_blue'>
                    <img src='../src/images/menu.svg'></img>
                    <p>Categories</p>
                </button>
                <div className='input__block'>
                    <input placeholder='Search'></input>
                    <button>
                        <img src='../src/images/search.svg'></img>
                    </button>
                </div>
                <button className='button__header button_orange'>
                    <img src='../src/images/placeAnAd.svg'></img>
                    <p>Place an ad</p>
                </button>
            </div>
            <div className='header__sign-in'>
                <img src='../src/images/signin.svg'></img>
                <p>Sign in</p>
            </div>
        </div>
    </header>
    )
}

function App() {
  return (
    <div className='wrapper'>
        <Header />
        <div className="main">
            <div className="Cart">
                <img src='../src/images/cart.png'></img>
                <div className='cart__bottom'>
                    <h3>Dragon Ball Androids-ECO Triple Pencil Case, Black, Pink, One Size, ECO Triple Pencil Case Androids</h3>
                    <div className="cart__country">
                        <p>Nigeria, Abuja</p>
                        <p>Today, 22:12</p>
                    </div>
                    <p className='cart__price'>1 325 $</p>
                </div>
            </div>
        </div>
        <footer className='footer'>123</footer>
    </div>
  )
}

export default App
