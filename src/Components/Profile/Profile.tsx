import { FC, memo, useState } from "react";
import Button from "../Button/Button";

import InputSelect from "../InputSelect";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import PageLayout from "../PageLayout";
import H1 from "../H1";
type ProfileProps = {
  onClick?: () => void;
};

const initialValues = {
  firstName: "",
  lastName: "",
  Institute: "",
  InstituteNo: "",
  yearPassout: "",
  email: "",
  Phonenumber: "",
  branch: "",
  DOB: "",
};
const onSubmit = (values: any) => {
  alert(JSON.stringify(values, null, 2));
};
const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(5, "minimum 5 characters is required")
    .max(15, "maximum 15 characters or less is required")
    .required("Required"),

  lastName: Yup.string()
    .min(5, "minimum 5 characters is required")
    .required("Required"),

  email: Yup.string().email("Invalid email address").required("Required"),
  branch: Yup.string().required("Required"),
  Institute: Yup.string().required("Required"),
  InstituteNo: Yup.string().required("Required"),
  yearPassout: Yup.string().required("Required"),
  Phonenumber: Yup.string().required("Required"),
  DOB: Yup.string().required("Required"),
});

const Profile: FC<ProfileProps> = ({ onClick }) => {
  return (
    <div className="flex-1 p-5 bg-gray-100">
      <PageLayout>
        <H1>Personal Details</H1>

        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          <div className="h-full px-16 py-10 mx-5 rounded-md ">
            <Form>
              <div className="space-y-6 text-white">
                <div className="grid items-center max-w-full grid-cols-4 ">
                  <label htmlFor="firstName">
                    First Name <span className="text-red-600 ">*</span>
                  </label>
                  <Field id="firstName" type="text" name="firstName" />
                </div>
                <div className="text-xs text-red-600">
                  <ErrorMessage name="firstName" />
                </div>

                <hr className="w-full"></hr>
                <div>
                  <div className="grid items-center max-w-full grid-cols-4 ">
                    <label htmlFor="lastName">
                      Last Name
                      <span className="text-xs text-red-600">
                        (Skip only if you don't have it in official documents)
                      </span>
                    </label>
                    <Field id="lastName" type="text" name="lastName" />
                  </div>
                  <div className="text-xs text-red-600">
                    <ErrorMessage name="lastName" />
                  </div>
                </div>
                <hr className="w-full"></hr>
                <div className="grid items-center max-w-full grid-cols-4 ">
                  <label htmlFor="email">
                    Email Address <span className="text-red-600 ">*</span>
                  </label>
                  <Field type="email" id="email" name="email" />
                  <div className="text-xs text-red-600">
                    <ErrorMessage name="email" />
                  </div>
                </div>
                <hr className="w-full"></hr>
                <div className="grid items-center max-w-full grid-cols-4 ">
                  <label htmlFor="Institute">
                    Name of Institute <span className="text-red-600 ">*</span>
                  </label>
                  <Field type="text" name="Institute" id="Institute" />
                  <div className="text-xs text-red-600">
                    <ErrorMessage name="Institute" />
                  </div>
                </div>
                <hr className="w-full"></hr>
                <div className="grid items-center max-w-full grid-cols-4 ">
                  <label htmlFor="yearPassout">Year of PassOut</label>
                  <Field type="text" name="yearPassout" id="yearPassout" />
                  <div className="text-xs text-red-600">
                    <ErrorMessage name="yearPassout" />
                  </div>
                </div>

                <hr className="w-full"></hr>
                <div className="grid items-center max-w-full grid-cols-4 ">
                  <label htmlFor="Phonenumber">
                    Phone Number <span className="text-red-600 ">*</span>
                  </label>
                  <Field type="text" name="Phonenumber" id="Phonenumber" />
                  <div className="text-xs text-red-600">
                    <ErrorMessage name="Phonenumber" />
                  </div>
                </div>

                <hr className="w-full"></hr>
                <div className="grid items-center max-w-full grid-cols-4 ">
                  <label htmlFor="DOB">
                    Date of Birth <span className="text-red-600 ">*</span>
                  </label>
                  <Field type="text" name="DOB" id="DOB" />
                  <div className="text-xs text-red-600">
                    <ErrorMessage name="DOB" />
                  </div>
                </div>

                <hr className="w-full"></hr>
                <InputSelect></InputSelect>
                <hr className="w-full"></hr>
                <div className="grid items-center max-w-full grid-cols-4 ">
                  <label htmlFor="InstituteNo">Institute Roll No.</label>
                  <Field type="text" name="InstituteNo" id="InstituteNo" />
                  <div className="text-xs text-red-600">
                    <ErrorMessage name="InstituteNo" />
                  </div>
                </div>

                <hr className="w-full"></hr>
                <div className="grid items-center max-w-full grid-cols-4 ">
                  <label htmlFor="branch">Branch</label>
                  <Field type="text" name="branch" id="branch" />
                  <div className="text-xs text-red-600">
                    <ErrorMessage name="branch" />
                  </div>
                </div>

                <hr className="w-full"></hr>
              </div>
              <div className="pt-5"></div>
              <Button onClick={onSubmit} type="submit">
                Update
              </Button>
            </Form>
          </div>
        </Formik>
      </PageLayout>
    </div>
  );
};

Profile.defaultProps = {};

export default memo(Profile);
