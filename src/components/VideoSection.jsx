import React from 'react'

const VideoSection = ({videoKey}) => {
  return (
	<div className='video-card '>
		<div className="video-card-body">
			<div className="ratio ratio-16x9">
			<iframe
            src={`https://www.youtube.com/embed/${videoKey}?autoplay=1&mute=1`}
            title="YouTube video"
            allowFullScreen
			width="800"
			height="435"
          ></iframe>
			</div>
		</div>
	</div>
  )
}

export default VideoSection