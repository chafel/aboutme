import React, { Component } from 'react';
import resumeMarkdownParser from './yart';
import avatar from './avatar.svg';
import './index.css';

export default class Resume extends Component {
  componentDidMount() {
    resumeMarkdownParser(this.sourceDOM.innerHTML);
  }

  render() {
    return (
      <div className="Resume">
        <div className="page-start"></div>
        <div className="grand cont" id="cont">
          <img className="avatar" src={avatar}/>
        </div>
        <div style={{display: 'none'}}
             ref={(_ref) => this.sourceDOM = _ref}
             dangerouslySetInnerHTML={{__html: `
          @ 孙超飞

          @@ TEL: [(+86) 185-****-****](tel:+86-185-1461-6567)
          @@ Email: [********@gmail.com](mailto:chaofeis@gmail.com)
          @@ Twitter: [@chaofeis](https://twitter.com/chaofeis)
          @@ Weibo: [@chaofeis](http://weibo.com/u/1825990963)
          @@ Douban: [@chaofeis](http://www.douban.com/people/chafel)

          # Experience

          // Current

          ## Web Developer @nextLegal  {09/2015—Present}

          Develop web site with nodejs, lodash, zepto and so on.

          # Education

          ## 西安电子科技大学 电子工程学院  {08/2010—06/2014}

          # About me

          ## Easygoing with people, love coding.

          :: Learn more: http://chafel.github.io
          `}}>
        </div>
      </div>
    );
  }
}
