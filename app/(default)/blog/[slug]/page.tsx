import { notFound } from 'next/navigation'
import { getAllPosts, getPostBySlug } from '@/lib/posts'
import PostView from '@/components/blog/post-view'

interface Params {
  params: { slug: string }
}

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }))
}

export function generateMetadata({ params }: Params) {
  const post = getPostBySlug(params.slug)
  if (!post) return {}
  return {
    title: `${post.title} - Alex Savage`,
    description: post.description,
  }
}

export default function BlogPost({ params }: Params) {
  const post = getPostBySlug(params.slug)
  if (!post) notFound()
  return <PostView post={post} route="both" />
}
