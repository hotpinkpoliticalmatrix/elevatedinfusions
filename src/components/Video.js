import React from "react"
import withStyles from "@material-ui/core/styles/withStyles"

const VideoStyles = {
  videoWrapper: {
    position: "relative",
    overflow: "hidden",
    paddingTop: "56.25%",
  },
  video: {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    border: "0",
  },
}

const Video = ({ videoSrcURL, classes, videoTitle, ...props }) => (
  <div className={classes.videoWrapper}>
    <iframe
      className={classes.video}
      src={videoSrcURL}
      title={videoTitle}
      width="560"
      height="315"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
    />
  </div>
)
export default withStyles(VideoStyles)(Video)
