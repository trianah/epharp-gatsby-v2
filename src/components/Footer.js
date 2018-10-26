import React from "react";
//import Link from 'gatsby-link'
import Icon from "./Icon";
import { ICONS } from "./constants";

//import github from '../img/github-icon.svg'
//import logo from '../img/emmanuel-padilla-holguin-logo.svg'

const Footer = () => (
  <footer className="c-footer l-footer">
    <div className="c-footer__upper">
      <div className="c-footer__upper-left">
        {/* <ul className="u-h-list">
          <li>Spanish</li>
          <li>English</li>
        </ul> */}
      </div>
      <div className="c-footer__upper-right">
        <div>
          <p>Stream</p>
          <ul className="u-h-list">
            <li>
              <a
                href="https://open.spotify.com/artist/5H7OgMO0mBCVfKB7MMfMqy"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon icon={ICONS.SPOTIFY} />
              </a>
            </li>
            <li>
              <a
                className=""
                href="https://itunes.apple.com/us/artist/emmanuel-padilla-holgu%C3%ADn/1264614755"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon icon={ICONS.APPLE} />
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p>Connect</p>
          <ul className="u-h-list">
            <li>
              <a
                className=""
                href="https://www.facebook.com/epharp/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon icon={ICONS.FACEBOOK} />
              </a>
            </li>
            <li>
              <a
                className=""
                href="https://www.instagram.com/emmanuelph1993/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon icon={ICONS.INSTAGRAM} />
              </a>
            </li>
            <li>
              <a
                className=""
                href="https://www.youtube.com/user/1993eph/videos"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon icon={ICONS.YOUTUBE} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
