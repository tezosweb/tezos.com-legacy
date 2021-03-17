import React from 'react'
import styles from './styles.module.css'
import BulletPt from './BulletPt'

const BulletPtSection = ({ bulletPts }) => (
    <div className={styles.bulletPtSection}>
        {bulletPts.map((bullet, i) => (
            <div key={`bullet${i}`} className={styles.bulletPt}>
                <BulletPt
                    heading={bullet.heading}
                    text={bullet.text}
                    img={bullet.img}
                    alt={bullet.alt}
                />
            </div>
        ))}
    </div>
)

export default BulletPtSection