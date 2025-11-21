import { useState } from 'react'
import './Writing.css'

interface Article {
  id: number
  title: string
  subtitle?: string
  date: string
  readTime: string
  category: string
  excerpt: string
  content: string[]
}

const articles: Article[] = [
  {
    id: 1,
    title: 'On the Necessity of Empty Space',
    subtitle: 'Why restraint is the most difficult—and essential—design principle',
    date: 'October 2024',
    readTime: '6 min',
    category: 'Essay',
    excerpt: 'In an era of abundance, the hardest thing to design is absence. Yet it is precisely this absence—this generous allowance of empty space—that allows a room to breathe, and its inhabitants to think.',
    content: [
      'I once had a client who wanted to "fill" every corner of their apartment. They saw empty space as wasted potential, a canvas begging to be covered. It took several conversations—and eventually, a visit to a museum—for them to understand that the space between objects is as important as the objects themselves.',
      'In Japanese aesthetics, there is a concept called "ma"—the void, the interval, the pause. It is not merely absence, but an active presence. In architecture and design, ma is the space that gives definition to form, the silence that makes music possible.',
      'When I design a room, I am as concerned with what I leave out as what I include. Every object must earn its place. Every surface does not need decoration. Every wall does not require art. The restraint is the art.',
      'This is not minimalism for the sake of austerity. It is about creating room for life to unfold. A table is not just a surface for objects—it is a place for conversation, for work, for solitary meals. If it is cluttered with unnecessary things, it cannot serve its true purpose.',
      'Empty space is generous. It gives the eye rest, the mind clarity. It allows light to move through a room unobstructed. It makes the objects that remain feel more significant, more intentional.',
      'The hardest part of my job is convincing clients that less is not a compromise—it is a luxury. In a world that constantly demands more, choosing restraint is an act of resistance.'
    ]
  },
  {
    id: 2,
    title: 'In Defense of Imperfection',
    subtitle: 'Why handmade objects belong in contemporary interiors',
    date: 'August 2024',
    readTime: '5 min',
    category: 'Essay',
    excerpt: 'Machine precision has its place, but the irregular rim of a hand-thrown bowl tells a story that a factory-made plate never can.',
    content: [
      'I keep a ceramic cup on my desk that is slightly lopsided. The glaze pooled unevenly on one side during firing, creating a darker patch near the handle. It was made by a potter in upstate New York, and I bought it directly from her studio five years ago.',
      'Every time I use it, I am aware of its maker. The slight weight imbalance, the way the rim feels against my lip—these imperfections are evidence of a human hand. They make the object feel alive.',
      'We live in an age of algorithmic perfection. Every surface is rendered smooth, every edge machined to exactness. This precision is impressive, but it is also cold. It erases the trace of its making.',
      'When I specify furniture or objects for a client, I look for pieces that carry this trace. A walnut table with visible knots. Linen that wrinkles beautifully. Ceramics with slight variations in color. These are not flaws—they are signatures.',
      'The Japanese have a term for this: wabi-sabi, the acceptance of transience and imperfection. It is an aesthetic philosophy rooted in the idea that beauty is incomplete, impermanent, imperfect.',
      'I am not advocating for sloppiness or poor craftsmanship. The imperfections I admire are the result of skilled hands and honest materials. They are evidence of care, not carelessness.',
      'In an interior, these objects become anchors. They slow you down, invite you to notice. They age gracefully, developing patinas and wear patterns that tell the story of their use. A factory-made object, by contrast, simply degrades.'
    ]
  },
  {
    id: 3,
    title: 'The Tyranny of Trends',
    date: 'June 2024',
    readTime: '4 min',
    category: 'Observation',
    excerpt: 'On why designing for the present moment ensures obsolescence, and the value of long-term thinking in interior design.',
    content: [
      'A prospective client recently sent me a folder of Pinterest images. Every room looked the same: arched doorways, terrazzo floors, bouclé furniture, and an abundance of dried pampas grass. "This is the aesthetic I want," they said.',
      'I asked them a question: "Will you still love this in five years?"',
      'Design trends are like fashion trends—they promise relevance but deliver obsolescence. What feels current today will feel dated tomorrow. A room designed to look "on trend" has a built-in expiration date.',
      'I am not against contemporary design. I am against designing for the algorithm, for the Instagram feed, for the shallow validation of strangers. These spaces may photograph well, but they rarely feel good to live in.',
      'The interiors I admire most are the ones that resist categorization. They are personal, idiosyncratic, and impossible to date. They draw from multiple eras and influences, but they cohere because they reflect a singular point of view.',
      'My advice to clients is always the same: choose things you genuinely love, not things you think you should love. Collect slowly. Let your space evolve. Trust that a room built on considered choices rather than trends will remain relevant indefinitely.',
      'Timelessness is not about avoiding the contemporary. It is about choosing things for reasons deeper than their momentary popularity.'
    ]
  }
]

function Writing() {
  const [selectedArticle, setSelectedArticle] = useState<number | null>(null)

  const selectedArticleData = articles.find(a => a.id === selectedArticle)

  return (
    <main className="writing-page">
      <div className="writing-container">
        {/* Page Header */}
        <header className="writing-header">
          <h1>Writing</h1>
          <p className="writing-intro">
            Occasional essays on design philosophy, materiality, and the rituals of living.
          </p>
        </header>

        {/* Articles List */}
        <div className="articles-list">
          {articles.map((article) => (
            <article
              key={article.id}
              className="article-preview"
              onClick={() => setSelectedArticle(article.id)}
            >
              <div className="article-preview-header">
                <span className="article-category small-caps">{article.category}</span>
                <span className="article-meta-separator">—</span>
                <span className="article-date caption">{article.date}</span>
                <span className="article-meta-separator">—</span>
                <span className="article-read-time caption">{article.readTime} read</span>
              </div>

              <h2 className="article-title">{article.title}</h2>
              {article.subtitle && (
                <h3 className="article-subtitle">{article.subtitle}</h3>
              )}
              <p className="article-excerpt">{article.excerpt}</p>

              <button className="read-more-button">
                <span className="small-caps">Read Article</span>
                <span className="arrow">→</span>
              </button>
            </article>
          ))}
        </div>

        {/* Full Article View */}
        {selectedArticle && selectedArticleData && (
          <div className="article-overlay" onClick={() => setSelectedArticle(null)}>
            <article className="article-full" onClick={(e) => e.stopPropagation()}>
              <button
                className="article-close"
                onClick={() => setSelectedArticle(null)}
                aria-label="Close article"
              >
                <span className="close-icon">×</span>
              </button>

              <header className="article-full-header">
                <div className="article-full-meta">
                  <span className="small-caps">{selectedArticleData.category}</span>
                  <span className="meta-separator">—</span>
                  <span className="caption">{selectedArticleData.date}</span>
                  <span className="meta-separator">—</span>
                  <span className="caption">{selectedArticleData.readTime} read</span>
                </div>

                <h1 className="article-full-title">{selectedArticleData.title}</h1>
                {selectedArticleData.subtitle && (
                  <h2 className="article-full-subtitle">{selectedArticleData.subtitle}</h2>
                )}
              </header>

              <div className="article-full-content">
                {selectedArticleData.content.map((paragraph, idx) => (
                  <p key={idx} className="article-paragraph">
                    {paragraph}
                  </p>
                ))}
              </div>

              <footer className="article-full-footer">
                <div className="article-footer-line" />
                <p className="caption">Matthew Esposito, {selectedArticleData.date}</p>
              </footer>
            </article>
          </div>
        )}
      </div>
    </main>
  )
}

export default Writing
