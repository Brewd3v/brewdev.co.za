import { PostLayout } from "@/components/PostLayout";
import { getPostBySlug } from "@/sanity/lib/queries";

export const post = {
    author: 'Adam Wathan',
    date: '2022-09-05',
    title: 'Crafting a design system for a multiplanetary future',
    description:
        'Most companies try to stay ahead of the curve when it comes to visual design, but for Planetaria we needed to create a brand that would still inspire us 100 years from now when humanity has spread across our entire solar system.',
}

export const metadata = {
    title: post.title,
    description: post.description,
}

export default async function Page({ params }: { params: { slug: string } }) {
    const post = await getPostBySlug(params.slug);

    return <PostLayout post={post}>
        <div>
            <h1>Hello from {post.title}</h1>
        </div>
    </PostLayout>;
}