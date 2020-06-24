import React, { Component } from "react";
import Comment from "./Comment";
import { connect } from "react-redux";
import { getComments, addComments } from "../Redux";
export class Comments extends Component {
  componentDidMount() {
    this.props.getComments();
  }
  render() {
    const { comments } = this.props;
    const commentTest = {
      postId: 2,
      id: 6,
      name: "et fugit eligendi deleniti quidem qui sint nihil autem",
      email: "Presley.Mueller@myrl.com",
      body:
        "doloribus at sed quis culpa deserunt consectetur qui praesentium\naccusamus fugiat dicta\nvoluptatem rerum ut voluptate autem\nvoluptatem repellendus aspernatur dolorem in",
    };
    return (
      <div className="container">
        <div className="left-panel">
          {comments.map((comment) => (
            <Comment key={comment.id} comment={comment} />
          ))}
        </div>
        <div className="right-panel">
          <button
            onClick={() => this.props.addComments(commentTest)}
            className="btn"
          >
            Show comment
          </button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  comments: state.comments,
});

// const mapDispatchToProps = (dispatch) => ({
//   getComments: () => dispatch(getComments()),
// });
// m2 thjesht kalo getcomments action si objekt

export default connect(mapStateToProps, { getComments, addComments })(Comments);
