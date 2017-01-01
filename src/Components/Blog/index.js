import React, { Component } from 'react';
import './index.css';

import renderMarkdown from '../../Utils/renderMarkdown';

export default class Blog extends Component {
  createMarkup = () => {
    return {__html: renderMarkdown(`
# The largest heading
## The second largest heading
###### The 6th largest heading
> A paragraph of text
>
> Another paragraph
>
> - A list
> - with items

\`\`\` console.log('error') \`\`\`
      `)};
  };

  render() {
    return (
      <div className="Blog" style={{width: '80%', margin: '0 auto', textAlign: 'initial'}}>
        <div dangerouslySetInnerHTML={this.createMarkup()}></div>
      </div>
    );
  }
}
