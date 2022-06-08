import { useState } from 'react'
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

  console.log("Here's your data:");
  // console.log(video);
  console.log(id);
  console.log(title);
  console.log(embedUrl);
  console.log(views);
  console.log(createdAt);
  console.log(upvotes);
  console.log(downvotes);
  console.log(comments);
  /*
  State needed:
  - Comments (arr of objs)
  - Upvotes count (int)
  - Downvotes count (int)
  */

  const [currUpvotes, setCurrUpvotes] = useState()

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
    </div>
  );
}

export default App;
