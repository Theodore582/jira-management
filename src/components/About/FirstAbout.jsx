    import React from 'react'
    import './FirstAbout.css'
    import firstimage from '../../images/firstimage.png'
    import secondimage from '../../images/secondimage.png'
    import thirdimage from '../../images/thirdimage.png'


    const FirstAbout = () => {
        return (
            <div className='About'>
                <div className='heading'>
                    <p>Jira Service Management empowers teams with adaptable practices,
                        an open platform, and streamlined workflows that bring dev and ops together.
                    </p>
                </div>
                <div className='section1'>
                    <div className='text1'>
                        <h1>Teams empowered to deliver value fast</h1>
                        Tune Jira Service Management to meet unique needs, while breaking down silos. It’s easy for every team, from IT to HR to legal,
                        to set up projects quickly and in the way they see fit, without losing the agility to work across organizations.
                    </div>
                    <div className='image1'>
                        <img className="imagee" src={firstimage} alt="" />
                    </div>


                </div>

                <div className='section1'>
                    <div className='image2'>
                        <img className="imagee" src={secondimage} alt="" />
                    </div>
                    <div className='text2'>
                        <h1>A unified view of work</h1>
                        Track work across the enterprise through an open, collaborative platform. Link issues across Jira,
                        ingest data from Atlassian and other tools, and have the context you need to rapidly respond when incidents occur.
                    </div>


                </div>
                <div className='section1'>
                    <div className='text1'>
                        <h1>Dev and Ops that flow</h1>
                        Deliver more customer impact while managing risk. Accelerate critical development work,
                        eliminate toil, and deploy changes with ease, all backed by a complete audit trail for every change.
                    </div>
                    <div className='image1'>
                        <img className="imagee" src={thirdimage} alt="" />
                    </div>


                </div>






            </div>
        )
    }

    export default FirstAbout