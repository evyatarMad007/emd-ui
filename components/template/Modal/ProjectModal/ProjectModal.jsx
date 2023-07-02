import React, { useEffect, useState } from "react";
import { ProjectModalStyled } from "./ProjectModal.styled";
import { useDispatch, useSelector } from "react-redux";
import ModalTemplate from "../ModalTemplate";
import {
  setIsProjectModalOpen,
  setIsSpinnerScreenOpen,
  setProjectSelected,
} from "../../../../store/features/UIStore/UIStoreSlice";
import { getGenericModalText } from "../../../../utils/general-utils";
import { constants } from "../../../../constants/constants";
import ConfirmDialog from "../../../common/ConfirmDialog/ConfirmDialog";
import Form from "../../../common/Form/Form";
import TextInput from "../../../common/TextInput/TextInput";
import { InpWrapperStyled } from "../../../common/Form/Form.styled";
import {
  useCreateProjectMutation,
  useDeleteProjectMutation,
  useUpdateProjectMutation,
} from "../../../../store/api/project/projectApi";

const ProjectModal = () => {
  const { isProjectModalOpen, projectSelected } = useSelector(
    (state) => state.UIStore
  );
  const [deleteProject, { error: deleteError }] = useDeleteProjectMutation();
  const [updateProject, { error: updateError }] = useUpdateProjectMutation();
  const [createProject, { error: createError }] = useCreateProjectMutation();
  const [projectName, setProjectName] = useState({ value: "", isValid: false });
  const [projectDesc, setProjectDesc] = useState({ value: "", isValid: false });
  const modalName = "project";
  const modalText = getGenericModalText(isProjectModalOpen, modalName);
  const [error, setError] = useState("")

  const dispatch = useDispatch();

  useEffect(() => {
    if (isProjectModalOpen === constants.edit) {
      setProjectName({ value: projectSelected.projectName, isValid: true });
      setProjectDesc({ value: projectSelected.projectDesc, isValid: true });
    }
  }, []);

  useEffect(() => {
    if (deleteError || updateError || createError) {
      setError(deleteError?.message || updateError?.message || createError?.message)
    }
  }, [deleteError, updateError, createError])

  const removeHandler = async () => {
    // show the loading spinner.
    dispatch(setIsSpinnerScreenOpen(true));

    try {
      // delete project action by useDeleteProjectMutation hook.
      await deleteProject(projectSelected._id);

      // update the selected project.
      dispatch(setProjectSelected(null));
    } catch (error) {
      setError(error.message)
    }
    finally {
      // hide the loading spinner.
      dispatch(setIsSpinnerScreenOpen(false));

      // close the modal.
      dispatch(setIsProjectModalOpen(null));
    }
  };

  const submitFormHandler = async () => {
    // open the loading spinner.
    dispatch(setIsSpinnerScreenOpen(true));

    try {
      if (isProjectModalOpen === constants.edit) {
        await updateProject({
          projectId: projectSelected._id,
          projectData: {
            projectName: projectName.value,
            projectDesc: projectDesc.value,
          },
        }).unwrap();
      }

      if (isProjectModalOpen === constants.add) {
        await createProject({
          projectName: projectName.value,
          projectDesc: projectDesc.value,
        })
          .unwrap()
          .then((data) => {
            dispatch(setProjectSelected(data));
          });
      }

      // close the modal.
      dispatch(setIsProjectModalOpen(null));
      // // update the selected project.
      // dispatch(setProjectSelected(null));
    } catch (error) {
      setError(error.message)
    } finally {
      // hide the loading spinner.
      dispatch(setIsSpinnerScreenOpen(false));
    }
  };

  return (
    <ProjectModalStyled>
      <ModalTemplate
        iconType={modalText.iconType}
        iconColor={modalText.iconColor}
        modalTitle={modalText.modalTitle}
        isModalActive={isProjectModalOpen}
        setModal={setIsProjectModalOpen}
        modalError={error}
      >
        {isProjectModalOpen === constants.add && (
          <Form
            onSubmit={submitFormHandler}
            cancelCB={() => dispatch(setIsProjectModalOpen(null))}
            action={isProjectModalOpen}
            modalName={modalName}
            isValidForm={projectName.isValid && projectDesc.isValid}
          >
            <InpWrapperStyled maxWidth={400}>
              <TextInput
                inpData={setProjectName}
                fieldType={constants.name}
                label={"Project Name"}
              />
            </InpWrapperStyled>

            <InpWrapperStyled maxWidth={400}>
              <TextInput
                inpData={setProjectDesc}
                fieldType={constants.freeText}
                label={"Project Description"}
              />
            </InpWrapperStyled>
          </Form>
        )}

        {isProjectModalOpen === constants.edit && (
          <Form
            onSubmit={submitFormHandler}
            cancelCB={() => dispatch(setIsProjectModalOpen(null))}
            action={isProjectModalOpen}
            modalName={modalName}
            isValidForm={projectName.isValid && projectDesc.isValid}
          >
            <InpWrapperStyled maxWidth={500}>
              <TextInput
                inpData={setProjectName}
                initValue={projectSelected.projectName}
                fieldType={constants.name}
                label={"Project Name"}
              />
            </InpWrapperStyled>

            <InpWrapperStyled maxWidth={500}>
              <TextInput
                inpData={setProjectDesc}
                initValue={projectSelected.projectDesc}
                fieldType={constants.freeText}
                label={"Project Description"}
              />
            </InpWrapperStyled>
          </Form>
        )}

        {isProjectModalOpen === constants.remove && (
          <ConfirmDialog
            itemName={projectSelected.projectName}
            modalType={modalName}
            cancelCB={() => dispatch(setIsProjectModalOpen(null))}
            removeCB={() => removeHandler()}
          />
        )}
      </ModalTemplate>
    </ProjectModalStyled>
  );
};

export default ProjectModal;
