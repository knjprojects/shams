import React from 'react';
import Link from 'next/link';
const MyComponent: React.FC = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
         
            <li><Link href="/signup">Signup</Link></li>
          </ul>
        </nav>
      </header>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src="/your-image.jpg" alt="Your Image" />
          <audio controls>
            <source src="/your-audio.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
        <div>
          <video width="320" height="240" controls  poster="https://img.youtube.com/vi/8rrEvCar9lA/maxresdefault.jpg">
            <source src="https://www.youtube.com/watch?v=8rrEvCar9lA" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </>
  );
};

export default MyComponent;