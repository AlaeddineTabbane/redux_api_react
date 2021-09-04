import React, { useState } from 'react'
import { connect } from 'react-redux'
// import { addPost } from '../redux/action/action'
import { addPost } from '../redux/slice/slice'
import { useSelector, useDispatch } from 'react-redux'

function CreatePost(props) {
  const dispatch = useDispatch()
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addPost({
      id: Date.now(),
      title,
      content
  }))
  //   props.addArticle({
  //     id: Date.now(),
  //     title,
  //     content
  // })
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="Title">Title</label>
        <input type="text" name="title" id="title" onChange={e => setTitle(e.target.value)} />
      </div>
      <div>
        <label htmlFor="Content">Content:</label>
        <textarea name="content" id="content" cols="30" rows="10" onChange={e => setContent(e.target.value)} />
      </div>
      <div>
        <input type="submit" value="Add" />
      </div>
    </form>
  )
}

// const mapDispatchToProps = dispatch => {
//   return {
//       addArticle: post => dispatch(addPost(post))
//   }
// }
export default CreatePost
// export default connect(null,mapDispatchToProps)(CreatePost)
