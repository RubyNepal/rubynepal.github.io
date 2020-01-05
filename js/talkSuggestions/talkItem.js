import React from 'react';
import PropTypes from 'prop-types';

const TalkItem = (props) => {
  const {
    title,
    body,
    user,
    avatarUrl,
    url
  } = props;

  const renderImage = () => {
    return <img src={avatarUrl} alt="Placeholder image" />;
  };

  return (
    <li className="card talk-item">
      <header className="card-header">
        <p className="card-header-title text-truncate">
          {title}
        </p>
      </header>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <div className="comment-message content">{ body }</div>
            <div className="comment-message content">Issued by: <b>{ user }</b></div>
            <div className="comment-message content">Issue Link: <a href={url} target="_blank" rel="noopener noreferrer">Link</a></div>
          </div>
          <div className="media-right">
            <figure className="image is-96x96">
              { renderImage() }
            </figure>
          </div>
        </div>
      </div>
    </li>
  );
};

TalkItem.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  user: PropTypes.string,
  avatarUrl: PropTypes.string,
  url: PropTypes.string
};

export default TalkItem;
