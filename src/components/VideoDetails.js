const VideoDetails = ({ 
  title,
  views,
  createdAt,
  upvotes,
  setCurrUpvotes,
  downvotes,
  setCurrDownvotes
}) => {
  const handleUpvoteClick = (e) => setCurrUpvotes(upvotes+1)
  
  const handleDownvoteClick = (e) => setCurrDownvotes(downvotes-1)

  return (
    <>
      <h1>{title}</h1>
      <p>{views} views | Uploaded {createdAt}</p>
      <div id='voteButtons'>
        <button onClick={handleUpvoteClick}>{upvotes}<span>👍</span></button>
        <button onClick={handleDownvoteClick}>{downvotes}👎</button>
        <br /><br />
      </div>
    </>
  )
}
export default VideoDetails