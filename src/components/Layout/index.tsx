import { Header } from './components/Header'

import { Container } from './styles'
import Lottie from 'react-lottie'
import ArrowsDown from '../../../public/arrows-down.json'
import { useCallback, useEffect, useState } from 'react'

interface LayoutProps {
  children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  const [scroll, setScroll] = useState(false)
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: ArrowsDown,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY
    if (currentScrollY >= 600) {
      setScroll(true)
    }
  }, [])

  useEffect(() => {
    if (typeof window !== undefined) {
      window.addEventListener('scroll', handleScroll, { passive: true })
    }
  }, [handleScroll])

  return (
    <>
      <Header />
      <Container>
        {children}

        {!scroll && (
          <Lottie
            style={{
              pointerEvents: 'none',
              position: 'fixed',
              display: 'flex',
              alignSelf: 'center',
              bottom: 50,
              width: '50px',
              background: '#757f9aa4',
              borderRadius: '50px',
              boxShadow:
                'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
            }}
            options={defaultOptions}
            height={50}
            width={50}
          />
        )}
      </Container>
    </>
  )
}
