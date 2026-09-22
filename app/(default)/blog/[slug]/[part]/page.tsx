import { notFound } from 'next/navigation'
import { getAllPosts, getPostBySlug, POST_PARTS, type PostRoute } from '@/lib/posts'
import PostView from '@/components/blog/post-view'

interface Params {
  params: { slug: string; part: string }
}

export const dynamicParams = false

export function generateStaticParams() {
  return getAllPosts().flatMap((post) =>
    POST_PARTS.map((part) => ({ slug: post.slug, part })),
  )
}

const LABEL: Record<Exclude<PostRoute, 'both'>, string> = {
  head: 'for models',
  tail: 'for people',
}

function isPart(p: string): p is Exclude<PostRoute, 'both'> {
  return (POST_PARTS as string[]).includes(p)
}

export function generateMetadata({ params }: Params) {
  const post = getPostBySlug(params.slug)
  if (!post || !isPart(params.part)) return {}
  return {
    title: `${post.title} (${LABEL[params.part]}) - Alex Savage`,
    description: post.description,
  }
}

export default function BlogPostPart({ params }: Params) {
  if (!isPart(params.part)) notFound()
  const post = getPostBySlug(params.slug)
  if (!post) notFound()
  if (params.part === 'tail' && post.tail === null) notFound()
  return <PostView post={post} route={params.part} />
}
