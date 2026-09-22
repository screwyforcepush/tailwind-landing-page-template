import { notFound } from 'next/navigation'
import { getAllPosts, getPostBySlug, POST_PARTS, type PostPartKey } from '@/lib/posts'
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

const LABEL: Record<PostPartKey, string> = {
  spec: 'for AI',
  narrative: 'for humans',
}

function isPart(p: string): p is PostPartKey {
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
  if (params.part === 'narrative' && post.narrative === null) notFound()
  return <PostView post={post} route={params.part} />
}
