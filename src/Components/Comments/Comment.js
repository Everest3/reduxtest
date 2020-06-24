import React from "react";
import "./style.css";
import { connect } from "react-redux";
import { deleteComments } from "../Redux";

function Comment(props) {
  const name = props.comment.email.split("@");
  const { id } = props.comment;

  const onDelete = () => {
    props.deleteComments(id);
  };

  return (
    <>
      <div className="box">
        <h2>{name[0]}</h2>
        <p>{props.comment.body}</p>
        <div className="close-btn" onClick={onDelete}>
          x
        </div>
      </div>
    </>
  );
}

export default connect(null, { deleteComments })(Comment);
