import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import { motion } from 'framer-motion'

export const Container = styled.div`
  display: flex;
  align-content: center;

  justify-content: center;
  align-items: center;

  margin-top: 150px;
  width: 100%;
`

const shine = keyframes`
  to {
    background-position: 200% center;
  }
`

export const Title = styled(motion.text)`
  background: linear-gradient(to left, #757f9a 20%, #d7dde8 40%, #d7dde8 60%, #757f9a 80%);
  background-size: 200% auto;

  font-size: 3rem;
  font-weight: 700;
  color: #000;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  animation: ${shine} 5s linear infinite;
`
export const IconsHeader = styled.div`
  display: flex;

  justify-content: space-between;

  @media (max-width: 411px) {
    display: none;
  }
`
export const IconModal = styled.div<{ setOpen }>`
  display: flex;
  flex-direction: column;
`
