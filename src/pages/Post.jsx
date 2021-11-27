import { Image, Text } from '../elements'
import Grid from '../elements/Grid'
import FileUpload from '../shared/FileUpload'

const Post = () => {
  return (
    <>
      <Grid>
        <Grid>
          <Image size="300" />
          <Text bold>hi!</Text>
        </Grid>
        <Grid>
          <FileUpload></FileUpload>
        </Grid>
      </Grid>
    </>
  )
}
export default Post
