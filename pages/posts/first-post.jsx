import Link from 'next/link'
import Head from 'next/head'
import Script from 'next/script'
import Layout from '../../components/layout'


export default function FirstPost() {
    return <Layout>
        <Head>
            <title>first post</title>
            <Script src="https://www.google-analytics.com/analytics.js"
                    onLoad={() => {
                        console.log("cargue perfectamente")
                    }}
                    strategy={'lazyOnload'}
                    onError={(e) => {
                        debugger;
                        console.error('Script failed to load', e)
                    }}/>
        </Head>
        <h1>First Post</h1>
        <h2>
            <Link href="/">
                <a>go to back</a><
                /Link>
        </h2>
    </Layout>
}
