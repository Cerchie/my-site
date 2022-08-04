import React from 'react'
import clsx from 'clsx'
import styles from './styles.module.css'

const FeatureList = [
    {
        title: 'Lucia Cerchie',
        description: <>Developer Advocate. 🎤 Yogi. 🥨 Toddler mom. 🐥 </>,
    },
]

function Feature({ Svg, title, description }) {
    return (
        <div className="text--center padding-horiz--md">
            <img
                alt="Lucia's headshot"
                src="img/lucia.png"
                width="150"
                id="lucia-pic"
            ></img>
            <h3>{title}</h3>
            <p>{description}</p>
            <p>
                I believe in a human-centered developer experience, in the
                teaching responsibility of developer advocates, and in the joy
                of learning.
            </p>
        </div>
    )
}

export default function HomepageFeatures() {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    )
}
