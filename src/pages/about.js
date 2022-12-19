import React from 'react'
import Layout from '@theme/Layout'

export default function MyReactPage() {
    return (
        <Layout>
            <h1 className="h-page">My Story</h1>
            <p className="p-page">
                In the summer of 2015 I flew, bussed, and accidentally
                hitch-hiked to the city of Phoenix to sign the papers for my
                first job in an elementary school classroom. I spent the next 4
                years teaching 2-10 year-olds how to read. All the while, I was
                growing in my understanding of how humans learn.
            </p>
            <p className="p-page">
                In 2018, I pivoted to digital marketing. I had the opportunity
                to be contracted with a SaaS, and after I met one of their
                engineers for coffee, I realized I wanted to code.
            </p>
            <p className="p-page">
                I spent most of 2020 at a bootcamp, and landed my first job the
                day after I graduated.
            </p>
            <p className="p-page">I've been coding and teaching ever since.</p>

            <a rel="me" href="https://data-folks.masto.host/@Cerchie">
                Mastodon
            </a>
            <a href="https://github.com/Cerchie">GitHub</a>
        </Layout>
    )
}
