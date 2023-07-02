import React, { useEffect, useState } from "react";
import { MethodModalStyled } from "./MethodModal.styled";
import { useDispatch, useSelector } from "react-redux";
import ModalTemplate from "../ModalTemplate";
import {
  findMethodInSelectedEndPointAndUpdate,
  pushMethodToSelectedEndPoint,
  setEndPointSelected,
  setIsMethodModalOpen,
  setIsSpinnerScreenOpen,
  setMethodSelected,
} from "../../../../store/features/UIStore/UIStoreSlice";
import { getGenericModalText } from "../../../../utils/general-utils";
import { constants } from "../../../../constants/constants";
import ConfirmDialog from "../../../common/ConfirmDialog/ConfirmDialog";
import Form from "../../../common/Form/Form";
import TextInput from "../../../common/TextInput/TextInput";
import { InpWrapperStyled } from "../../../common/Form/Form.styled";
import { set } from "mongoose";
import {
  useAddMethodMutation,
  useDeleteMethodMutation,
  useUpdateMethodMutation,
} from "../../../../store/api/project/projectApi";
import SectionLine from "../../../common/SectionLine/SectionLine";
import SelectInput from "../../../common/SelectInput/SelectInput";

const MethodModal = () => {
  const {
    isMethodModalOpen,
    methodSelected,
    endPointSelected,
    projectSelected,
  } = useSelector((state) => state.UIStore);
  const [deleteMethod, { error: deleteError }] = useDeleteMethodMutation();
  const [updateMethod, { error: updateError }] = useUpdateMethodMutation();
  const [createMethod, { error: createError }] = useAddMethodMutation();
  const [methodType, setMethodType] = useState({ value: "", isValid: false });
  const [resStatusCode, setResStatusCode] = useState({
    value: "",
    isValid: false,
  });
  const [resHeaders, setResHeaders] = useState({ value: "", isValid: false });
  const [resBody, setResBody] = useState({ value: "", isValid: false });
  const modalName = "method";
  const [error, setError] = useState("");
  const modalText = getGenericModalText(isMethodModalOpen, modalName);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isMethodModalOpen === constants.edit) {
      setMethodType({ value: methodSelected.method, isValid: true });
      setResStatusCode({
        value: methodSelected.response.statusCode,
        isValid: true,
      });
      setResHeaders({
        value: JSON.stringify(methodSelected.response.headers),
        isValid: true,
      });
      setResBody({
        value: JSON.stringify(methodSelected.response.body),
        isValid: true,
      });
    }
  }, []);

  useEffect(() => {
    if (deleteError || updateError || createError) {
      setError(
        deleteError?.message || updateError?.message || createError?.message
      );
    }
  }, [deleteError, updateError, createError]);

  const removeHandler = async () => {
    // show the loading spinner.
    dispatch(setIsSpinnerScreenOpen(true));

    try {
      await deleteMethod({
        projectId: projectSelected._id,
        endPointId: endPointSelected._id,
        methodId: methodSelected._id,
      });

      // update the selected method.
      dispatch(setMethodSelected(null));
    } finally {
      // hide the loading spinner.
      dispatch(setIsSpinnerScreenOpen(false));

      // close the modal.
      dispatch(setIsMethodModalOpen(null));
    }
  };

  const submitFormHandler = async () => {
    // open the loading spinner.
    dispatch(setIsSpinnerScreenOpen(true));

    try {
      if (isMethodModalOpen === constants.edit) {
        await updateMethod({
          projectId: projectSelected._id,
          endPointId: endPointSelected._id,
          methodId: methodSelected._id,
          methodData: {
            method: methodType.value,
            params: [],
            response: {
              statusCode: Number(resStatusCode.value),
              headers: [], // JSON.parse(resHeaders.value),
              body: JSON.parse(resBody.value),
            },
          },
        })
          .unwrap() //{"aaa":"aaa","bbb":"bba"}
          .then((data) => {
            // close the modal.
            dispatch(setIsMethodModalOpen(null));
          });
      }

      if (isMethodModalOpen === constants.add) {
        await createMethod({
          projectId: projectSelected._id,
          endPointId: endPointSelected._id,
          methodData: {
            method: methodType.value,
            params: [],
            response: {
              statusCode: Number(resStatusCode.value),
              headers: [], //JSON.parse(resHeaders.value),
              body: JSON.parse(resBody.value),
            },
          },
        })
          .unwrap()
          .then((data) => {
            const newMethod = data.method;
            // push the new method to the selected endpoint with pushMethodToSelectedEndPoint method action
            dispatch(pushMethodToSelectedEndPoint(newMethod));
            // set the new method to the selected method.
            dispatch(setMethodSelected(newMethod));
            // close the modal.
            dispatch(setIsMethodModalOpen(null));
          });
      }
    } catch (error) {
      setError(error.message);
    } finally {
      // hide the loading spinner.
      dispatch(setIsSpinnerScreenOpen(false));
    }
  };

  return (
    <MethodModalStyled>
      <ModalTemplate
        iconType={modalText.iconType}
        iconColor={modalText.iconColor}
        modalTitle={modalText.modalTitle}
        isModalActive={isMethodModalOpen}
        setModal={setIsMethodModalOpen}
        modalError={error}
      >
        {isMethodModalOpen === constants.add && (
          <Form
            onSubmit={submitFormHandler}
            cancelCB={() => dispatch(setIsMethodModalOpen(null))}
            action={isMethodModalOpen}
            modalName={modalName}
            isValidForm={
              methodType.isValid &&
              resStatusCode.isValid &&
              // resHeaders.isValid &&
              resBody.isValid
            }
          >
            <InpWrapperStyled maxWidth={450}>
              <SelectInput
                label="method type"
                options={["GET", "POST", "PUT", "DELETE", "PATCH"]}
                defaultValue="GET"
                inpDir="ltr"
                onChange={(value) => setMethodType(value)}
              />
            </InpWrapperStyled>

            <SectionLine title={"Response:"} maxWidth={450}>
              <InpWrapperStyled maxWidth={450}>
                <SelectInput
                  label="status code"
                  options={[200, 201, 204, 301, 302, 304, 400, 401, 403, 404]}
                  defaultValue="200"
                  inpDir="ltr"
                  onChange={(value) => setResStatusCode(value)}
                />
              </InpWrapperStyled>

              <InpWrapperStyled maxWidth={450}>
                <TextInput
                  disabled={true}
                  inpData={setResHeaders}
                  fieldType={constants.code} // TODO: change to code
                  label={"Headers (JSON Format)"}
                />
              </InpWrapperStyled>

              <InpWrapperStyled maxWidth={450}>
                <TextInput
                  inpData={setResBody}
                  fieldType={constants.code} // TODO: change to code
                  label={"Body (JSON Format)"}
                />
              </InpWrapperStyled>
            </SectionLine>
          </Form>
        )}

        {isMethodModalOpen === constants.edit && (
          <Form
            onSubmit={submitFormHandler}
            cancelCB={() => dispatch(setIsMethodModalOpen(null))}
            action={isMethodModalOpen}
            modalName={modalName}
            isValidForm={resStatusCode.isValid && resBody.isValid}
          >
            <SectionLine title={"Response:"} maxWidth={450}>
              <InpWrapperStyled maxWidth={450}>
                <SelectInput
                  label="status code"
                  options={[200, 201, 204, 301, 302, 304, 400, 401, 403, 404]}
                  defaultValue={methodSelected.response.statusCode}
                  inpDir="ltr"
                  onChange={(value) => setResStatusCode(value)}
                />
              </InpWrapperStyled>

              <InpWrapperStyled maxWidth={450}>
                <TextInput
                  disabled={true}
                  inpData={setResHeaders}
                  fieldType={constants.code} // TODO: change to code
                  initValue={JSON.stringify(methodSelected.response.headers)}
                  label={"Headers (JSON Format)"}
                />
              </InpWrapperStyled>

              <InpWrapperStyled maxWidth={450}>
                <TextInput
                  inpData={setResBody}
                  fieldType={constants.code} // TODO: change to code
                  initValue={JSON.stringify(methodSelected.response.body)}
                  label={"Body (JSON Format)"}
                />
              </InpWrapperStyled>
            </SectionLine>
          </Form>
        )}

        {isMethodModalOpen === constants.remove && (
          <ConfirmDialog
            itemName={methodSelected.method}
            modalType={modalName}
            cancelCB={() => dispatch(setIsMethodModalOpen(null))}
            removeCB={() => removeHandler()}
          />
        )}
      </ModalTemplate>
    </MethodModalStyled>
  );
};

export default MethodModal;
