// Main component that renders all the other components

import './styles.css'
import React, {useState} from 'react'
import cabbage from './assets/image1.jpeg'
import mango from './assets/image2.jpeg'
import fig from './assets/image3.jpeg'
import gaze from './assets/image4.jpeg'
import peach from './assets/image5.jpeg'
import avocado from './assets/image6.jpeg'

// New component for our images:
const images = [cabbage, mango, fig, gaze, peach, avocado]

// Loading component
const Loading = ({calculatedWidth}) => (
  <aside>
    <div className="loading-bar">
      <label htmlFor="images-loaded">
        Loading all your favourite images...
      </label>
      <progress id="images-loaded" max="100" value={calculatedWidth}></progress>
    </div>
  </aside>
)

// App component
const App = () => {
  const [currentImage, setCurrentImage] = useState(0)
  const [numLoaded, setNumLoaded] = useState(0)

  const handleClick = () => {
    const length = images.length - 1
    setCurrentImage((currentImage) =>
      currentImage < length ? currentImage + 1 : 0
    )
  }

  const handleImageLoad = () => setNumLoaded((numLoaded) => numLoaded + 1)

  const handleThumbnailClick = (index) => setCurrentImage(index)

  return (
    <section>
      <header>
        <h1>Zesty</h1>
        <h2>
          A photography project <br /> by Ella Fieldling
        </h2>
      </header>

      <figure>
        {numLoaded < images.length && (
          <Loading calculatedWidth={(numLoaded / images.length) * 100} />
        )}

        {images.map((imageURL, index) => (
          <img
            alt=""
            key={imageURL}
            src={imageURL}
            onClick={handleClick}
            onLoad={handleImageLoad}
            className={currentImage === index ? 'display' : 'hide'}
          />
        ))}
      </figure>

      <div className="thumbnail-container">
        <div className="thumbnails">
          {images.map((imageURL, index) => (
            <img
              alt=""
              key={imageURL}
              src={imageURL}
              onClick={() => handleThumbnailClick(index)}
              className={`thumbnail-item ${
                currentImage === index ? 'active' : ''
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default App
