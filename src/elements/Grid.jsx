import styled from 'styled-components'

const Grid = (props) => {
  const { children, bg, margin, padding, width } = props
  const styles = {
    bg,
    margin,
    padding,
    width,
  }
  return (
    <>
      <GridBox {...styles}>{children}</GridBox>
    </>
  )
}

Grid.defaultProps = {
  children: null,
  bg: false,
  margin: false,
  padding: false,
  width: '100%',
}

const GridBox = styled.div`
  width: ${(props) => props.width};
  height: 100%;
  box-sizing: border-box;
  ${(props) => (props.padding ? `padding: ${props.padding}` : '')}
  ${(props) => (props.margin ? `margin: ${props.margin}` : '')}
  ${(props) => (props.bg ? `background-color: ${props.bg}` : '')}
`

export default Grid
