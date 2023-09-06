import { Info } from "../../data/data";

function Card(props:Info) {

    return (
        <div className="Cart">
            <div className='scale'>
                <img src='../src/images/cart.png'></img>
            </div>
            <div className='cart__bottom'>
                <h3>{props.title}</h3>
                <div className="cart__country">
                    <p>Nigeria, Abuja</p>
                    <p>Today, 22:12</p>
                </div>
                <p className='cart__price'>{props.price} $</p>
            </div>
        </div>
    )
}

export default Card;