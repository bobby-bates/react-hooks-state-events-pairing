const VideoDetails = ({ title, views, createdAt, upvotes, downvotes }) => {

  return (
    <>
      <h1>{title}</h1>
      <p>{views} views | Uploaded {createdAt}</p>
      <div id='voteButtons'>
        <button onClick={null}>{upvotes}👍</button>
        <button onClick={null}>{downvotes}👎</button>
        <br /><br />
      </div>
    </>
  )
}
export default VideoDetails