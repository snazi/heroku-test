import React from 'react'
import Header from  '../common/Header/Header'
import Head from 'next/head'

const BaseLayout = (props) => {

    const { className, children, isAuthenticated, user, isSiteOwner, cannonical } = props
    const headerType = props.headerType || 'default'
    const title = props.title || 'Angelo Amadora Portfolio'


    return (
        <React.Fragment>
            <Head>
                <title>{title}</title>
                <meta name="description" content="My Name is Angelo Amadora and I am a software developer. Nice to meet you! Feel free to browse through my website." />
                <meta name="keywords" content="angelo portfolio, angelo freelancing, angelo developer, angelo developer" />
                <meta property="og:title" content="Angelo Amadora - Programmer, Project Manager, blogger"/>
                <meta property="og:locale" content="en_US"/>
                <meta property="og:url" content={`${process.env.BASE_URL}`}/>
                <meta property="og:type" content="website"/>
                <meta property="og:description" content="My Name is Angelo Amadora and I am a software developer. Nice to meet you! Feel free to browse through my website."/>
                {cannonical && <link rel="cannonical" href={`${process.env.BASE_URL}${cannonical}`}/>}
                <link rel="icon" type="image/ico" href="/favicon.ico"/>
                <script src="https://kit.fontawesome.com/0fee7dd303.js" crossorigin="anonymous"/>
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
            </Head>
            <div className="layout-container">
                <Header className={`port-nav-${headerType}`} isAuthenticated={isAuthenticated} user={user} isSiteOwner={isSiteOwner}/>
                <main className={`cover ${className}`}>
                    <div className="wrapper">
                        {children}
                    </div>
                </main>
            </div>
        </React.Fragment>
    )
}

export default BaseLayout
