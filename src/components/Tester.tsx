import React from 'react'
import Youtube from "react-youtube"
type Props = {}

const Tester = (props: Props) => {
    const opts = {
        height: '390',
        width: '640',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
  return (
    <div>
        <p>Below is a youtube video test</p>
        <Youtube videoId= "vC4dLeqnvAw"  opts={opts}/>
    </div>
  )
}

export default Tester