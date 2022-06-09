import { useState } from 'react'
import Video from './Video'
import VideoDetails from './VideoDetails'
import CommentList from './CommentList'
import video from "../data/video.js";

function App() {
  const { 
    id,
    title,
    embedUrl,
    views,
    createdAt,
    upvotes,
    downvotes,
    comments } = video

  // console.log("Here's your data:");
  // console.log(video);
  // console.log(id);
  // console.log(title);
  // console.log(embedUrl);
  // console.log(views);
  // console.log(createdAt);
  // console.log(upvotes);
  // console.log(downvotes);
  // console.log(comments);
  /*
  State needed:
  - Comments (arr of objs)
  - Upvotes count (int)
  - Downvotes count (int)
  */

  const [currUpvotes, setCurrUpvotes] = useState(upvotes)
  const [currDownvotes, setCurrDownvotes] = useState(downvotes)
  const [currComments, setCurrComments] = useState(comments)
  // console.log(currUpvotes)
  // console.log(currDownvotes)

  return (
    <div className="App">
      <Video embedUrl={embedUrl} title={title} />
      <VideoDetails
        title={title}
        views={views}
        createdAt={createdAt}
        upvotes={currUpvotes}
        setCurrUpvotes={setCurrUpvotes}
        downvotes={currDownvotes}
        setCurrDownvotes={setCurrDownvotes}
      />
      <CommentList comments={currComments}/>
    </div>
  );
}

export default App;
