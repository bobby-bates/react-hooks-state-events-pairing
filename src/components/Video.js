const Video = ({ embedUrl, title }) => {
  return (
    // <h1>Hi</h1>
    <iframe
      width= '480' // "919"
      height= '270' // "525"
      src={embedUrl}
      frameBorder="0"
      allowFullScreen
      title={title}
    />
  )
}
export default Video