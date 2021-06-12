import styled from '@emotion/styled'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: center;

  width: 100%;
  height: 100%;
`

export const Card = styled.div`
  background: #fafafa;
  display: flex;

  flex-direction: column;

  align-items: center;
  justify-content: flex-start;
  width: 100%px;
  height: 600px;
  padding: 50px;
  border-radius: 8px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  > h1 {
    color: #161616;
    font-size: 1.5rem;
  }

  h3 {
    color: #231e23;
    font-size: 1rem;
  }
`
export const ButtonsContainer = styled.div`
  display: flex;

  width: 200px;
  height: 45px;

  margin-top: 50px;

  padding: 0px 20px 0px 20px;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;

  border-radius: 8px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  span {
    cursor: pointer;
    width: 30px;
    height: 30px;

    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      font-size: 2rem;
      color: #757f9a;
    }
  }
`
