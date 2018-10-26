import React from "react";
import PropTypes from "prop-types";
import Icon from "../components/Icon";
import { ICONS } from "../components/constants";

const Albums = ({ albums }) => (
  <div>
    {/* {albums.map(album => ( */}
    <div className="c-album">
      <div className="c-album__img-wrap">
        <img
          className="c-album__image"
          src="/img/obra-completa-para-arpa-de-mario-ruiz-armengol.jpg"
          alt="Album Obra completa para Arpa de Mario Ruiz Armengol"
        />
      </div>
      <div className="c-album__info-wrap">
        <h2 className="c-album__title">
          Obra completa para arpa de Mario Ruiz Armengol
          <span className="c-album__year">(2017)</span>
        </h2>
        <p>
          The entire harp catalogue by Mexican composer Mario Ruiz Armengol.
        </p>
        <p>Available on:</p>
        <ul className="c-album__streaming">
          <li className="c-album__streaming-item">
            <a
              href="https://open.spotify.com/artist/5H7OgMO0mBCVfKB7MMfMqy"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon
                icon={ICONS.SPOTIFYTEXT}
                width={100}
                height={35}
                viewBoxW={559}
                viewBoxH={168}
              />
            </a>
          </li>
          <li className="c-album__streaming-item">
            <a
              href="https://itunes.apple.com/mx/album/obra-completa-para-arpa-de-mario-ruiz-armengol/1264614745"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon
                icon={ICONS.APPLEMUSIC}
                width={100}
                height={35}
                viewBoxW={530}
                viewBoxH={150}
              />
            </a>
          </li>
          <li className="c-album__streaming-item">
            <a
              href="https://www.deezer.com/es/album/45354471"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon
                icon={ICONS.DEEZER}
                width={100}
                height={35}
                viewBoxW={300}
                viewBoxH={66}
              />
            </a>
          </li>
          <li className="c-album__streaming-item">
            <a
              href="https://play.google.com/music/preview/Bpesmw3agetje76l35jcu5g4yo4?play=1&u=0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon
                icon={ICONS.GOOGLEPLAY}
                width={170}
                height={35}
                viewBoxW={190}
                viewBoxH={26}
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className="c-album">
      <div className="c-album__img-wrap">
        <img
          className="c-album__image"
          src="/img/cielo-rojo-mexican-harp-music-from-three-centuries.jpg"
          alt="Tres siglos de música mexicana para Arpa"
        />
      </div>
      <div className="c-album__info-wrap">
        <h2 className="c-album__title">
          Cielo rojo: Mexican Harp Music from Three Centuries
          <span className="c-album__year">(2015)</span>
        </h2>
        <p>
          Mexican harp music from mexican composers Gerardo Tamez, José Enríque
          Guzmán, Julio Morales, Francisco Cortés Álvarez, and Arturo Márquez.
        </p>
        <p>
          Buy the cd{" "}
          <a
            href="https://www.iumusicmarketplace.com/ProductDetails.asp?ProductCode=000014"
            rel="noopener"
            className="styled-link"
          >
            here
          </a>
          .
        </p>
      </div>
    </div>
    {/* ))} */}
  </div>
);

Albums.propTypes = {
  albums: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.image,
      title: PropTypes.string
    })
  )
};

export default Albums;
