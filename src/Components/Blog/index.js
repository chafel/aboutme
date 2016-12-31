import React, { Component } from 'react';
import './index.css';

import renderMarkdown from '../../Utils/renderMarkdown';

export default class Blog extends Component {
  state = {
    content: ''
  };

  componentDidMount() {
    this.setState({
      content: renderMarkdown(this._textarea.value)
    });
  }

  createMarkup = () => {
    return {__html: this.state.content};
  };

  render() {
    return (
      <div className="Blog">
        虚位以待
        <div dangerouslySetInnerHTML={this.createMarkup()}></div>
        <textarea style={{display: 'none'}}
                  ref={(_ref) => this._textarea = _ref}
                  defaultValue="
            # The largest heading (an <h1> tag)
            ## The second largest heading (an <h2> tag)
            ###### The 6th largest heading (an <h6> tag)
        "/>
      </div>
    );
  }
}