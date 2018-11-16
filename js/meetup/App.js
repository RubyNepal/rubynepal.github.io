import React, { Component } from 'react';
import Avatar from 'react-avatar';
import meetups from './data';
import {
  TWITTER_URL,
  GITHUB_URL,
  INITIAL_EPISODE_ID,
  LEFT_ARROW_KEY,
  RIGHT_ARROW_KEY,
  AVATAR_SIZE
} from './constants';

function TwitterIcon(props) {
  if (props.twitter_username) {
    const twitter_profile = `${TWITTER_URL}/${props.twitter_username}`;
    return <a href={twitter_profile} target="_blank" rel='noopener noreferrer'><i className="fab fa-twitter speaker-twitter"></i></a>;
  } else {
    return false;
  }
}

function GithubIcon(props) {
  if (props.github_username) {
    const github_profile = `${GITHUB_URL}/${props.github_username}`;
    return <a href={github_profile} target="_blank" rel='noopener noreferrer'><i className="fab fa-github speaker-github"></i></a>;
  } else {
    return false;
  }
}

function SocialLinks(props) {
  if (props.session) {
    return (
      <p className="speaker-name speaker-social">
        <br/>
        <TwitterIcon twitter_username={props.session.twitter_username}/> &nbsp;&nbsp;
        <GithubIcon github_username={props.session.github_username}/>
      </p>);
  }
}

function SlideAndVideo(props) {
  const slides_link =  props.session.slides_link;
  const video_link =  props.session.video_link;
  const demo_link =  props.session.demo_link;
  if (props.session && (slides_link || video_link || demo_link)) {
    return (<div className="slide-and-video">
      {slides_link && <a href={slides_link} target="_blank" rel='noopener noreferrer'><i className="fas fa-sliders-h"></i>  Slide</a>} &nbsp;&nbsp;
      {video_link && <a href={video_link} target="_blank" rel='noopener noreferrer'><i className="fab fa-youtube"></i>  Video</a>} &nbsp;&nbsp;
      {demo_link && <a href={demo_link} target="_blank" rel='noopener noreferrer'><i className="fas fa-laptop"></i>  Demo</a>}
    </div>);
  } else {
    return false;
  }
}

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedEpisode: this.currentEpisode(),
      firstEpisode: INITIAL_EPISODE_ID,
      messageForNotFound: '',
      isScrolled: false
    };
    this.section = React.createRef();
  }

  handleKeyUp = (event) => {
    if (event.keyCode === LEFT_ARROW_KEY) {
      return this.onStepChange('previous');
    } else if (event.keyCode === RIGHT_ARROW_KEY) {
      return this.onStepChange('next');
    } else {
      return false;
    }
  };

  currentEpisode = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const paramsEpisodeId = urlParams.has('episode') ? parseInt(urlParams.get('episode')) : null;
    if (paramsEpisodeId >= INITIAL_EPISODE_ID && paramsEpisodeId <= this.totalEpisode()) {
      return paramsEpisodeId;
    } else {
      return this.totalEpisode();
    }
  };

  totalEpisode = () => {
    return meetups.length;
  };

  urlWithEpisode = () => {
    window.history.pushState('', '', `/meetup/?episode=${this.state.selectedEpisode}`);
  };

  onStepChange = (step) => {
    switch (step) {
      case 'next':
        if (this.state.selectedEpisode === this.totalEpisode()) {
          this.setState({ messageForNotFound: 'New meetup information coming soon!'});
          setTimeout(() => {
            this.setState({ messageForNotFound: ''});
          }, 3000);
          return false;
        }
        this.setState({ selectedEpisode: this.state.selectedEpisode + 1 });
        this.urlWithEpisode();
        break;
      case 'previous':
        if (this.state.selectedEpisode === this.state.firstEpisode) {
          this.setState({ messageForNotFound: 'No previous meetup. Seems, we started meetup from here!'});
          setTimeout(() => {
            this.setState({ messageForNotFound: ''});
          }, 3000);
          return false;
        }
        this.setState({ selectedEpisode: this.state.selectedEpisode - 1 });
        this.urlWithEpisode();
        break;
      default:
        return false;
    }
  };

  renderImage(session) {
    const twitter_username = session.twitter_username;

    if (twitter_username) {
      const avatar_url = `https://avatar-redirect.appspot.com/twitter/${twitter_username}`;
      return <img src={avatar_url} alt={session.speaker} height={AVATAR_SIZE} width={AVATAR_SIZE}/>;
    } else {
      return <Avatar name={session.speaker} size={AVATAR_SIZE} />;
    }
  }

  componentDidMount() {
    this.urlWithEpisode();
    document.addEventListener('keyup', this.handleKeyUp);
    window.addEventListener('scroll', () => {
      if (pageYOffset > 50) {
        this.setState({ isScrolled: true });
      } else {
        this.setState({ isScrolled: false });
      }
    });
  }

  render() {
    return (
      <div onKeyUp={this.handleKeyUp}>
        {meetups.filter(meetup => meetup.episode === this.state.selectedEpisode).map(meetup =>
          <section className={this.state.isScrolled ? 'pdb-50' : 'pdb-50 pdt-50'} key={meetup.episode} ref={this.section}>
            <div className="column panel-meetup">
              <div className="meetup-content">
                <h1 className="meetup-name">{meetup.title}</h1>
                <p className="meetup-episode">/Episode {meetup.episode}, {meetup.date}</p>
                <span className="meetup-time">
                  {meetup.start_time} - {meetup.end_time}
                </span>
                <h2 className="meetup-venue">{meetup.venue_sponsor.name}</h2>
                <p className="meetup-address">{meetup.address}</p>
                <strong>
                  <a href="javascript:void(0)"
                    className="see-all-meetup rnw-link"
                    onClick={() => this.onStepChange('previous')}
                  ><i className="fas fa-arrow-left"></i>
                  </a>
                  &nbsp;&nbsp;&nbsp;
                  <a href="javascript:void(0)"
                    className="see-all-meetup rnw-link"
                    onClick={() => this.onStepChange('next')}
                  >
                    <i className="fas fa-arrow-right"></i>
                  </a>
                </strong>
                {this.state.messageForNotFound &&
                <p className="rnw-link">
                  {this.state.messageForNotFound}
                </p>}
              </div>
            </div>
            <div className="column panel-schedule">
              <ul className="sessions">
                {meetup.sessions.map(session =>
                  <li className="session" key={session.id}>
                    <h3 className="session-number">session #{session.id}</h3>
                    <hr className="session-splitter"/>
                    <h2 className="session-title">{session.title}</h2>
                    <p className="session-description">
                      {session.description}
                    </p>
                    <ol className="speakers session-speaker">
                      <li className="speaker">
                        {this.renderImage(session)}
                        <h2 className="speaker-name">{session.speaker}</h2>
                        <p className="speaker-designation-and-workplace">
                          {session.designation}
                        </p>
                        <SlideAndVideo session={session} />
                        <SocialLinks session={session} />
                      </li>
                    </ol>
                  </li>
                )}
              </ul>
              <div className="panel-sponsors-and-supporters">
                <hr className="sponsors-and-supporters-splitter"/>
                <h2 className="sponsors-and-supporters-heading">Venue Sponsor</h2>
                <ul className="sponsors">
                  <li className="sponsor">
                    <img className="sponsor-logo" src={meetup.venue_sponsor.logo}
                      alt={meetup.venue_sponsor.name}/>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        )}
      </div>
    );
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyUp);
  }
}

export default App;
