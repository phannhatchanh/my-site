import * as React from 'react';
import { Link } from 'gatsby'
import { FontAwesomeIcon as Fa } from '@fortawesome/react-fontawesome';
import { faUserCircle, faAt, faMapMarkerAlt, faIdCard, faBookReader, faLink, faAddressCard, faRss, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedin, faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';

import './bio.scss';
import config from '../../../_config';

const Bio = () => {
  const { comment, name, company, country, email, website, linkedin, facebook, instagram, github, youtube, about, contact, reading, resume } = config;

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

      {!country ? null : (
        <div className="bio-item country">
          <div className="icon-wrap">
            <Fa icon={faMapMarkerAlt} />
          </div>
          <span>{country}</span>
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
        <div className="bio-item">
          <div className="icon-wrap"><Fa icon={faUserCircle} color="gray" /></div>
          <Link to="/about/" activeClassName="active">{about}</Link>
        </div>
      )}
      
      {!contact ? null : (
        <div className="bio-item">
          <div className="icon-wrap"><Fa icon={faAt} color="gray" /></div>
          <Link to="/contact/" activeClassName="active">{contact}</Link>
        </div>
      )}
      
      {!reading ? null : (
        <div className="bio-item">
          <div className="icon-wrap"><Fa icon={faBookReader} color="gray" /></div>
          <Link to="/reading/" activeClassName="active">{reading}</Link>
        </div>
      )}

      {!resume ? null : (
        <div className="bio-item">
          <div className="icon-wrap"><Fa icon={faIdCard} color="gray" /></div>
          <Link to="/resume/" activeClassName="active">{resume}</Link>
        </div>
      )}

      <div className="social">
        {!linkedin ? null : (
          <a href={linkedin} target="_blank" rel="noopener noreferrer">
            <Fa icon={faLinkedin} color="gray" className="linkedin" />
          </a>
        )}

        {!facebook ? null : (
          <a href={facebook} target="_blank" rel="noopener noreferrer">
            <Fa icon={faFacebook} color="gray" className="facebook" />
          </a>
        )}
        {!instagram ? null : (
          <a href={instagram} target="_blank" rel="noopener noreferrer">
            <Fa icon={faInstagram} color="gray" className="instagram" />
          </a>
        )}
        {!email ? null : (
          <a href={email} target="_blank" rel="noopener noreferrer">
            <Fa icon={faEnvelope} color="gray" className="email" />
          </a>
        )}
        {!github ? null : (
          <a href={github} target="_blank" rel="noopener noreferrer">
            <Fa icon={faGithub} color="gray" className="github" />
          </a>
        )}
        {!youtube ? null : (
          <a href={youtube} target="_blank" rel="noopener noreferrer">
            <Fa icon={faYoutube} color="gray" className="youtube" />
          </a>
        )}
        <a href={`${config.siteUrl}/rss.xml`} target="_blank" rel="noopener noreferrer">
          <Fa icon={faRss} color="gray" className="rss" />
        </a>
      </div>
    </div>
  );
};

export default Bio;
