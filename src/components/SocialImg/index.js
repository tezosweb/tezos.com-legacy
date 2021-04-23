import React from 'react'
import styles from './styles.module.css'

function SocialLink({ text, link, img }) {
    return (
        <>
            <a href={link} target="_blank" >
                <button className={styles.socialButton} text={text}>
                    <img src={img} width='30px' height='30px' alt={text}/>
                </button>
            </a> &nbsp;
        </>
    )
}

export default SocialLink