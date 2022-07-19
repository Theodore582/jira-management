import React from 'react'
import './Hero.css'
import { FcGoogle } from 'react-icons/fc'
import { FaAtlassian } from 'react-icons/fa'


const Hero = () => {
  return (
    <div className='Hero'>
      <div className='row'>
        <div className='text'>
        <h1>ITSM that unlocks high-velocity teams</h1>
          <p>GET IT FOR FREE TODAY:</p>
          <ul className='ul'>
            <li className='first_li'>Access to ITSM features</li>
            <li className='second_li'>2 GB storage</li>
            <li className='third_li'>For up to 3 agents, unlimited customers</li>
            <li className='fourth_ul'>Community Support</li>
            <li className='fifth_li'>Zero obligation, no credit card needed</li>
          </ul>
        </div>
        <div className='card'>
          <h1>Start Now</h1>
          <p>Free for up to 3 agents</p>
          <div className='google'>
            <FcGoogle className='google__icon' />
            <a href='#' className="google__link">Continue with Google</a>
          </div>
          <div className='or'>
            <div className='line1'></div>
            <span className='span'>OR</span>
            <div className='line2'></div>
          </div>
          <div className='signup'>
            <a href='#' className='email'>Sign Up with email</a>
          </div>

          <div className='atlassian'>
            <FaAtlassian className='atlas' />
            <span className='at'>ATLASSIAN</span>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Hero