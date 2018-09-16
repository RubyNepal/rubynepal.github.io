import React, { Component } from 'react';
import Avatar from 'react-avatar';
import meetups from './data';

const twitter_url = 'https://twitter.com';
const github_url = 'https://github.com';

function TwitterIcon(props) {
  if (props.twitter_username) {
    const twitter_profile = `${twitter_url}/${props.twitter_username}`;
    return <a href={twitter_profile} target="_blank"><i className="fab fa-twitter speaker-twitter"></i></a>
  } else {
    return false;
  }
}

function GithubIcon(props) {
  if (props.github_username) {
    const github_profile = `${github_url}/${props.github_username}`;
    return <a href={github_profile} target="_blank"><i className="fab fa-github speaker-github"></i></a>;
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
  const slide_link =  props.session.slide_link;
  const video_link =  props.session.video_link;
  const demo_link =  props.session.demo_link;
  if (props.session && (slide_link || video_link || demo_link)) {
    return (<div className="slide-and-video">
      {slide_link && <a href={slide_link} target="_blank"><i className="fas fa-sliders-h"></i>  Slide</a>} &nbsp;&nbsp;
      {video_link && <a href={video_link} target="_blank"><i className="fab fa-youtube"></i>  Video</a>} &nbsp;&nbsp;
      {demo_link && <a href={demo_link} target="_blank"><i className="fas fa-laptop"></i>  Demo</a>}
    </div>);
  } else {
    return false;
  }
}

class App extends Component {

  constructor(props) {
    super(props);

    this.state ={
      selectedEpisode: this.latestEpisode(),
      firstEpisode: 0,
      messageForNotFound: '',
    };

    this.onStepChange = this.onStepChange.bind(this);
    this.latestEpisode = this.latestEpisode.bind(this);
  }

  latestEpisode() {
    return meetups.length - 1;
  }

  onStepChange(step) {
    switch(step) {
      case 'next':
        if (this.state.selectedEpisode === this.latestEpisode()) {
          this.setState({ messageForNotFound: 'New meetup information coming soon!'});
          setTimeout(() => {
            this.setState({ messageForNotFound: ''});
          }, 3000);
          return false;
        }
        this.setState({ selectedEpisode: this.state.selectedEpisode + 1 });
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
        break;
      default:
        return false;
    }
  }

  renderImage(session) {
    const twitter_username = session.twitter_username;
    const avatar_size = '73';

    if (twitter_username) {
      const avatar_url = `https://avatar-redirect.appspot.com/twitter/${twitter_username}`;
      return <img src={avatar_url} alt={session.speaker} height={avatar_size} width={avatar_size}/>
    } else {
      return <Avatar name={session.speaker} size={avatar_size} />
    }
  }

  handleScroll() {

  }

  render() {
    return (
      <div>
        {meetups.filter(meetup => meetup.episode === this.state.selectedEpisode).map(meetup =>
          <section className="pdt-50 pdb-50" key={meetup.episode}>
            <div className="column panel-meetup">
              <div className="meetup">
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
}

export default App;
