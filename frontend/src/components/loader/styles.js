import styled from 'styled-components'

export const LoaderWrapper = styled.div`
  margin-top: 4px;
  svg {
    width: 40px;
    animation: spin 0.8s linear infinite;
  }
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
