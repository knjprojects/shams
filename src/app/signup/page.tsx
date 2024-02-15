'use client'
import React from 'react';
import { useFormStore } from '@/components/zustand/zustand.store';
const Signup: React.FC = () => {
  const search=useFormStore((state:any)=>state.keywords)
  const channelArray=useFormStore((state:any)=>state.channelArray);
  const youtubeInput=useFormStore((state:any)=>state.youtubeInput);
  return (
    <div>
      <h1>Signup Page file name changed from index.tsx to page.tsx </h1>
      <p>Keywords: {search} from youtubeInput :{youtubeInput.searchKeywords}</p>
      <p>ChannelArray : {channelArray} from youtubeInput: {youtubeInput.startUrls}</p>
      {/* Your signup form goes here */}
    </div>
  );
};

export default Signup;