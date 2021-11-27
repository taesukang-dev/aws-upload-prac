import styled from 'styled-components'

const Text = (props) => {
  const { size, bold, color, children } = props
  const styles = { size, bold, color }

  return (
    <>
      <InputBox {...styles}>{children}</InputBox>
    </>
  )
}

Text.defaultProps = {
  size: '16px',
  children: null,
  bold: false,
  color: '#000',
}

const InputBox = styled.p`
  font-size: ${(props) => props.size};
  font-weight: ${(props) => (props.bold ? '600' : '400')};
  color: ${(props) => props.color};
`

export default Text
