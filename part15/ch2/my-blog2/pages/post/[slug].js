import SanityService from "../../services/SanityService";
import styles from "../../styles/Home.module.css";
import Header from "../../components/Header";
import BlogMainPost from "../../components/BlogMainPost";
import Footer from "../../components/Footer";
import BlogPostDetail from "../../components/BlogPostDetail";

export default function PostAll({ slug, post }) {
    console.log(post);

    return (
        <div className={styles.container}>
            <Header />
            <BlogMainPost {...post} />
            <BlogPostDetail blocks={post.content} />
            <Footer />
        </div>
    );
}

export async function getStaticPaths() {
    /*
    const client = sanityClient({
        dataset: "production",
        projectId: "jt5i56bz",
        useCdn: process.env.NODE_ENV === "production",
    });

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
    const posts = await new SanityService().getPost();

    const paths = posts.map((post) => ({
        params: {
            slug: post.slug,
        },
    }));

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const { slug } = params;
    /*
    const client = sanityClient({
        dataset: "production",
        projectId: "jt5i56bz",
        useCdn: process.env.NODE_ENV === "production",
    });

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

    const posts = await new SanityService().getPost();

    const post = posts.find((p) => p.slug === slug);

    return {
        props: {
            slug,
            post,
        },
    };
}
