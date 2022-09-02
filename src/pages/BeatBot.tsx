import React from "react";

import kitSlice from "../store/kitSlice";
import runSlice from "../store/runSlice";

import { useSelector } from "react-redux";
import { RootState } from "../store";

import Component from "../components/Component";
import Container from "../layout/Container";
import Flex from "../layout/Flex";
import Columns from "../layout/Columns";
import Sequencer from "../components/Sequencer";
import Controller from "../components/Controller";
import Pads from "../components/Pads";
import Menu from "../components/Menu";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRobot } from "@fortawesome/free-solid-svg-icons";

type Props = {
  className?: string;
};

export default function BeatBot({ className = "" }: Props) {
  // Loop through kitSlice and create useRef Object with cooresponding data
  const kit = {
    state: useSelector((state: RootState) => state.kit),
    actions: kitSlice.actions,
  };
  const run = {
    state: useSelector((state: RootState) => state.run),
    actions: runSlice.actions,
  };
  return (
    <Component id="BeatBot">
      <div
        id="Event Listener"
        className="contents"
        onKeyDown={e => {
          kit.state.assets.map((asset: any) => {
            switch (e.key.toLowerCase()) {
              case asset.char.toLowerCase():
                asset.audio.currentTime = 0;
                asset.audio.play();
                break;
            }
          });
        }}
      >
        <Container className="sm:p-2">
          <Flex className="flex-col">
            <header className="shrink-0 h-12 md:h-16 bg-neutral-800 sm:rounded-t-xl">
              <Flex className="flex-col justify-center items-center gap-y-1 text-neutral-400">
                <span className="text-xs md:text-sm font-light text-inherit">{kit.state.model}</span>
              </Flex>
            </header>
            <Flex className="flex-col bg-neutral-200">
              <Columns className="p-1 pb-0 md:p-2 md:pb-0 overflow-clip">
                <Pads className="z-10 col-span-full row-span-full" />
                <Menu className="col-span-full row-span-full" />
              </Columns>
              <Columns className="shrink-0 gap-y-1 md:gap-y-2 !h-max p-1 md:p-2 bg-neutral-200">
                <Sequencer className="col-span-full h-max" />
                <Controller className="col-span-full h-max" />
              </Columns>
            </Flex>
            <footer className="shrink-0 h-24 md:h-28 bg-neutral-800 sm:rounded-b-xl">
              <Flex className="flex-col justify-center items-center gap-y-1 text-neutral-400">
                <FontAwesomeIcon icon={faRobot} className={`text-xl md:text-2xl text-inherit ${run.state.play ? "animate-bounce" : null}`} />
                <span className="text-xs md:text-sm font-light text-inherit">BeatBot</span>
              </Flex>
            </footer>
          </Flex>
        </Container>
      </div>
    </Component>
  );
}
