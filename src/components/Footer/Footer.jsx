import React from 'react'
import './Footer.css'
import { FaAtlassian } from 'react-icons/fa'

const footer = () => {
    return (
        <div className='footer'>
            <div className='part1'>
                <p><FaAtlassian className='i' />ATLASSIAN</p>
            </div>
            <div className='part2'>
                <h2>PRODUCTS</h2>
                <a href="'#"> Jira Software</a><br />
                <a href="'#">Jira Align</a><br />
                <a href="'#">Jira Service Management</a><br />
                <a href="'#">Confluence</a><br />
                <a href="'#">Trello</a><br />
                <a href="'#">Bitbucket</a><br />
                <a className='link' href="'#">View all products</a>
            </div>

            <div className='part2'>
                <h2> RESOURCES</h2>
                <a href="'#"> Technical Support</a><br />
                <a href="'#">Purchasing & licensing</a><br />
                <a href="'#">Atlassian Community</a><br />
                <a href="'#">Knowledge base</a><br />
                <a href="'#">Marketplace</a><br />
                <a href="'#">My Account</a><br />
                <a className='link' href="'#">Create support ticket</a>
            </div>

            <div className='part2'>
                <h2> EXPAND & LEARN</h2>
                <a href="'#"> Partners</a><br />
                <a href="'#">Training & Certification</a><br />
                <a href="'#">Documentation</a><br />
                <a href="'#">Developer Resources</a><br />
                <a href="'#">Enterprise services</a><br />
                <a className='link' href="'#">View all resources</a>
            </div>

            <div className='part2'>
                <h2> ABOUT ATLASSIAN</h2>
                <a href="'#">Company</a><br />
                <a href="'#">Careers</a><br />
                <a href="'#">Events</a><br />
                <a href="'#">Blogs</a><br />
                <a href="'#">Investor Relations</a><br />
                <a href="'#">Trust & Security</a><br />
                <a className='link' href="'#">Contact us</a>
            </div>

           














        </div>
    )
}

export default footer