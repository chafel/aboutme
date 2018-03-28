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
      var headstr = "<html><head><title></title><style></style></head><body>";
      var footstr = "</body>";
      var newstr = document.all.item(printpage).innerHTML;
      newstr = newstr.replace('********@gmail.com', 'chaofeis@gmail.com');
      newstr = newstr.replace('185-****-****', '185-1461-6567');
      
      var oldstr = document.body.innerHTML;
      document.body.innerHTML = headstr+newstr+footstr;
      window.print();
      document.body.innerHTML = oldstr;
      return false;
    };

    const content = {
      __html: `
          ## 孙超飞 (Web Developer)

          @@
          @@
          @@  Email: [********@gmail.com](mailto:chaofeis@gmail.com)
          @@  TEL: [(+86) 185-****-****](tel:+86-185-1461-6567)
          @@  Twitter: [@chaofeis](https://twitter.com/chaofeis)
          @@  Weibo: [@chaofeis](http://weibo.com/u/1825990963)
          @@  Douban: [@chaofeis](http://www.douban.com/people/chafel)
          @@  Website: [Github Pages](https://chafel.github.io/)

          # Experience

          // Current
          ## Web developer @[didichuxing](http://www.didichuxing.com/) {09/2017—Present}

          - Achieving substantial internal web systems with Koa/MobX/Dva/Ant Design/Mongoose

          // Career
          ## Front-end Developer @[BearyChat](https://bearychat.com/)  {01/2016—08/2017}

          - Use Angular@1.x to fix issues and implement features like commenting files and dnd-mode.
          - Refactor BearyChat SPA with React and Redux.
          - Build a UIkit with colleagues.
          - Rewrite [all register and login pages](https://bearychat.com/start) and realize i18n.

          ## Web Developer @[X Man Legal](http://xmanlegal.com/)  {09/2015—01/2016}

          - Develop web site with express, lodash, zepto and so on.

          ## Front-end Developer @[CRM FACTORY](https://www.crm-factory.eu/)  {06/2015—09/2015}

          - Build hybrid applications with Angular@1.x and Backbone.

          ## A miraculous experience as mystery for changing life  {09/2014—06/2015}

          # Education

          ## Obtain a bachelor's degree in Electronic Engineering from [Xidian University](http://www.xidian.edu.cn/)  {08/2010—06/2014}

          # About me

          ## Lifelong Learner

          :: learn more: https://github.com/chafel
          `
    };

    return (
      <div className="Resume" id="Resume">
        <div className="page-start"></div>

        <div className="grand cont" id="cont">
          <img className="avatar" alt="avatar" src={avatar}/>
        </div>

        <div className="download-button-container">
          <a className="download-button lazy-display-animation"
             onClick={handlePrint.bind(this, 'Resume')}>
            Download
          </a>
        </div>
        <div style={{display: 'none'}}
             ref={(_ref) => this.sourceDOM = _ref}
             dangerouslySetInnerHTML={content}>
        </div>
      </div>
    );
  }
}
