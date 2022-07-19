import React from 'react'
import './Teams.css'
import square  from '../../images/square.svg'
import sothebys  from '../../images/sothebys.svg'
import dominos  from '../../images/dominos.svg'
import puppet  from '../../images/puppet.svg'
import twitter  from '../../images/twitter.svg'
import telegraph  from '../../images/telegraph.svg'

const Teams = () => {
  return (
    <div className='Teams'>
    <div className='sec'>
        <h1>Powering teams of all sizes around the world</h1>
    </div>
    <div className='img'>
    <img className='square' src={square} alt='square'/>
    <img className='sothebys' src={sothebys} alt='sothebys'/>
    <img className='dominos' src={dominos} alt='dominos'/>
    <img className='puppet' src={puppet} alt='puppet'/>
    <img className='twitter' src={twitter} alt='twitter'/>
    <img className='telegraph' src={telegraph} alt='telegraph'/>
    </div>

    </div>
  )
}

export default Teams