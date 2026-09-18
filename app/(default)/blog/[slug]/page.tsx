import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getAllPosts, getPostBySlug, formatDate } from '@/lib/posts'
import CopyMarkdownButton from '@/components/utils/copy-markdown-button'

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

  return (
    <section className="relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          <Link href="/blog" className="font-jetbrains text-sm text-blue-400 hover:text-blue-300 transition-colors">
            &larr; / BLOG
          </Link>

          <header className="mt-6 mb-10">
            <div className="font-jetbrains text-xs text-gray-500 mb-3">{formatDate(post.date)}</div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">{post.title}</h1>
            <CopyMarkdownButton markdown={post.markdown} />
          </header>

          <article
            className="prose prose-invert prose-lg max-w-none prose-headings:font-jetbrains prose-a:text-blue-400 hover:prose-a:text-blue-300 prose-code:font-jetbrains prose-code:text-cyan-300 prose-pre:bg-gray-900 prose-pre:border prose-pre:border-blue-900/40"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />

        </div>
      </div>
    </section>
  )
}
