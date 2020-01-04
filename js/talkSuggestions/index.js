import React, { Component } from 'react';


class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("https://api.github.com/repos/RubyNepal/rorh/issues?state=open&per_page=4")
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result);
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

  renderImage(issuer) {
    const avatar_url = issuer.avatar_url;
    return <img src={avatar_url} alt="Placeholder image" />;
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
              <li className="card talk-item" key={item.id}>
                <header className="card-header">
                  <p className="card-header-title text-truncate">
                    {item.title}
                  </p>
                </header>
                <div className="card-content">
                  <div className="media">
                    <div className="media-content">
                      <div className="comment-message content">{ item.body }</div>
                      <div className="comment-message content">Issued by: <b>{ item.user.login }</b></div>
                      <div className="comment-message content">Issue Link: <a href={item.html_url} target="_blank" rel="noopener noreferrer">Link</a></div>
                    </div>
                    <div className="media-right">
                      <figure className="image is-96x96">
                        { this.renderImage(item.user) }
                      </figure>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      );
    }
  }
}

export default MyComponent;
