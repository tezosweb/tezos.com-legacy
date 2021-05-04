import React from 'react'
import clsx from 'clsx'
import styles from './styles.module.css'

const Wrapper = ({ bg, color, center, right, padded, border, updates, contained, id, children }) => (
    <div style={{
        backgroundColor: bg, 
        color: color,
        textAlign: center && 'center' || right && 'right',
        padding: padded && '90px 75px' || updates && '80px 20px' || '20px',
        marginBottom: '5px',
        border: border && `2px solid ${border}`
    }}
        className={clsx(contained && 'container')}
        id={id}
    >
        {children}
    </div>
)

export default Wrapper