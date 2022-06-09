import { Routes, Route, Navigate } from "react-router-dom";

import Lectures from "./Components/Lectures/Lectures";
import MainPageLayout from "./Components/MainPageLayout";
import Profile from "./Components/Profile/Profile";
import Quiz from "./Components/Quiz/Quiz";

import { useState } from "react";
import SyncLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";
import Login from "./Components/Login";
import Submit from "./Components/Submit";
import Assignments from "./Components/Assignments/Assignments";
import AssignmentDetails from "./Components/Assignments/AssignmentDetails";
function App() {
  const override = css`
    display: block;
    margin: 0 auto;
    border-color: blue;
  `;

  const [isLoading, setLoading] = useState(true);
  const [color, setColor] = useState("#ffffff");

  return (
    <div>
      {/* {isLoading && (
        <div className="flex space-x-2">
          Loading
          <SyncLoader
            color={color}
            loading={isLoading}
            css={override}
            size={15}
          />
        </div>
      )} */}
      <Routes>
        <Route path="/" element={<MainPageLayout />}>
          <Route path="/" element={<Navigate to="/lectures" />}></Route>

          <Route path="assignments" element={<Assignments />}></Route>
          <Route
            path="assignments/:id/details"
            element={<AssignmentDetails />}
          ></Route>
          <Route path="lectures" element={<Lectures />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="profile" element={<Profile />}></Route>
          <Route path="submit" element={<Submit />}></Route>
        </Route>
        <Route path="quiz" element={<Quiz />}></Route>
      </Routes>
    </div>
  );
}

export default App;
