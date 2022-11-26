import React from 'react'
import Layout from '@theme/Layout'

export default function MyReactPage() {
    return (
        <Layout>
            <h1 className="h-page">Website Colors</h1>
            <p className="p-page">
                This website's colors are{' '}
                <text style={{ color: '#84b1ae' }}>
                    {' '}
                    crystallized verdigris
                </text>{' '}
                and <text style={{ color: '#6b1f2e' }}>shellac</text> created by
                a 17th century Dutch artist named A. Boogert. You can view more
                of the colors and see them in JSON format at C82:{' '}
                <a href="https://www.c82.net/work/?id=390">
                    17th Century Watercolors
                </a>
            </p>
        </Layout>
    )
}
