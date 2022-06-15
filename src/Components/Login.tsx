import React from "react";
import Button from "./Button/Button";
import H1 from "./H1";
import H2 from "./H2";
import Icons from "../Icons";
import { FC, memo } from "react";
import { Link } from "react-router-dom";
import PageLayout from "./PageLayout";

type LoginProps = {};

const Login: FC<LoginProps> = (props) => {
  return (
    <PageLayout>
      <div className="flex flex-col justify-center mx-auto space-y-5 ">
        <div className="flex justify-center mt-16">
          <Link to="/lectures">
            <img
              className="w-24 h-24 "
              src="https://codeyogi.io/images/favicon-96.png"
            ></img>
          </Link>
        </div>
        <div className="text-center">
          <h1 className="text-4xl font-bold ">CodeYogi</h1>
          <H1>Sign in to your account</H1>
        </div>

        <Button>
          <a href="https://discord.com/">
            <div className="flex justify-center py-3 space-x-5 px-7">
              <Icons
                imageUrl={
                  "https://cdn-icons-png.flaticon.com/512/5968/5968898.png"
                }
              ></Icons>
              <span>Sign in with Discord</span>
            </div>
          </a>
        </Button>
      </div>
    </PageLayout>
  );
};

Login.defaultProps = {};

export default memo(Login);
