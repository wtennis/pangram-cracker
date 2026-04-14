import './Banner.css';

function Banner({ banner }) {
  return (
    <div className="banner-box">
      <h2 className="banner-text">{banner}</h2>
    </div>
  )
}

export default Banner;
