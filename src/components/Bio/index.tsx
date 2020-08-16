import * as React from 'react';
import { FontAwesomeIcon as Fa } from '@fortawesome/react-fontawesome';
import { faUserCircle, faAt, faMapMarkerAlt, faLink, faAddressCard, faRss, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedin, faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';

import './bio.scss';
import config from '../../../_config';

const Bio = () => {
  const { comment, name, company, location, email, website, linkedin, facebook, instagram, github, youtube, about, contact } = config;

  return (
    <div className="bio">
      {!comment ? null : <span className="comment">{comment}</span>}
      
      {!name ? null : (
        <div className="bio-item name">
          <div className="icon-wrap">
            <Fa icon={faUserCircle} />
          </div>
          <span>{name}</span>
        </div>
      )}

      {!company ? null : (
        <div className="bio-item company">
          <div className="icon-wrap">
            <Fa icon={faAddressCard} />
          </div>
          <span>{company}</span>
        </div>
      )}

      {!location ? null : (
        <div className="bio-item location">
          <div className="icon-wrap">
            <Fa icon={faMapMarkerAlt} />
          </div>
          <span>{location}</span>
        </div>
      )}

      {!website ? null : (
        <div className="bio-item website">
          <div className="icon-wrap">
            <Fa icon={faLink} />
          </div>

          <a href={website} target="_blank" rel="noopener noreferrer">
            {website}
          </a>
        </div>
      )}


      {!about ? null : (
        <div className="bio-item website">
          <div className="icon-wrap"><Fa icon={faUserCircle} /></div>
          <a href="../about/">{about}</a>
        </div>
      )}
      {!contact ? null : (
        <div className="bio-item website">
          <div className="icon-wrap"><Fa icon={faAt} /></div>
          <a href="../contact/">{contact}</a>
        </div>
      )}

      <div className="social">
        {!linkedin ? null : (
          <a href={linkedin} target="_blank" rel="noopener noreferrer">
            <Fa icon={faLinkedin} className="linkedin" />
          </a>
        )}

        {!facebook ? null : (
          <a href={facebook} target="_blank" rel="noopener noreferrer">
            <Fa icon={faFacebook} className="facebook" />
          </a>
        )}
        {!instagram ? null : (
          <a href={instagram} target="_blank" rel="noopener noreferrer">
            <Fa icon={faInstagram} className="instagram" />
          </a>
        )}
        {!email ? null : (
          <a href={email} target="_blank" rel="noopener noreferrer">
            <Fa icon={faEnvelope} className="email" />
          </a>
        )}
        {!github ? null : (
          <a href={github} target="_blank" rel="noopener noreferrer">
            <Fa icon={faGithub} className="github" />
          </a>
        )}
        {!youtube ? null : (
          <a href={youtube} target="_blank" rel="noopener noreferrer">
            <Fa icon={faYoutube} className="youtube" />
          </a>
        )}
        <a href={`${config.siteUrl}/rss`} target="_blank" rel="noopener noreferrer">
          <Fa icon={faRss} className="rss" />
        </a>
      </div>
    </div>
  );
};

export default Bio;
