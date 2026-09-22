import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'

const POSTS_DIR = path.join(process.cwd(), 'content', 'posts')

export interface PostMeta {
  slug: string
  title: string
  date: string
  description: string
}

/** One half of a two-part post. */
export interface PostPart {
  /** Rendered HTML */
  html: string
  /** Markdown for this part only, no frontmatter */
  markdown: string
}

/** Which half of a post a route serves. */
export type PostRoute = 'both' | 'spec' | 'narrative'
export type PostPartKey = Exclude<PostRoute, 'both'>
export const POST_PARTS: PostPartKey[] = ['spec', 'narrative']

export interface Post extends PostMeta {
  /** Rendered HTML body */
  html: string
  /** Raw file contents, frontmatter included */
  markdown: string
  /** Spec: the part written for models. Whole body when the post has no narrative. */
  spec: PostPart
  /** Narrative: the part written for humans. Null when the post has no narrative. */
  narrative: PostPart | null
}

const NARRATIVE_HEADING = /^## Narrative\s*$/m

/** Split a post body into spec and narrative on the "## Narrative" heading. */
export function splitBody(content: string): { spec: string; narrative: string | null } {
  const m = NARRATIVE_HEADING.exec(content)
  if (!m) return { spec: content.trim(), narrative: null }
  return { spec: content.slice(0, m.index).trim(), narrative: content.slice(m.index).trim() }
}

function readPostFile(slug: string): { raw: string; data: Record<string, any>; content: string } {
  const raw = fs.readFileSync(path.join(POSTS_DIR, `${slug}.md`), 'utf8')
  const { data, content } = matter(raw)
  return { raw, data, content }
}

function toMeta(slug: string, data: Record<string, any>): PostMeta {
  const date = data.date instanceof Date ? data.date.toISOString().slice(0, 10) : String(data.date ?? '')
  return {
    slug,
    title: String(data.title ?? slug),
    date,
    description: String(data.description ?? ''),
  }
}

export function getPostSlugs(): string[] {
  if (!fs.existsSync(POSTS_DIR)) return []
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith('.md'))
    .map((f) => f.replace(/\.md$/, ''))
}

/** All posts, newest first. */
export function getAllPosts(): PostMeta[] {
  return getPostSlugs()
    .map((slug) => toMeta(slug, readPostFile(slug).data))
    .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0))
}

function render(markdown: string): PostPart {
  return { markdown, html: marked.parse(markdown, { async: false }) as string }
}

export function getPostBySlug(slug: string): Post | null {
  if (!getPostSlugs().includes(slug)) return null
  const { raw, data, content } = readPostFile(slug)
  const html = marked.parse(content, { async: false }) as string
  const parts = splitBody(content)
  return {
    ...toMeta(slug, data),
    html,
    markdown: raw,
    spec: render(parts.spec),
    narrative: parts.narrative === null ? null : render(parts.narrative),
  }
}

export function formatDate(date: string): string {
  const d = new Date(`${date}T00:00:00Z`)
  if (isNaN(d.getTime())) return date
  return d.toLocaleDateString('en-AU', { year: 'numeric', month: 'short', day: 'numeric', timeZone: 'UTC' })
}
