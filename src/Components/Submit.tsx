import { FC, memo, ReactNode } from "react";
import Input from "../Components/Input/Input";
import React from "react";
import axios from "axios";
import H3 from "./H3";
import Button from "../Components/Button/Button";
import { Formik, Form, Field, ErrorMessage } from "formik";

import { string, object } from "yup";
import { Link } from "react-router-dom";
import { Assignment } from "../Modals/Assignment";
type SubmitProps = {
  assignment?: Assignment;
  onClick?: () => void;
  children?: React.ReactNode;
};

const Submit: FC<SubmitProps> = ({ assignment, onClick }) => {
  const [submissionLink, setSubmissionLink] = React.useState("");

  const [urlError, setUrlError] = React.useState("");
  const submitAssignmet = () => {
    axios.put(
      ` https://api.codeyogi.io/assignment/${assignment?.id}/submit`,
      {
        submissionLink: submissionLink,
      },
      {
        withCredentials: true,
      }
    );
  };
  const onSubmissionChange = (event: any) => {
    setSubmissionLink(event.target.value);
  };
  const onSubmit = () => {
    const urlValidator = string()
      .matches(
        /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
        "Enter correct url!"
      )
      .required("Please enter valid url");

    const ValidationSchema = object().shape({
      URL: string().matches(
        /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
        "Enter correct url!"
      ),
    });

    try {
      urlValidator.validateSync(submissionLink);
      setSubmissionLink("");
      return;
    } catch (e: any) {
      setUrlError(e.message);

      setSubmissionLink("");
      return;
    }
  };

  return (
    <div className="fixed top-0 left-0 flex items-center justify-center w-screen h-screen transition-opacity bg-opacity-75 bg-cyan-50 ">
      <div className="relative flex flex-col w-1/2 p-4 space-y-8 bg-cyan-200 ">
        <hr className="w-full"></hr>
        <div className="flex flex-col items-center justify-center w-full space-x-10 md:flex md:flex-row">
          <H3>Submission Link</H3>

          <Input
            value={submissionLink}
            onChange={onSubmissionChange}
            placeholder="Submission Link"
            error={urlError}
          ></Input>
        </div>
        <hr className="w-full"></hr>
        <div className="flex flex-row justify-between ">
          <Button onClick={onSubmit} className={"text-sm py-2 px-3 "}>
            Submit
          </Button>

          <Button onClick={onClick}>
            <Link to="/assignments">Close</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

Submit.defaultProps = {};

export default memo(Submit);
