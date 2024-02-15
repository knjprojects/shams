'use-client'
import React from 'react'
import {useForm} from 'react-hook-form';
import { useFormStore } from './zustand/zustand.store';
type Props = {}

const Form = (props: Props) => {
  const processInputString = (inputString:any) => {
    // Remove any extra white spaces and then split the string by commas
    const stringArray = inputString.replace(/\s/g, '').split(',');
    return stringArray;
  };
  
    const { register, handleSubmit, formState: { errors } } = useForm();
    //const { field1, field2, setField1, setField2 } = useFormStore();
  const increaseBears= useFormStore((state:any) => state.increasePopulation);
  const setKeywords=useFormStore((state:any)=>state.setKeywords);
  //const setField2=useFormStore((state:any)=>state.setField2);
  const setChannelArray=useFormStore((state:any)=>state.setChannelArray);
  const handleKeywordsChange = (e:any) => {
  
    if (e.target) { 
       console.log('attempting to update my keywords variable in zustand')
      setKeywords(e.target.value);
    }
  };

  const handleArrayChange = (e:any) => {
    if (e.target) {
      setChannelArray(e.target.value);
    }
  };
    const onSubmit = (data:any) => {
      console.log("Form submitted with data:", data);
        // Verify the fields are not empty
        if (data.keywords /*&& data.field2*/) {
          //updates both keywords and the entire youtubeInut variable
          setKeywords(data.keywords);
        }
        if(data.channelArray){
          //separated the single input by commas and returns an array of inputs
          let ChannelArray=processInputString(data.channelArray);
          //updates both channelArray and the entire youtubeInput variable
          setChannelArray(ChannelArray);
        }
      };
  return (
    <div>
  
          <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="firstName">First Name</label>
        <input {...register("firstName", { required: true })} />
        {errors.firstName && <span>This field is required</span>}
      </div>

      <div>
        <label htmlFor="lastName">Last Name</label>
        <input {...register("lastName", { required: true })} />
        <p>Enter keyword searches here</p>
            <input {...register("keywords", { required: true })} />
            <p>Enter startUrl's such as channel linkis here</p>
            <input {...register("channelArray")} placeholder="Enter comma-separated values" />
        {errors.lastName && <span>This field is required</span>}
      </div>

      <button type="submit">Submit/UpdateScraper Values</button>
    </form>
    </div>
  )
}

export default Form