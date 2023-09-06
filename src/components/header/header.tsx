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
        
        <div className='header-bootom'>
            <ul>
                <li>Property</li>
                <li>Auto and transport</li>
                <li>Repair and construction</li>
                <li>Hobbies, sports and tourism</li>
                <li>Everything for children and mothers</li>
                <li>Furniture</li>
                <li>Women’s fashion</li>
                <li>Animals</li>
                <li>See all</li>
            </ul>
        </div>
    </header>
    )
}

export default Header;