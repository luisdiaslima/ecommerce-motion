import { Zoom } from '@material-ui/core'
import { useRef, useEffect } from 'react'

import { Container } from './styles'

export default function SimpleGrow({ checked, setChecked, id }) {
  const ref = useRef()

  useOnClick(ref, () => setChecked(false))

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

  return (
    <div ref={ref}>
      <Zoom in={checked}>
        <Container
          style={{
            display: 'flex',
            width: 50,
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
            // borderRadius: '100%',
            padding: 15,
            // backgroundColor: '#fff',
            // boxShadow:
            //   'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
            position: 'absolute',
            marginTop: 60,
          }}
        >
          <span style={{ fontSize: 30 }}>🇧🇷</span>
        </Container>
      </Zoom>
      <Zoom in={checked} style={{ transitionDelay: checked ? '150ms' : '0ms' }}>
        <Container
          style={{
            display: 'flex',
            width: 50,
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
            // borderRadius: '100%',
            padding: 15,
            // backgroundColor: '#fff',
            // boxShadow:
            //   'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
            position: 'absolute',
            marginTop: 120,
          }}
        >
          <span style={{ fontSize: 30 }}>🇺🇲</span>
        </Container>
      </Zoom>

      <Zoom in={checked} style={{ transitionDelay: checked ? '300ms' : '0ms' }}>
        <Container
          style={{
            display: 'flex',
            width: 50,
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
            // borderRadius: '100%',
            padding: 15,
            // backgroundColor: '#fff',
            // boxShadow:
            //   'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
            position: 'absolute',
            marginTop: 190,
          }}
        >
          <span style={{ fontSize: 30 }}>🇪🇸</span>
        </Container>
      </Zoom>
    </div>
  )
}
