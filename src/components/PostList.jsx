import { useSelector } from 'react-redux'
import { Grid, Image } from '../elements'

const PostList = (props) => {
  const post = useSelector((state) => state.post.list)
  console.log(post)
  return (
    <>
      <Grid>
        {post.map((el, i) => {
          return (
            <Image
              key={i}
              src={`https://imgtestbucket-sparta.s3.ap-northeast-2.amazonaws.com/image/${el.file_name}`}
            />
          )
        })}
      </Grid>
    </>
  )
}

export default PostList
