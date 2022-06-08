const Video = ({ embedUrl, title }) => {
  // debugger
  return (
    // <h1>Hi</h1>
    <iframe
      width="919"
      height="525"
      src={embedUrl}
      frameBorder="0"
      allowFullScreen
      title={title}
    />
  )
}
export default Video