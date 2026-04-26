import style from "./Card.module.css"
function Card({ cart, setCart }) {
    const products = [
        {
            id: 1,
            img: "/0x0.webp",
            name: "Shoes",
            price: 2000,
            quantity: 1,
        },
        {
            id: 2,
            img: "/0x0.webp",
            name: "Watch",
            price: 40000,
            quantity: 1,
        },
        {
            id: 3,
            img: "/0x0.webp",
            name: "Hoodie",
            price: 5000,
            quantity: 1,
        },
    ];
    function HandleCard(product) {
        const existingItem = cart.find((item) => item.id === product.id); if (existingItem) { setCart(cart.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)); } else {
            setCart([...cart, { ...product, quantity: 1 }]);
        }
    }
    function removecart(product) {
        setCart(
            cart.map((item) =>
                item.id === product.id ?
                    { ...item, quantity: item.quantity - 1 }
                    : item
            ).filter((item) => (item.quantity > 0))
        )
    }

    return (
        <div className={style.product}>
            {products.map((item) => {
                return (
                    <div key={item.id} className={style.card}>
                        <img
                            src={item.img}
                            alt={item.name}
                            style={{
                                width: "150px",
                                height: "150px",
                                objectFit: "cover"
                            }}
                        />
                        <h2>{item.name}</h2>
                        <p>{item.price}</p>
                        <button onClick={() => removecart(item)}>
                            Remove
                        </button>
                        <button style={{ textAlign: "center", marginLeft: "20px" }} onClick={() => HandleCard(item)}>Add to card</button>
                    </div>
                );
            })}
        </div>
    );
}

export default Card;