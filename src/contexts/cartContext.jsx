import { createContext,useContext,useState} from "react";

const CartContext = createContext([])
export const useCartContext = () => useContext(CartContext) // esto ayuda a importa un contexto a los demas componente de manera rapida

export const CartContextProvider =({children})=>{
    // estados y funciones
    const [cart,setCart] = useState([]) //lista del carrito con un array vacio solo al inicio

    const isInCart = (item) =>{
        return cart.find(film => film.id === item.id)
    }
    //agregar un item
    const addToCart =(item) => {
        if(isInCart(item)){
            (cart.find(element => element.id ===item.id)).cantidades += item.cantidades
        }else{
        setCart([
            ...cart,
            item,
        ]) //se arma un nuevo array
        }
    }
    const vaciarCarrito = () => {setCart([])}
    //remover un item
    const removeItem = (id) => {
        const newCart = [...cart];
        let index = newCart.findIndex((el) => el.id === id);
        newCart.splice(index, 1);
        setCart([...newCart]);
    };
    //icono
    const valorCart = () => {
        return cart.reduce((acum, valor) => acum + valor.cantidades, 0)
    }
    //valor total
    const totalPrecio = () => {
        return cart.reduce((acum,product) => acum + product.cantidades*product.precio,0)
    }

    return(
        <CartContext.Provider
        value={{
            cart,
            setCart,
            addToCart,
            vaciarCarrito,
            removeItem,
            valorCart,
            totalPrecio,
        }}
        >
        {children}
        </CartContext.Provider>
    )
}