import Link from 'next/link'
import { getAllPosts, formatDate } from '@/lib/posts'

export const metadata = {
  title: 'Blog - Alex Savage',
  description: 'Notes on AI product engineering, agent workflows, and whatever is on the bench.',
}

export default function BlogIndex() {
  const posts = getAllPosts()

  return (
    <section className="relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          <div className="mb-10 md:mb-14">
            <div className="font-jetbrains text-sm text-blue-400 mb-2">/ BLOG</div>
            <h1 className="text-3xl md:text-4xl font-bold text-white font-jetbrains">Posts</h1>
          </div>

          {posts.length === 0 ? (
            <p className="text-gray-400 font-jetbrains">No posts yet.</p>
          ) : (
            <ul className="space-y-6">
              {posts.map((post) => (
                <li key={post.slug}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="block glass-effect p-5 md:p-6 border border-blue-900/40 hover:border-blue-500/60 transition-colors duration-300"
                  >
                    <div className="font-jetbrains text-xs text-gray-500 mb-2">{formatDate(post.date)}</div>
                    <h2 className="text-xl md:text-2xl font-bold text-white mb-2">{post.title}</h2>
                    {post.description && <p className="text-gray-400">{post.description}</p>}
                  </Link>
                </li>
              ))}
            </ul>
          )}

        </div>
      </div>
    </section>
  )
}
