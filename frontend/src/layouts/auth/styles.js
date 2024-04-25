import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  background-position: 100%;
  background-size: cover;
  background-repeat: repeat;
`

export const ImageContainer = styled.div`
  & img {
    width: 100%;
    object-fit: fill;
    margin: 0;
    height: 100vh;
  }
`

export const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  padding: 1.2rem 5rem 10px 5rem;
  overflow: auto;
`
export const LogoBox = styled.div`
 margin-top: 70px;
`
export const LoaderWrapper = styled.div`
  position: absolute;
  inset: 0px;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 499;
  > div {
    position: fixed;
    width: 120px;
    height: 120px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 500;
    svg {
      animation: rotationIcon 0.7s linear infinite;
    }
    @keyframes rotationIcon {
      0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
      }
      100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
      }
    }
  }
`
