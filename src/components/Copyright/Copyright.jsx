import React from 'react'
import './Copyright.css'
import { ImFacebook2 } from 'react-icons/im'
import { BsTwitter } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import { TiSocialYoutubeCircular } from 'react-icons/ti'
import { MdOutlineLanguage } from 'react-icons/md'

const Copyright = () => {
    return (
        <div className='copyright'>
            <div className='bottom'>
            <MdOutlineLanguage  className='lang'/>
                <div className='languages'>
               
                    <select id="languages" name="languages">
                        <option value="af">Deutsch</option>
                        <option value="sq">English</option>
                        <option value="am">Espanol</option>
                        <option value="ar">Francais</option>
                        <option value="an">Italiano</option>
                    </select>
                </div>
            
            <div className='privacy'>
                <ul>
                    <li>Privacy policy</li>
                    <li>Terms</li>
                    <li>Impressum</li>
                    <li className='copy'>Copyright © 2022 Atlassian</li>
                </ul>
            <div className='iconz'>
            <ul>
            <a href="'#"> <ImFacebook2 className='facebook'/></a>
            <a href="'#"> <BsTwitter className='twitter'/></a>
            <a href="'#"> <BsLinkedin className='linkedin'/></a>
            <a href="'#"> <TiSocialYoutubeCircular className='youtube' /></a>
                </ul>
            </div>
            </div>
            </div>
        </div>
    )
}

export default Copyright