import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import { useHistory, useParams } from 'react-router'
function PostList(props) {
  const { id } = useParams()
  const history = useHistory()
  const posts = useSelector(state => state.post.posts)
  const [posts1, setPosts1] = useState([])
  const [users, setUsers] = useState([])
  useEffect(() => {
    console.log(id);
    const getUser = () => {
      axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
        setUsers(res.data)
      }).catch(function (error) {
        console.log(error);
      });
    }
    const getPosts = (id) => {
      axios.get('https://jsonplaceholder.typicode.com/posts?userId=' + id).then(res => {
        setPosts1(res.data)
      }).catch(function (error) {
        console.log(error);
      });
    }
    id ? getPosts(id) : getUser()
  }, [id])
  return (
    <div>
      {id ? posts1.map((post) =>
        <div key={post.id} >
          <h4>{post.title}</h4>
          <h4>{post.body}</h4>
        </div>
      ) : users.map((user) =>
        <div key={user.id} onClick={()=> history.push(`/${user.id}`)}>
          <h4>{user.username} {user.name}</h4>
        </div>
      )}
    </div>
  )
}

// const mapStateToProps = state => {
//   return {
//       posts: state.posts
//   }
// }

// export default connect(mapStateToProps)(PostList)
export default PostList
