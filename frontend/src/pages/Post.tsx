import PostCard from '../component/Post/PostCard'
import { useFetchPostOnHomeQuery } from '../services/create.api';
import type { postInterface } from '../types/Post.Interface';

const Post = () => {
    const {data,isLoading}= useFetchPostOnHomeQuery(undefined)

    if(isLoading){
      return <h1>Loding...</h1>
    }
  return (
    <div className='space-y-4'>
      {
        data?.map((post:postInterface)=>{
            return <PostCard key={post.post_id} postCardProp={post}/>
        })
      }
      
    </div>
  )
}

export default Post