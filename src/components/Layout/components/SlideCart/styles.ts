import styled from '@emotion/styled'
import { motion } from 'framer-motion'

export const Container = styled.div`
  display: flex;
  align-content: center;

  justify-content: center;
  flex-direction: column;
  align-items: center;

  &::before,
  &::after {
    content: '';
    display: block;
    position: absolute;
    bottom: 100%;
    width: 0;
    height: 0;
  }

  &::before {
    left: 10px;
    border: 11px solid transparent;
    border-bottom-color: #ddd;
  }

  &::after {
    left: 12px;
    border: 10px solid transparent;
    border-bottom-color: #fff;
  }
`

export const Title = styled(motion.text)`
  font-size: 2rem;
  font-weight: 400;
  color: #757f9a;
`
export const IconsHeader = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 411px) {
    display: none;
  }
`
