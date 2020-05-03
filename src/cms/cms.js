import CMS from "netlify-cms";

import AboutPagePreview from "./preview-templates/AboutPagePreview";
import BlogPostPreview from "./preview-templates/BlogPostPreview";
import ProductPagePreview from "./preview-templates/ProductPagePreview";
import EventsPagePreview from "./preview-templates/EventsPagePreview";
//import ScoresPagePreview from './preview-templates/ScoresPagePreview'
import AlbumsPagePreview from "./preview-templates/AlbumsPagePreview";
import PressPagePreview from "./preview-templates/PressPagePreview";
import ContactPagePreview from "./preview-templates/ContactPagePreview";

//import AcercaPagePreview from './preview-templates/es/AcercaPagePreview'
//import ContactoPagePreview from './preview-templates/es/ContactoPagePreview'

CMS.registerPreviewStyle("/styles.css");

CMS.registerPreviewTemplate("about", AboutPagePreview);
// CMS.registerPreviewTemplate("products", ProductPagePreview);
CMS.registerPreviewTemplate("events", EventsPagePreview);
CMS.registerPreviewTemplate("blog", BlogPostPreview);
//CMS.registerPreviewTemplate('scores', ScoresPagePreview)
CMS.registerPreviewTemplate("albums", AlbumsPagePreview);
CMS.registerPreviewTemplate("press", PressPagePreview);
CMS.registerPreviewTemplate("contact", ContactPagePreview);

//CMS.registerPreviewTemplate('acerca', AcercaPagePreview)
//CMS.registerPreviewTemplate('contacto', ContactoPagePreview)
