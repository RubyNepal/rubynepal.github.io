import React, { Component } from 'react';
import TalkItem from './talkItem';


class TalkSuggestions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch('https://api.github.com/repos/RubyNepal/rorh/issues?state=open&per_page=4')
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <div className="suggestion-intro card">
            <p> Do you want to give a Talk at the Meetup or Do you have any Suggestion Topics to talk about?</p>
            <p> Please, feel free to open up an issue at <a href="https://github.com/RubyNepal/rorh/issues" target="_blank" rel="noopener noreferrer">Github</a>
            </p>
          </div>
          <ul className="talk-items">
            {items.map(item => (
              <TalkItem key={item.id} title={item.title} body={item.body} user={item.user.login} avatarUrl={item.user.avatar_url} />
            ))}
          </ul>
        </div>
      );
    }
  }
}

export default TalkSuggestions;
