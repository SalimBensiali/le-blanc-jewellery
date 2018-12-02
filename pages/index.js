import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from "react-helmet"
import { config } from 'config'
import facebookLogo from 'assets/flogo_RGB_HEX-72.png';
import instagramLogo from 'assets/IG_Glyph_Fill.jpg';
import logo from 'assets/logo.png';
import '../css/styles';

export default class Index extends React.Component {
  render () {
    return (
      <div className="hero">
        <Helmet
          title={config.siteTitle}
          meta={[
            {"name": "description", "content": "Sample"},
            {"name": "keywords", "content": "sample, something"},
          ]}
        />
        <h1>Coming soon</h1>
        <img
          className="brand-logo"
          src={logo}
          alt="Le blanc jewellery logo"/>
        <ul className="links-container">
          <li>
            <a
              className="link social-link"
              href="https://www.facebook.com/leblancjewellery"
              alt="Find us on facebook">
                <img
                  className="social-logo"
                  src={facebookLogo}
                  alt="Find us on facebook" />
                leblancjewellery
            </a>
          </li>
          <li>
            <a
              className="link social-link"
              href="https://www.instagram.com/leblanc_jewellery"
              alt="Find us on instagram">
                <img
                  className="social-logo"
                  src={instagramLogo}
                  alt="Find us on instagram" />
                leblanc_jewellery
            </a>
          </li>
        </ul>
        <div>
          Contact:
          {` `}
          <a
            className="link"
            href="mailto:info@leblancjewellery.com.au">
              info@leblancjewellery.com.au
          </a>
        </div>
      </div>
    )
  }
}
