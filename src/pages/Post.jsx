import { Image, Text } from '../elements'
import Grid from '../elements/Grid'
import FileUpload from '../shared/FileUpload'
import dotenv from 'dotenv'
import { useSelector } from 'react-redux'
import PostList from '../components/PostList'

const Post = () => {
  dotenv.config()
  const post = useSelector((state) => state.post.list)
  console.log(post)

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
        <PostList />
      </Grid>
    </>
  )
}
export default Post
