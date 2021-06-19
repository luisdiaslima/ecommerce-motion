import React, { createContext, useState, useContext, useCallback } from 'react'

interface CartState {
  title: string
  subtitle: string
  image: string
}

interface CartContextData {
  cart: CartState[]
  addToCart(product: CartState): void
  removeFromCart(product: CartState): void
}

const CartContext = createContext<CartContextData>({} as CartContextData)

export const CartProvider: React.FC = ({ children }) => {
  const [cart, setCart] = useState<CartState[]>([] as CartState[])

  const addToCart = useCallback((product: CartState) => {
    setCart((oldCart) => [...oldCart, product])
  }, [])

  const removeFromCart = useCallback(
    (product: CartState) => {
      const filterNewProducts = cart?.length
        ? cart.filter((item) => item.title !== product.title)
        : []
      setCart(filterNewProducts)
    },
    [cart]
  )

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart(): CartContextData {
  const context = useContext(CartContext)

  if (!context) throw new Error('useContext error')

  return context
}
