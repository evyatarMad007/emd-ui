import React from "react";
import { useSelector } from "react-redux";
import ProjectModal from "./ProjectModal/ProjectModal";
import EndPointModal from "./EndPointModal/EndPointModal";
import MethodModal from "./MethodModal/MethodModal";

const ModalsContainer = () => {
  const { isProjectModalOpen, isEndPointModalOpen, isMethodModalOpen } = useSelector(
    (state) => state.UIStore
  );

  return (
    <>
      {isProjectModalOpen && <ProjectModal/>}
      {isEndPointModalOpen && <EndPointModal />}
      {isMethodModalOpen && <MethodModal />}
    </>
  );
};

export default ModalsContainer;
