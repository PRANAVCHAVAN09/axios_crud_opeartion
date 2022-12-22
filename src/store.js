import { createSlice, current } from "@reduxjs/toolkit";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

const actionSlice = createSlice({
  name: "data",
  initialState: {
    data: [],
  },
  reducers: {
    add(state, action) {
      const { payload } = action;
      //   console.log(action.payload);
      //   = [...state.data, action.payload];
      //   console.log("reducer", action);
      console.log(state);
      console.log(payload);
      // state.data = [...state.data, ...action.payload];
      state.data.push(payload);
    },
    resetData(state, action) {
      // console.log(action.payload);
      state.data = action.payload;
    },
    GETdataWithFilter(state, action) {
      if (!state.data[0]) state.data = [...action.payload];
      // var te = current(state).data;
      // var setB = new Set(te);
      // [...new Set(action.payload)].filter((x) => setB.has(x));
      // const test = Array.from(setB);
    },
    editState(state, action) {
      const { userId, id, title, body } = action.payload;
      // console.log(action.payload);
      state.data = state.data.map((el) => {
        if (el.id === id)
          return { userId: userId, id: id, title: title, body: body };
        return el;
      });
    },
    filterState(state, action) {
      state.data = current(state.data).filter((item) => {
        return item.id == action.payload.id;
      });
      // state.data = state.data.filter((item) => {
      //   if (item.id === id) {
      //     return { id: id, title: title, body: body };
      //   }
      // });
    },
  },
});
export default actionSlice.reducer;
const { add, editState, GETdataWithFilter, filterState } = actionSlice.actions;

export const GetData = () => async (dispatch) => {
  try {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?userId=1`
    );
    // await dispatch(get(res.data));
    await dispatch(GETdataWithFilter(res.data));
  } catch (error) {
    return console.error(error);
  }
};
// export const EditAction = (payload) => async (dispatch) => {
//   try {
//     await dispatch(editState(payload));
//     return;
//   } catch (error) {
//     return console.error(error);
//   }
// };
export const EditData = (payload) => async (dispatch) => {
  try {
    const res = await axios.put(
      `https://jsonplaceholder.typicode.com/posts/${payload.id}`,
      //   `https://jsonplaceholder.typicode.com/posts?userId=1&id=${payload.id}`,
      {
        userId: payload.userId,
        body: payload.body,
        title: payload.title,
      }
    );
    // console.log(payload);
    await dispatch(editState(res.data));
    console.log(res.data);
  } catch (error) {
    return console.error(error);
  }
};
export const AddData = (payload) => async (dispatch) => {
  try {
    await dispatch(add(payload));
  } catch (error) {
    return console.error(error);
  }
};
export const FitlerAction = (payload) => async (dispatch) => {
  try {
    // const res = await axios.get(
    //   `https://jsonplaceholder.typicode.com/posts?userId=1&id=${payload.id}`
    // );
    // await dispatch(filterState(res.data[0]));
    // console.log(res.data);

    await dispatch(filterState(payload));
    return;
  } catch (error) {
    return console.error(error);
  }
};
