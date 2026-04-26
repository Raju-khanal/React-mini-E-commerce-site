import Header from "./components/Header"
import Card from "./components/Card"
import { useState } from "react"
function App() {
    const [cart, setCart] = useState([]);
    const [showCart, setShowCart] = useState(false);
    return (
        <>
            <div>
                <Header cart={cart} setShowCart={setShowCart} />
                <Card setCart={setCart} cart={cart} />
                {
                    showCart && <div>
                        <h2>Your selected cart.</h2>
                        {cart.length === 0 ? ("you cart is empty") : (
                            cart.map((item, index) => {
                                return (<div key={index}>
                                    <h2>{item.name}-rs{item.price}-{item.quantity}</h2>
                                </div>)
                            })
                        )}
                        <button onClick={() => setShowCart(false)}>Close cart menu</button>
                    </div>
                }
            </div>
        </>
    )
}
export default App;