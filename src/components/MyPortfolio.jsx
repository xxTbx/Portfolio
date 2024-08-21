import data from "../data/index.json";
import styles from '../styles/portofolio.css';

export default function MyPortfolio() {
  return (
    <section className="portfolio-section" id="MyPortfolio">
      <div className="portfolio-container-box">
        <div className="portfolio-container">
          <p className="section-title">Projects</p>
          <h2 className="section-heading">My Portfolio</h2>
        </div>
        <a href="https://github.com/xxTbx" target="_blank" rel="noopener noreferrer">
          <button className="btn btn-github">
            Visit My GitHub
          </button>
        </a>

      </div>
      <div className="portfolio-section-container">
        {data?.portfolio?.map((item, index) => (
          <div key={index} className="portfolio-section-card">
            <div className="portfolio-section-img">
              <img src={item.src} alt="Placeholder" />
            </div>
            <div className="portfolio-section-card-content">
              <div className="div">
                <h3 className="portfolio-section-title">{item.title}</h3>
                <p className="text-md">{item.description}</p>
              </div>
              <p className="text-sm portfolio-link">
                <a href= {item.link} target="_blank" rel="noopener noreferrer">
                  View in Github
                </a>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
