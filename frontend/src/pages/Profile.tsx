import ProfileHeader from "../component/Profile/ProfileHeader"
import { useGetPostOfUserQuery } from "../services/user.api"

const Profile = () => {
  const {data:getAllPostData,isLoading}  = useGetPostOfUserQuery(undefined)
 
  console.log(getAllPostData)

  if(isLoading){
    return <h1>loading ...</h1>
  }
    return (
    <div className="mx-auto w-full max-w-5xl px-6">
      <ProfileHeader />

      <div className="mt-12">
    
      </div>
    </div>
  )
}

export default Profile