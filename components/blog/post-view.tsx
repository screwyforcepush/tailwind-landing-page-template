import Link from 'next/link'
import { formatDate, type Post, type PostRoute } from '@/lib/posts'
import CopyMarkdownButton from '@/components/utils/copy-markdown-button'

interface PostViewProps {
  post: Post
  route: PostRoute
}

const ROUTES: { key: PostRoute; label: string; path: (slug: string) => string }[] = [
  { key: 'both', label: 'BOTH', path: (slug) => `/blog/${slug}` },
  { key: 'spec', label: 'SPEC · FOR AI', path: (slug) => `/blog/${slug}/spec` },
  { key: 'narrative', label: 'NARRATIVE · FOR HUMANS', path: (slug) => `/blog/${slug}/narrative` },
]

export function partFor(post: Post, route: PostRoute): { html: string; markdown: string } {
  if (route === 'spec') return post.spec
  if (route === 'narrative' && post.narrative) return post.narrative
  return { html: post.html, markdown: post.markdown }
}

export default function PostView({ post, route }: PostViewProps) {
  const part = partFor(post, route)
  const hasNarrative = post.narrative !== null

  return (
    <section className="relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          <Link href="/blog" className="font-jetbrains text-sm text-blue-400 hover:text-blue-300 transition-colors">
            &larr; / NOT FOR HUMANS
          </Link>

          <header className="mt-6 mb-10">
            <div className="font-jetbrains text-xs text-gray-500 mb-3">{formatDate(post.date)}</div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">{post.title}</h1>

            <div className="flex flex-wrap items-center gap-2">
              {hasNarrative && (
                <nav aria-label="Post route" className="inline-flex border border-blue-900/40">
                  {ROUTES.map((r) => {
                    const active = r.key === route
                    const cls = active
                      ? 'text-white bg-blue-900/60'
                      : 'text-blue-300 hover:text-white hover:bg-blue-900/30'
                    return (
                      <Link
                        key={r.key}
                        href={r.path(post.slug)}
                        aria-current={active ? 'page' : undefined}
                        className={`font-jetbrains text-xs tracking-wider px-3 py-2 transition-colors ${cls}`}
                      >
                        {r.label}
                      </Link>
                    )
                  })}
                </nav>
              )}
              <CopyMarkdownButton markdown={part.markdown} />
            </div>
          </header>

          <article
            className="prose prose-invert prose-lg max-w-none prose-headings:font-jetbrains prose-a:text-blue-400 hover:prose-a:text-blue-300 prose-code:font-jetbrains prose-code:text-cyan-300 prose-pre:bg-gray-900 prose-pre:border prose-pre:border-blue-900/40"
            dangerouslySetInnerHTML={{ __html: part.html }}
          />

        </div>
      </div>
    </section>
  )
}
