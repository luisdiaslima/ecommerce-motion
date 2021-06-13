import { Grow } from '@material-ui/core'
import { Container, Title } from './styles'
import Lottie from 'react-lottie'
import CoallaCrying from '../../../../../public/coalla-crying.json'
import { useEffect, useRef } from 'react'

export default function SimpleGrow({ checked, setChecked }) {
  const ref = useRef()

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
        if (
          !ref.current ||
          ref.current.contains(event.target) ||
          event.target?.namespaceURI === 'http://www.w3.org/2000/svg'
        ) {
          return
        }
        handler(event)
      }

      document.addEventListener('mousedown', listener)

      return () => {
        document.removeEventListener('mousedown', listener)
      }
    }, [])
  }
  return (
    <Grow in={checked} ref={ref}>
      <Container
        style={{
          display: 'flex',
          width: 400,
          height: 500,
          borderRadius: 8,
          backgroundColor: '#fff',
          boxShadow:
            'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
          position: 'absolute',
          marginTop: 60,
        }}
      >
        <Title>Your cart is empty.</Title>

        <Lottie
          style={{ pointerEvents: 'none' }}
          options={defaultOptions}
          height={150}
          width={150}
        />
      </Container>
    </Grow>
  )
}
