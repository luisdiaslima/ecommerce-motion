import { Grow } from '@material-ui/core'

import Image from 'next/image'
import { motion } from 'framer-motion'

import { Container, Title, ProductCardToSlideCart } from './styles'
import Lottie from 'react-lottie'
import HighlightOffIcon from '@material-ui/icons/HighlightOff'
import CoallaCrying from '../../../../../public/coalla-crying.json'
import { useCallback, useEffect, useRef } from 'react'
import { useCart } from '../../../../hooks/cart'
import { toast } from 'react-toastify'

export default function SimpleGrow({ checked, setChecked, id }) {
  const ref = useRef()
  const { cart, removeFromCart } = useCart()

  useOnClick(ref, () => setChecked(false))
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: CoallaCrying,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  function useOnClick(ref, handler) {
    useEffect(() => {
      const listener = (event) => {
        const idExists = event?.path.find((item) => item.id === id)
        if (
          !ref.current ||
          ref.current.contains(event.target) ||
          event?.target?.id === id ||
          idExists
        ) {
          return
        }
        handler(event)
      }

      document.addEventListener('mousedown', listener)

      return () => {
        document.removeEventListener('mousedown', listener)
      }
    }, [id])
  }

  const handleRemoveCart = useCallback(
    (item) => {
      removeFromCart(item)
      toast.dark(`🐻‍❄ ${item.title} has been removed from your cart`)
    },
    [removeFromCart]
  )

  return (
    <Grow in={checked} ref={ref}>
      <Container
        style={{
          display: 'flex',
          width: 400,
          height: 500,
          borderRadius: 8,
          padding: 15,
          backgroundColor: '#fff',
          boxShadow:
            'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
          position: 'absolute',
          marginTop: 60,
        }}
      >
        {cart?.length ? (
          <div style={{ overflow: 'auto', width: '100%' }}>
            <Title>Your products:</Title>
            {cart.map((item) => (
              <ProductCardToSlideCart key={item.title}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'space-between',
                    justifyItems: 'space-between',
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                  }}
                >
                  <span>{item.title}</span>
                  <motion.span
                    style={{ cursor: 'pointer' }}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => handleRemoveCart(item)}
                  >
                    <HighlightOffIcon color="error" />
                  </motion.span>
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                    marginTop: -10,
                    flexDirection: 'column',
                  }}
                >
                  <text>{item.subtitle}</text>
                </div>
                <div
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}
                >
                  <Image alt={item.title} src={item.image} width={50} height={50} />
                </div>
              </ProductCardToSlideCart>
            ))}
          </div>
        ) : (
          <>
            <Title>Your cart is empty.</Title>
            <Lottie
              style={{ pointerEvents: 'none' }}
              options={defaultOptions}
              height={150}
              width={150}
            />
          </>
        )}
      </Container>
    </Grow>
  )
}
