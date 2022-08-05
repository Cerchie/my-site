import React from 'react'
import clsx from 'clsx'
import styles from './styles.module.css'

const FeatureList = [
    {
        title: 'Lucia Cerchie',
        description: <>Developer Advocate. 🎤 Yogi. 🥨 Morning person. ☀️ </>,
    },
]

function Feature({ Svg, title, description }) {
    return (
        <div className="text--center padding-horiz--md">
            <div className="homepage-text">
                <h1 className="hometitle">{title}</h1>
                <img
                    alt="Lucia's headshot"
                    src="img/lucia.png"
                    width="150"
                    id="lucia-pic"
                ></img>
                <p className="homepara">{description}</p>

                <p className="homepara">
                    I believe in a human-centered developer experience, in the
                    teaching responsibility of developer advocates, and in the
                    joy of learning.
                </p>
            </div>
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
