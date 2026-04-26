import style from "./Header.module.css"
function Header({ cart, setShowCart }) {
    return (
        <div className={style.header}>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">product</a></li>
                <li><a href="#">About Us</a></li>
                <li>Total:{cart.length}</li>
                <li><button onClick={() => setShowCart(true)}>Check your Cart</button></li>
            </ul>
        </div>
    )
}
export default Header;