import React from 'react'
import Layout from '@theme/Layout'

export default function MyReactPage() {
    return (
        <Layout>
            <h1 className="h-page">Publications</h1>
            <p className="p-page">
                Here's a curated list of the articles I've written and published
                in partnership with companies.
            </p>
            <ul>
                <li>
                    StepZen -
                    <a href="https://stepzen.com/blog/using-vercels-middleware-and-graphql">
                        Living on the Edge: Using Vercel’s Middleware and
                        GraphQL
                    </a>
                </li>
                <li>
                    The A11y Project -
                    <a href="https://www.a11yproject.com/posts/text-resizing-in-ios-and-android/">
                        Text resizing in iOS and Android
                    </a>
                </li>
                <li>
                    Arctype -
                    <a href="https://arctype.com/blog/postgres-uuid/">
                        A Complete Guide to UUIDs in PostgreSQL
                    </a>
                </li>
                <li>
                    CodeSee -
                    <a href="https://learn.codesee.io/getting-your-bearings/">
                        Getting your bearings with CodeSee
                    </a>
                </li>
            </ul>
        </Layout>
    )
}
