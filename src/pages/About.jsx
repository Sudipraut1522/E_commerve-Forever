import React from 'react'
import Title from '../components/Title'
import about_img from '../assets/about_img.png'
import NewsLetterBox from '../components/NewsLetterBox'
const About = () => {
  return (
    <div>
      <div className='text-2xl text-cneter pt-8 border-t'>
      <Title text1={'ABOUT'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
      <img className='w-full md:max-w-[450px]' src={about_img} alt=''/>
      <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p>The blue balloon floated lazily across the sky, its string tangled in the branches of a nearby oak tree.</p>
        <p>The blue balloon floated lazily across the sky, its string tangled in the branches of a nearby oak tree.</p>
      <b className='text-gray-800'>Our Mission</b>
      <p>A curious squirrel watched from below, twitching its tail as if wondering how the balloon managed to escape.</p>
      </div>
      </div>
      <div className='text-4xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
      <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
      <b>Quality Assurance:</b>
      <p>In the distance, the soft hum of a lawnmower could be heard, mixing with the distant chatter of people at a summer picnic. The air smelled of freshly cut grass and a faint trace of something sweet, maybe cotton candy, drifting from the carnival grounds nearby.</p>
      </div>
      <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
      <b>Convenience:</b>
      <p>In the distance, the soft hum of a lawnmower could be heard, mixing with the distant chatter of people at a summer picnic. The air smelled of freshly cut grass and a faint trace of something sweet, maybe cotton candy, drifting from the carnival grounds nearby.</p>
      </div>
      <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
      <b>Exceptional Customer Services:</b>
      <p className='text-gray-600'>In the distance, the soft hum of a lawnmower could be heard, mixing with the distant chatter of people at a summer picnic. The air smelled of freshly cut grass and a faint trace of something sweet, maybe cotton candy, drifting from the carnival grounds nearby.</p>
      </div>
      </div>
      <NewsLetterBox/>
    </div>
  )
}

export default About
