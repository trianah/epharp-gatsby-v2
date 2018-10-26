import React from "react";
import PropTypes from "prop-types";
import { AlbumsPageTemplate } from "../../templates/albums-page";

const AlbumsPagePreview = () => {
  //const entryAlbums = entry.getIn(['data', 'albums'])
  //const albums = entryAlbums ? entryAlbums.toJS() : [];

  return (
    <AlbumsPageTemplate
    //title={entry.getIn(["data", "title"])}
    //albums={albums}
    />
  );
};

// AlbumsPagePreview.propTypes = {
//   entry: PropTypes.shape({
//     getIn: PropTypes.func
//   }),
//   getAsset: PropTypes.func
// };

export default AlbumsPagePreview;
