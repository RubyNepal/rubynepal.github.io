import React, { useState } from 'react';
import { IoCloseOutline } from 'react-icons/io5';
import ReactPlayer from 'react-player';

export default function Player(props) {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <span className="player">
      <a onClick={toggleModal}><i className="icon-youtube-play"></i>  Video</a>
      {
        modal ? (
          <section className="modal--bg">
            <div className="modal--align">
              <div className="modal--content">
                <IoCloseOutline
                  className="modal--close"
                  arial-label="Close modal"
                  onClick={toggleModal}
                />
                <div className="modal--video-align">
                  <div className='player-wrapper'>
                    <ReactPlayer
                      className='react-player'
                      url={props.session.video_link}
                      width={props.width}
                      height={props.height}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        ) : null}
    </span>
  );
}
