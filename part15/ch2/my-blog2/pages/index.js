import styles from "../styles/Home.module.css";
import SanityService from "../services/SanityService";
import Header from "../components/Header";
import BlogHeadLine from "../components/BlogHeadLine";
import BlogMainPost from "../components/BlogMainPost";
import BlogList from "../components/BlogList";
import Footer from "../components/Footer";

export default function Home({ home, posts }) {
    // console.log(home);
    // console.log(posts);
    const mainPost = posts.find((p) => p.slug == home.mainPostUrl);
    const otherPosts = posts.filter((p) => p.slug != home.mainPostUrl);
    console.log(mainPost);
    console.log(otherPosts);

    return (
        <div className={styles.container}>
            <Header />
            <BlogHeadLine />
            <BlogMainPost {...mainPost} />
            <BlogList posts={otherPosts} />
            <Footer />
        </div>
    );
}

export async function getStaticProps() {
    /*// sanity로부터 데이터를 가져온다!
    const client = sanityClient({
        dataset: "production",
        projectId: "jt5i56bz",
        useCdn: process.env.NODE_ENV === "production",
    });

    const home = await client.fetch(
        `*[_type == 'home'][0]{'mainPostUrl':mainPost->slug.current}`
    );

    const posts = await client.fetch(
        `*[_type == 'post']{
            title,
            subtitle,
            createdAt,
            'content': content[]{
                ...,
                ...select(_type == 'imageGallery' => {'images':images[]{...,'url':asset->url}})
            },
            'slug': slug.current,
            'thumbnail': {
                'alt': thumbnail.alt,
                'imageUrl': thumbnail.asset -> url
            },
            'author' : author -> {
                name,
                role,
                'image':image.asset->url
            },
            'tag':tag -> {
                title,
                'slug': slug.current
            }
        }`
    );
    */

    // service에 중복 처리
    const sanityService = new SanityService();
    const home = await sanityService.getHome();
    const posts = await sanityService.getPost();

    return {
        props: {
            home,
            posts,
        },
    };
}
