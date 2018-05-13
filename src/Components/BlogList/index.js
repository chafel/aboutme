import React, { Component } from 'react';
import './index.css';

import axios from 'axios';

export default class BlogList extends Component {
  state = {
    list: []
  };

  componentDidMount() {
    axios
      .get('http://47.98.220.233/yuque_proxy.php',{})
      .then(({data: data}) => {
        this.setState({
          list: data.data
        });
      });
  }

  render() {
    const { list } = this.state;

    return (
      <div className="BlogList">
        {list.map((post) => {
          const {
            title,
            slug,
            created_at,
            updated_at,
            id,
            likes_count,
            comments_count
          } = post;

          return (
            <div className="Blog" key={id}>
              <h4>
                <a href={`https://yuque.com/page/notes.cx/${slug}`}>
                  {title}
                </a>
              </h4>
              <span className="Blog-info">
                - 更新于 <strong><i>{updated_at}</i></strong>
              </span>
              <span className="Blog-info">
                - 创建于 <strong><i>{created_at}</i></strong>
              </span>
              <span className="Blog-info">
                - 被喜欢 <strong><i>{likes_count}</i></strong> 次
              </span>
              <span className="Blog-info">
                - 被评论 <strong><i>{comments_count}</i></strong> 次
              </span>
            </div>
          );
        })}
      </div>
    );
  }
}