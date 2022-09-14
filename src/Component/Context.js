import {useContext , useState} from "react"
import React from "react"

const Context = React.createContext()

  export const ContextProvider = ({children}) =>{
    const [total , setTotal] = useState(0)

    const TotalCartPrice = (carts) => {
        let totalPrice = 0;
       carts.map(cart => totalPrice  += cart.price * cart.quantity)
       setTotal(totalPrice.toFixed(2))
    }

    return (
        <Context.Provider
        value={{
            TotalCartPrice,
            total,
        }}
        >
            {children}
        </Context.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(Context)
}