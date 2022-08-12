import React from 'react'
import Layout from '@theme/Layout'

export default function MyReactPage() {
    return (
        <Layout>
            <h1 className="h-page">Get In Touch</h1>
            <p className="p-page">
                If you're interested in working with me in any of the capacities
                listed below, email me: <i>luciacerchie</i> at <i>gmail.com</i>.
                Or, contact me using one of my social profiles.
            </p>
            <ul className="p-page">
                <li>
                    <a href="https://www.linkedin.com/in/luciacerchie/">
                        LinkedIn
                    </a>
                </li>
                <li>
                    <a href="https://github.com/Cerchie">GitHub</a>
                </li>
                <li>
                    <a href="https://twitter.com/CerchieLucia">Twitter</a>
                </li>
            </ul>
            <h3 className="h-page">Full-time roles</h3>
            <p className="p-page">
                I'm currently open to a full-time role in developer advocacy! If
                you've got an opening, contact me.
            </p>
            <h3 className="h-page">Blog Posts</h3>
            <p className="p-page">
                I write how-to's and tutorials. In the past, I've written for{' '}
                <a href="https://stepzen.com/">StepZen</a>,{' '}
                <a href="https://arctype.com/">Arctype</a>,{' '}
                <a href="https://www.a11yproject.com//">The A11Y Project</a>,{' '}
                and <a href="https://learn.codesee.io/">Codesee</a>. View my{' '}
                <a href="/publications">publications page </a>for a list of my
                articles.
            </p>
            <h3 className="h-page">Talks</h3>
            <p className="p-page">
                I'm currently available to speak at your event!
            </p>
        </Layout>
    )
}
