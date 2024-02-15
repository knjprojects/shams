import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { useState,useEffect } from 'react';
type Props = {}
const { ApifyClient } = require('apify-client');
import Form from './Form';
import { useFormStore } from './zustand/zustand.store';
//this client is only called with google maps, a simple endpoint link fetches data for the youtube search results
const client = new ApifyClient({
  token: 'apify_api_YVJ9HkyOGlvFYZAcLOn36Xei6pIxz60buHMn',
});
//bernardro/actor-youtube-scraper
//'streamers/youtube-scraper

//NOTE: THE APIFY CLIENT IS SUGGESTED IMO BECAUSE IT GIVES US PROPER PROGRAMMABLE INPUTS FOR OUR RESULT QUERIES
const ApifyYoutubeNextJs = (props: Props) => {
  const [loading, setLoading]:any=useState(false);
  const [loadingGhibli,setLoadingGhibli]:any=useState(false);
  const [keywords, setKeywords]:any=useState('')
  const [myUrls,setMyUrls]:any =useState([''])
  const [channelData,setChannelData]:any=useState([])
  const search=useFormStore((state:any)=>state.keywords)
  const channelArray=useFormStore((state:any)=>state.channelArray);
  const youtubeInput=useFormStore((state:any)=>state.youtubeInput);
  const [loadingScraper,setLoadingScraper]:any=useState(false);
  const mapsInput = {
    "searchStringsArray": [
        "restaurant"
    ],
    "locationQuery": "New York, USA",
    "maxCrawledPlacesPerSearch": 50,
    "language": "en",
    "maxImages": 0,
    "maxReviews": 0,
    "countryCode": "",
    "allPlacesNoSearchAction": ""
  };//this is my nextjs search results
//this is the api endpoint for the already completed actor's results
  const [data,setData]:any=useState(null);
  //this is an attempt to return a list of ghibli music videos from a specific channel
  const [ghibliMusic, setGhibliMusic]:any=useState([]);
        

  const fetchData = async () => {
    try {//we are using the api endpoiunt method not the api client method using apify-cleint
              //this only returns the already run actor, and sends the dataset results through an api.
              //use 
          const response = await fetch('https://api.apify.com/v2/datasets/I4RMGiBrjFuNgQ7iJ/items?token=apify_api_YVJ9HkyOGlvFYZAcLOn36Xei6pIxz60buHMn');
          const result = await response.json();
          setData(result);
          } 
    catch (error) {
          console.error('Error fetching nextjs data: ', error);
          }
    };
          //this fetches all videos from a channel called ghibli music, i think
    const fetchGhibliMusic=async()=>{
      try {
          const response =await fetch('https://api.apify.com/v2/acts/streamers~youtube-channel-scraper/run-sync-get-dataset-items?token=apify_api_YVJ9HkyOGlvFYZAcLOn36Xei6pIxz60buHMn');
          const result=await response.json();
          setGhibliMusic(result);
          } catch (error) {
                console.error('Error fetching ghibli data: ', error);
            }
    }
    //this fetches google map data 
    const fetchMapData=async()=>{
          // Run the Actor and wait for it to finish
      const run = await client.actor("compass/crawler-google-places").call(mapsInput);

    // Fetch and print Actor results from the run's dataset (if any)
      console.log('Results from dataset');
      const { items } = await client.dataset(run.defaultDatasetId).listItems();
      items.forEach((item:any) => {
        console.dir(item);
        });
    }    

   
    //using inputs from the user, we can generate youtuberesults
    const fetchYoutubeChannelData=async()=>{
      console.log('attempting to fetch');
      setLoadingScraper(true);
      const run = await client.actor("h7sDV53CddomktSi5").call(youtubeInput);
      setLoadingScraper(false);
      // Fetch and print Actor results from the run's dataset (if any)
      console.log('Results from dataset');
      const { items } = await client.dataset(run.defaultDatasetId).listItems();
      setChannelData(items);
    }
    useEffect(()=>{
    
  },[])
    
   
  
  return (
        <div>
          <Link href="/signup">Signup</Link>
         {/*} { data? 
            <p>No results for the run yet</p> : 
            <p>Below is the results for the apify youtube scraper api endpoit</p>
          }
        {loading?  <p>We are loading you data</p> : <></>   }
        <button className='bg-red-500' onClick={()=>{
                fetchData();
                setLoading(true);
                }}>
          <p className='text-white font-bold italic text-center'>Press here to load scraping data</p>
        </button>
        {
          data!=null ?<div>
          {
          <div>
            <p className='text-black'>There is atleast some data</p>
            <p>{data!.toString()}</p>
            {data.map((item:any, index:any) => (  
              <li key={index}>
                <Image alt ="thumnail" src={item.thumbnailUrl} height={720} width={1280} />
                <a href={`https://youtube.com/watch?v=${item.id}`}>{item.title}</a>
                <p className='p-6'>{item.text}</p>
              </li>
              ))}
            </div>
            }
        </div>: <></>
        }
      <div>
        <p className='bg-gray-400 text-center text-black p-1'>Below I am going to use the api client for javascript and not the fetch api endpoint. I am going to try out the google maps scraper</p>
      </div>
      */}
      <div>
        <p className='text-red-500'>Below we are trying to fetch youtube channel data using the apify-client unlike the api endpoints' dataset results after the actors have already ran. Now we have to run the actor programmatically with our search keywords and ny youtube channel urls as starting points. First I am using a react-hook-form to update my keyword searches and starturls for my scraper</p>
        <Form />
        <button onClick={()=>{
            fetchYoutubeChannelData();
        }} >Press Me To Load Scraper Data</button>
        <p>Current Input fields</p>
        <div className='flex flex-row bg-gray-300 rounded-xl'>
          
            <p>Keywords: {youtubeInput.searchKeywords}</p>
            <p>Channel Urls: {youtubeInput.startUrls}</p>
          
        </div>
        {channelData? <div>
              {
                channelData.map((item:any,index:any)=>(
                  <li key={index}>
                    <p>{item.title}</p>
                  </li>
                ))
              }


        </div> : <p>No data received from scraper </p>

        
      }
      </div>
  </div>
  )
}

export default ApifyYoutubeNextJs