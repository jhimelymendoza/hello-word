import Layout from '../../components/layout'
import {getAllPostIds,getPostData} from "../../lib/posts";

export default function Post({ postData }) {
    debugger
    return (
        <Layout>
            {postData.title}
            <br />
            {postData.id}
            <br />
            {postData.date}
        </Layout>
    )
}

export async function getStaticProps({ params }) {
    const postData = getPostData(params.id)
    console.log("params", params)
    return {
        props: {
            postData
        }
    }
}

export async function getStaticPaths() {
    const paths =getAllPostIds();
  console.log("paths",paths)
    return {
        paths,
        fallback:false
    }
}
// export async function getStaticPaths() {
//     const paths = getAllPostIds()
//     return {
//         paths,
//         fallback: false
//     }
// }
