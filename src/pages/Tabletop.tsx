import './Tabletop.css'

interface TablewareItem {
  id: number
  name: string
  maker: string
  year: string
  description: string
  image: string
  notes?: string
}

const tablewareCollection: TablewareItem[] = [
  {
    id: 1,
    name: 'Ceramic Dinner Plate',
    maker: 'Jono Pandolfi',
    year: '2023',
    description: 'Hand-thrown stoneware with a matte off-white glaze. The irregular rim and subtle texture speak to the maker\'s hand.',
    image: '/website/images/tabletop-01.jpg',
    notes: 'Set of 8, in daily use'
  },
  {
    id: 2,
    name: 'Linen Napkins',
    maker: 'Rough Linen',
    year: '2022',
    description: 'Belgian linen in natural ecru. They soften with age and washing, developing an honest patina over time.',
    image: '/website/images/tabletop-02.jpg'
  },
  {
    id: 3,
    name: 'Water Carafe',
    maker: 'STUDIO PREPA',
    year: '2024',
    description: 'Mouth-blown glass with an intentionally asymmetrical form. Designed in Los Angeles.',
    image: '/website/images/tabletop-03.jpg',
    notes: 'Limited edition of 50'
  },
  {
    id: 4,
    name: 'Walnut Serving Board',
    maker: 'Erickson Woodworking',
    year: '2023',
    description: 'Solid American black walnut, finished with food-safe mineral oil. The wood grain is preserved in its natural state.',
    image: '/website/images/tabletop-04.jpg'
  },
  {
    id: 5,
    name: 'Silver Flatware',
    maker: 'Vintage Georg Jensen',
    year: '1960s',
    description: 'Bernadotte pattern. Found at an estate sale in Copenhagen. The weight and balance are unmatched.',
    image: '/website/images/tabletop-05.jpg',
    notes: 'Service for 6'
  },
  {
    id: 6,
    name: 'Sake Set',
    maker: 'Tokoname Pottery',
    year: '2021',
    description: 'Traditional Japanese ceramic work from the Aichi region. Unglazed exterior with a natural clay finish.',
    image: '/website/images/tabletop-06.jpg'
  }
]

function Tabletop() {
  return (
    <main className="tabletop-page">
      <div className="tabletop-container">
        {/* Page Header */}
        <header className="tabletop-header">
          <h1>Tabletop</h1>
          <div className="tabletop-intro">
            <p>
              A curated collection of objects for the table. Each piece is selected for
              its material honesty, craft, and ability to age gracefully. These are tools
              for living, not decorative gestures.
            </p>
            <p className="tabletop-philosophy caption">
              "The table is where we gather, converse, and share. Its objects should reflect
              this intimacy—made with intention, free of pretense."
            </p>
          </div>
        </header>

        {/* Collection Grid */}
        <div className="collection-grid">
          {tablewareCollection.map((item, index) => (
            <article key={item.id} className={`collection-item layout-${index % 4}`}>
              <div className="item-image-wrapper">
                <img src={item.image} alt={item.name} className="item-image" />
              </div>

              <div className="item-details">
                <h3 className="item-name">{item.name}</h3>
                <div className="item-meta">
                  <span className="item-maker">{item.maker}</span>
                  <span className="meta-separator">—</span>
                  <span className="item-year">{item.year}</span>
                </div>
                <p className="item-description">{item.description}</p>
                {item.notes && (
                  <p className="item-notes caption">{item.notes}</p>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* Philosophy Section */}
        <section className="tabletop-philosophy-section">
          <div className="philosophy-content">
            <h2>On Collecting</h2>
            <div className="philosophy-text">
              <p>
                My approach to tableware mirrors my approach to interiors: acquire slowly,
                choose objects that improve with use, and resist the urge to match. A table
                set with disparate yet harmonious pieces feels alive—a collection built over
                time, not purchased in a single transaction.
              </p>
              <p>
                I'm drawn to makers who honor their materials, who understand that perfection
                is less interesting than character. Handmade ceramics with slight variations,
                vintage silver with a soft patina, glassware that catches light unevenly—these
                imperfections are what make objects feel human.
              </p>
              <p>
                The ritual of setting a table should be as considered as the meal itself.
                It's an act of generosity, a way of saying: you matter, this moment matters.
              </p>
            </div>
          </div>

          <div className="philosophy-image">
            <img
              src="/website/images/tabletop-philosophy.jpg"
              alt="Table setting detail"
            />
            <p className="caption">Detail from a recent dinner, Brooklyn</p>
          </div>
        </section>
      </div>
    </main>
  )
}

export default Tabletop
