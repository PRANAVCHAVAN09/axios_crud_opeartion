import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { EditData, GetData, AddData } from "../store";

const Post = () => {
  const location = useLocation();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [id, setId] = useState("");
  const [isEdit, setIsEdit] = useState(false);

  const dispatch = useDispatch();

  const onUpdate = async () => {
    try {
      let payload = {
        id: location.state.id,
        userId: 1,
        title: title,
        body: body,
      };
      // console.log(payload.id);
      dispatch(EditData(payload));
      if (payload.title && payload.body !== undefined) {
        setTitle("");
        setBody("");
      }
      // AddStudent(payload);
    } catch (e) {
      console.log(e);
    }
  };
  const Submit = async () => {
    try {
      let payload = {
        title: title,
        body: body,
        id: id,
        // id: new Date().valueOf().toString(),
      };
      dispatch(AddData(payload));
      console.log(payload.id);
      if (payload.title && payload.body !== undefined) {
        setTitle("");
        setBody("");
        setId("");
      }
      // AddStudent(payload);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (location.state) {
      const { id, title, body } = location.state;
      setTitle(title);
      setBody(body);
      setId(id);
      setIsEdit(true);
      return;
    }
  }, []);
  return (
    <div>
      <label for="fname">Id:</label>
      <input
        type="text"
        id="fname"
        name="fname"
        value={id}
        onChange={(e) => {
          setId(e.target.value);
        }}
      ></input>
      <label for="fname">Title:</label>
      <input
        type="text"
        id="fname"
        name="fname"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      ></input>
      <label for="fname">Body:</label>
      <input
        type="text"
        id="fname"
        name="fname"
        value={body}
        onChange={(e) => {
          setBody(e.target.value);
        }}
      ></input>

      {isEdit && (
        <input
          type="submit"
          value="update"
          onClick={(e) => {
            onUpdate();
          }}
        ></input>
      )}
      {!isEdit && (
        <input
          type="submit"
          value="Post"
          onClick={(e) => {
            Submit();
          }}
        ></input>
      )}
    </div>
  );
};

export default Post;
