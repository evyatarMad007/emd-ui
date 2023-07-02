import React from "react";
import Typography from "../../../common/Typography/Typography";
import {
  formatNumberAsMoney,
  getSymbolCurrencyByCountry,
} from "../../../../utils/general-utils";
import DocPageWrapper from "../../../common/DocPageWrapper/DocPageWrapper";

const AtkDocHeader = ({ content }) => {
  const { courtTitle, claim, defendant, plaintiff } = content;

  const getPlaintiffPrivateDetails = () => {
    const fullName = `${plaintiff.firstName} ${plaintiff.lastName}`;
    const id = `ת.ז ${plaintiff.idNumber}`;
    return `${fullName}, ${id}`;
  };

  const getPlaintiffAddress = () => {
    const { country, city, street, number, zipCode } = plaintiff.address;
    const streetText = `רח' ${street} ${number}`;
    return `${streetText}, ${city}`;
  };

  const getDefendantPrivateDetails = () => {
    const fullName = `${defendant.firstName} ${defendant.lastName}`;
    const id = `ת.ז ${defendant.idNumber}`;
    return `${fullName}, ${id}`;
  };

  const getDefendantAddress = () => {
    const { country, city, street, number, zipCode } = defendant.address;
    const streetText = `רח' ${street} ${number}`;
    return `${streetText}, ${city}`;
  };

  const getRequestedRemedy = () => {
    const { requestedRemedy } = claim;
    const symbol = getSymbolCurrencyByCountry(requestedRemedy.currency);
    const fullAmount = `${formatNumberAsMoney(
      requestedRemedy.amount
    )} ${symbol}`;
    const consText = "בתוספת ריבית והצמדה";
    return `${fullAmount} ${consText}`;
  };

  return (
    <DocPageWrapper right={"110px"} top={"70px"}>
      <Typography fWeight={"b"} value={courtTitle} />
      <Typography
        fWeight={"b"}
        value={"ת.ק_____"}
        right={"520px"}
        position={"absolute"}
      />

      <Typography
        fWeight={"b"}
        value={"בעניין"}
        margin="55px 0 -10px 0"
        display={"block"}
      />

      {/* התובע */}
      <Typography fWeight={"b"} value={"התובע:"} margin="0 0 0 0" />
      <Typography
        fWeight={"b"}
        value={getPlaintiffPrivateDetails()}
        margin="50px 152px 0 0"
      />
      <Typography
        fWeight={"b"}
        value={getPlaintiffAddress()}
        display={"block"}
        margin="7px 198px 0 0"
      />

      {/* הנתבע */}
      <Typography fWeight={"b"} value={"הנתבע:"} margin="50px 0 0 0" />
      <Typography
        fWeight={"b"}
        value={getDefendantPrivateDetails()}
        margin="50px 152px 0 0"
      />
      <Typography
        fWeight={"b"}
        value={getDefendantAddress()}
        display={"block"}
        margin="7px 198px 0 0"
      />

      {/* התביעה */}
      <Typography
        fWeight={"b"}
        value={"סוג התביעה:"}
        margin="50px 0 0 0"
        underLine={true}
      />
      <Typography
        fWeight={"b"}
        value={claim.claimType}
        margin="0 5px 0 0"
        br={1}
      />

      {/* הסעד המבוקש  */}
      <Typography
        fWeight={"b"}
        value={"הסעד המבוקש:"}
        margin="10px 0 0 0"
        underLine={true}
      />
      <Typography
        fWeight={"b"}
        value={getRequestedRemedy()}
        margin="0 5px 0 0"
        br={1}
      />

      {/* הסעד המבוקש  */}
      <Typography
        fWeight={"b"}
        value={"לא קיים הליך נוסף בבית המשפט בין הצדדים."}
        margin="10px 0 0 0"
      />
    </DocPageWrapper>
  );
};

export default AtkDocHeader;
