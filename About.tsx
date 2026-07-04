import './About.css';

export default function About() {
  const stats = [
    { number: '25+', label: 'Years of Excellence' },
    { number: '150+', label: 'Designer Brands' },
    { number: '50K+', label: 'Happy Customers' },
    { number: '99%', label: 'Satisfaction Rate' }
  ];

  const team = [
    {
      name: 'Alexandra Sterling',
      role: 'Founder & CEO',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Marcus Chen',
      role: 'Creative Director',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Isabella Noir',
      role: 'Head of Design',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'David Laurent',
      role: 'Master Tailor',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="container">
          <h1>Our Story</h1>
          <p>
            Since 2001, NovaWear has been at the forefront of luxury fashion,
            curating exceptional pieces that define modern elegance.
          </p>
        </div>
      </section>

      <section className="about-section">
        <div className="container">
          <div className="about-grid">
            <div className="about-image">
              <img
                src="https://images.pexels.com/photos/336372/pexels-photo-336372.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="NovaWear flagship store"
              />
            </div>
            <div className="about-content">
              <h2>Crafting Luxury Since 2001</h2>
              <p>
                NovaWear was born from a passion for exceptional craftsmanship and a vision
                to bring world-class luxury fashion to discerning clients worldwide. What
                started as a boutique atelier in Beverly Hills has grown into a globally
                recognized destination for premium fashion.
              </p>
              <p>
                Our philosophy is simple: every piece should be a masterpiece. We work with
                the finest artisans and most prestigious fashion houses to curate collections
                that embody sophistication, quality, and timeless style.
              </p>
              <div className="about-features">
                <div className="about-feature">
                  <div className="about-feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4>Premium Quality</h4>
                    <p>Only the finest materials and craftsmanship</p>
                  </div>
                </div>
                <div className="about-feature">
                  <div className="about-feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 6v6l4 2" />
                    </svg>
                  </div>
                  <div>
                    <h4>Timeless Style</h4>
                    <p>Classic designs that transcend trends</p>
                  </div>
                </div>
                <div className="about-feature">
                  <div className="about-feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                  </div>
                  <div>
                    <h4>Passionate Service</h4>
                    <p>Dedicated to exceeding expectations</p>
                  </div>
                </div>
                <div className="about-feature">
                  <div className="about-feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    </svg>
                  </div>
                  <div>
                    <h4>Global Reach</h4>
                    <p>Delivering luxury worldwide</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-stats">
        <div className="container">
          <div className="about-stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="about-stat">
                <div className="about-stat-number">{stat.number}</div>
                <div className="about-stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="container">
          <div className="about-grid reverse">
            <div className="about-image">
              <img
                src="https://images.pexels.com/photos/1656666/pexels-photo-1656666.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Sustainable fashion"
              />
            </div>
            <div className="about-content">
              <h2>Our Commitment to Sustainability</h2>
              <p>
                At NovaWear, we believe luxury and responsibility go hand in hand.
                We're committed to sustainable practices throughout our supply chain,
                from ethically sourced materials to eco-friendly packaging.
              </p>
              <p>
                Our partnerships with artisan communities around the world ensure that
                traditional craftsmanship thrives while providing fair wages and
                safe working conditions. Every purchase supports these communities
                and helps preserve centuries-old techniques.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-team">
        <div className="container">
          <div className="section-header">
            <h2>Meet Our Team</h2>
            <p>The passionate individuals behind NovaWear's success</p>
          </div>
          <div className="team-grid">
            {team.map((member, index) => (
              <div key={index} className="team-card">
                <div className="team-card-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <h4>{member.name}</h4>
                <p>{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
