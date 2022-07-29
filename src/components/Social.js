import React from 'react'
import { SocialIcon } from 'react-social-icons'
import classes from './Social.module.css'

const Social = () => {
    let urls = [
        'https://www.linkedin.com/feed/',
        'https://github.com/nimit7',
        'https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox',
        'https://twitter.com/home',
        'https://www.facebook.com/',
        'https://www.instagram.com/'
    ]

    return (
        <div className={classes.social}>
            {urls.map((url) =>
                <div className={`my-4`}>
                    <SocialIcon url={url} target='_blank' style={{ height: '100%', width: '100%' }} fgColor='white' />
                </div>
            )}

        </div>
    )
}

export default Social