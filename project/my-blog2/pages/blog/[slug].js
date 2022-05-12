import { useRouter } from "next/router";

export default function Blog() {
    const router = useRouter();
    console.log(router);
    const { slug } = router.query;

    return (
        <div>
            <h1>blog/{slug}</h1>
        </div>
    );
}
