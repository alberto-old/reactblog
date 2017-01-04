import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';

class PostIndex extends Component {
  // this is called when the component is about to be render in the document
  // for the first time
  componentWillMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    return this.props.posts.map( (post) => {
      return (
        <li className = 'list-group-item' key = { post.id }>
          <Link to = { "posts/" + post.id }>
            <span className = 'text-right'>{ post.categories }</span>
            <strong className = 'pull-left'>{ post.title }</strong>
          </Link>
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <div className = "text-right">
          <Link to = '/posts/new' className = "btn btn-primary">
            Add a post
          </Link>
        </div>
        <h3>Posts</h3>
        <ul className = 'list-group'>
          { this.renderPosts() }
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { posts: state.posts.all }
}

export default connect(mapStateToProps, { fetchPosts: fetchPosts })(PostIndex);
