import React, { Component } from 'react';
import TalkItem from './talkItem';
import parse from 'parse-link-header';

class TalkSuggestions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstLink: 'https://api.github.com/repos/RubyNepal/rorh/issues?state=open&per_page=4&page=1',
      nextLabel: null,
      prevLabel: null,
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    this.fetchAPI(this.state.firstLink);
  }

  fetchAPI(page){
    fetch(page)
      .then((res) => {
        return res.json().then(json => ({
          headers: res.headers,
          items: json
        }));
      })
      .then(
        (result) => {
          const links = parse(result.headers.get('Link'));
          this.setState({
            isLoaded: true,
            items: result.items,
            currentPage: page,
            nextLabel: (links && links.next),
            prevLabel: (links && links.prev)
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

  onStepChange(direction){
    const { prevLabel, nextLabel } = this.state;
    if ((direction === 'next') && nextLabel) {
      this.fetchAPI(nextLabel.url);
    } else if ((direction === 'previous') && prevLabel) {
      this.fetchAPI(prevLabel.url);
    }
  }

  displayPagination() {
    const { prevLabel, nextLabel } = this.state;
    if (prevLabel || nextLabel) {
      return (
        <div className="strong-pagination">
          { this.previousLink() } &nbsp;&nbsp;&nbsp; { this.nextLink() }
        </div>
      );
    }
  }

  previousLink() {
    const { prevLabel } = this.state;
    if (prevLabel){
      return (
        <button className="button is-success is-inverted" onClick={() => this.onStepChange('previous')}>
          <i className="icon-arrow-left"></i>
        </button>
      );
    }
  }

  nextLink() {
    const { nextLabel } = this.state;
    if (nextLabel) {
      return (
        <button className="button is-success is-inverted" onClick={() => this.onStepChange('next')}>
          <i className="icon-arrow-right"></i>
        </button>
      );
    }
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
            <p> Do you want to speak at upcoming meetups or have any Topic suggestions for others? Please, feel free to open up an issue at <a href="https://github.com/RubyNepal/rorh/issues" target="_blank" rel="noopener noreferrer">Github</a>
            </p>
          </div>
          <ul className="talk-items">
            {items.map(item => (
              <TalkItem key={item.id} title={item.title} body={item.body} user={item.user.login} avatarUrl={item.user.avatar_url} url={item.html_url} />
            ))}
          </ul>
          { this.displayPagination() }
        </div>
      );
    }
  }
}

export default TalkSuggestions;
