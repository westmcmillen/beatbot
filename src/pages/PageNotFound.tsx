import React from "react";

import { Link } from "react-router-dom";

import Component from "../components/Component";
import Container from "../layout/Container";
import Flex from "../layout/Flex";
import Columns from "../layout/Columns";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRobot } from "@fortawesome/free-solid-svg-icons";

type Props = {
  className?: string;
};

export default function PageNotFound({ className = "" }: Props) {
  return (
    <Component id="404">
      <Flex className="items-center p-2 bg-neutral-50">
        <Container className="sm:p-2 mx-auto">
          <Flex className="flex-col justify-center items-center gap-4 p-16">
            <FontAwesomeIcon icon={faRobot} className="text-6xl md:text-[8rem] text-violet-600" />
            <span className="text-center text-neutral-600">{"Ah... 1... 2... 3..."}</span>
            <span className="text-lg md:text-[2rem] text-center font-bold">404</span>
            <span className="text-lg text-center font-bold">What happened to the drummer who hit their head?</span>
            <span className="text-sm text-center text-violet-600">They got a percussion!</span>
            <span className="text-center text-neutral-600">Here is a link to help get you back on beat.</span>
            <Link to={"/"} className="contents">
              <button className="w-1/2 md:w-1/4 py-4 hover:bg-violet-600 border border-violet-600 rounded text-violet-600 hover:text-violet-50">Home</button>
            </Link>
          </Flex>
        </Container>
      </Flex>
    </Component>
  );
}
