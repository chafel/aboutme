import React, { Component } from 'react';
import resumeMarkdownParser from './yart';
import avatar from './avatar.svg';
import './index.css';

export default class Resume extends Component {
  componentDidMount() {
    resumeMarkdownParser(this.sourceDOM.innerHTML);
  }

  render() {
    // FROM HERE: https://forums.asp.net/t/1261525.aspx
    const handlePrint = (printpage) => {
      var headstr = "<html><head><title></title></head><body>";
      var footstr = "</body>";
      var newstr = document.all.item(printpage).innerHTML;
      var oldstr = document.body.innerHTML;
      document.body.innerHTML = headstr+newstr+footstr;
      window.print();
      document.body.innerHTML = oldstr;
      return false;
    };

    return (
      <div className="Resume" id="Resume">
        <div className="page-start"></div>

        <div className="grand cont" id="cont">
          <img className="avatar" src={avatar}/>
        </div>

        <div className="download-button-container">
          <a className="download-button lazy-display-animation"
             onClick={handlePrint.bind(this, 'Resume')}>
            Download
          </a>
        </div>
        <div style={{display: 'none'}}
             ref={(_ref) => this.sourceDOM = _ref}
             dangerouslySetInnerHTML={{__html: `
          ## 孙超飞

          @@ sss
          @@ Email: [********@gmail.com](mailto:chaofeis@gmail.com)

          @@ TEL: [(+86) 185-****-****](tel:+86-185-1461-6567)

          @@ Twitter: [@chaofeis](https://twitter.com/chaofeis)
          @@ Weibo: [@chaofeis](http://weibo.com/u/1825990963)
          @@ Douban: [@chaofeis](http://www.douban.com/people/chafel)
          @@ Website: [Github Pages](https://chafel.github.io/) & [aboutme](https://chafel.github.io/aboutme)

          # Experience

          // Current

          ## Front-end Developer @[BearyChat](https://bearychat.com/)  {01/2016—Present}

          - Use Angular@1.x to fix issues and implement features like commenting files and dnd-mode.
          - Refactor BearyChat SPA with React and realized a [Ui-Kit](http://uikit.stage.bearychat.com/) with colleagues.

          // Career

          ## Web Developer @[X Man Legal](http://xmanlegal.com/)  {09/2015—01/2016}

          - Develop web site with express, lodash, zepto and so on.

          ## Front-end Developer @[CRM FACTORY](https://www.crm-factory.eu/)  {06/2015—09/2015}

          - Build hybrid applications with Angular@1.x and Backbone.

          # Education

          ## 西安电子科技大学 电子工程学院  {08/2010—06/2014}

          # About me

          ## Lifelong Learner
          `}}>
        </div>
      </div>
    );
  }
}
