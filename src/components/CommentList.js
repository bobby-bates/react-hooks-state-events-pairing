import { useState } from 'react'
import Comment from './Comment'

const CommentList = ({ comments }) => {
  const [isHidden, setIsHidden] = useState(false)
  
  const handleCommentsButton = () => {
    // debugger
    const commentList = document.getElementById('commentList')
    // isHidden ? setIsHidden(false) : setIsHidden(true)
    if (isHidden) {
      setIsHidden(false)
      commentList.style = 'visibility: visible'
    } else {
      setIsHidden(true)
      commentList.style = 'visibility: collapse'
    }
  }
  const buildCommentList = comments.map(c => {
    return (
      <Comment key={c.id} user={c.user} comment={c.comment} />
      )
    }
  )

  return (
    <>
      <button onClick={handleCommentsButton}>
        {isHidden ? 'Show Comments' : 'Hide Comments'}
      </button>
      <hr />
      <div id='commentList'>
      <h2>{comments.length} Comments</h2>
        {buildCommentList}
      </div>
    </>
  )
}
export default CommentList