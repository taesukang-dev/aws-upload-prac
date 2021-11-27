import styled from 'styled-components'

const Image = (props) => {
  const { src, size } = props
  const styles = { src, size }

  return (
    <>
      <ImageBox {...styles}></ImageBox>
    </>
  )

  return (
    <>
      <AspectOutter>
        <AspectInner {...styles}></AspectInner>
      </AspectOutter>
    </>
  )
}

Image.defaultProps = {
  size: 36,
  src: 'https://occ-0-1723-1722.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABZRRcD3DZJRoCInHdncWg4qT_XAmnZl-nwjq464UFfIFMlqkvz0GWjywcGLE_DBXyCIaQbYO4BrVV-U-AcOpuwn9KUO3.jpg?r=e43',
}

const AspectOutter = styled.div`
  width: 100%;
  min-width: 250px;
`

const AspectInner = styled.div`
  position: relative;
  padding-top: 75%;
  overflow: hidden;
  background-image: url('${(props) => props.src}');
  background-size: cover;
`

const ImageBox = styled.div`
  --size: ${(props) => props.size}px;
  width: var(--size);
  height: var(--size);
  background-image: url('${(props) => props.src}');
  background-size: cover;
`

export default Image
