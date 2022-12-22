import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { GetData, FitlerAction } from "../store";
import { Table } from "reactstrap";
import { useNavigate } from "react-router-dom";

const Get = () => {
  const { data } = useSelector((state) => {
    console.log("data", state.data);
    return state;
  });
  const [EmpId, EmpSetId] = useState("");

  //   const [show, setshow] = useState(false);
  const navigate = useNavigate();
  const onEdit = (el) => {
    try {
      // dispatch(EditStudentAction(payload));
      navigate("/Post", { state: el });
      // Isclick(true);
    } catch (e) {
      console.log(e);
    }
  };
  const onFilter = async () => {
    try {
      let payload = {
        id: EmpId,
      };
      dispatch(FitlerAction(payload));
    } catch (e) {
      console.log(e);
    }
  };
  // const onGet = async (el) => {
  //   try {

  //   } catch (e) {
  //     console.log(e);
  //   }
  // };
  // const render = () => {
  //   if (click == true) {
  //     dispatch(EditData());
  //   } else {
  //     dispatch(GetData());
  //   }
  // };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetData());
  }, []);

  return (
    <div>
      <div>
        <input
          type="text"
          name="textfield"
          id="textfield"
          value={EmpId}
          onChange={(e) => {
            EmpSetId(e.target.value);
          }}
        ></input>
        <input name="" type="button" value="Go" onClick={onFilter} />
      </div>
      <Table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        {data.length > 0 ? (
          data.map((el, indx) => {
            return (
              <tbody key={indx}>
                <tr>
                  <td>{el.id}</td>
                  <td>{el.title}</td>
                  <td>{el.body}</td>
                  <td>
                    <u
                      // href="http://localhost:3000/Post"
                      style={{ cursor: "pointer" }}
                      onClick={(e) => {
                        onEdit(el);
                      }}
                    >
                      {"     "}Edit {"     "}
                    </u>
                  </td>
                </tr>
              </tbody>
            );
          })
        ) : (
          <>
            <p>No data</p>
          </>
        )}
      </Table>
    </div>
  );
};

export default Get;
