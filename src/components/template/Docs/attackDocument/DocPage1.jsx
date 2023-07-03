import React from "react";
import DocPageWrapper from "../../../common/DocPageWrapper/DocPageWrapper";
import Typography from "../../../common/Typography/Typography";
import SectionList from "../../../common/SectionListContainer/SectionListContainer";
import SectionListContainer from "../../../common/SectionListContainer/SectionListContainer";

const DocPage1 = () => {
  const section1 = [
    {
        number: 1,
        name: "תובעים:",
        content: `התובעת הינה עצמאית , מפעילת עסק לממכר אוכל בשם "בא לי הודי" באמצעות נגרר "פוד טראק".`
    },
    {
        number: 2,
        name: "נתבעים:",
        content: `הנתבע הינו יזם ובין היתר הציג עצמו כיבואן של משאיות "פוד טראק" וכמקים מתחם באשקלון הידוע כמתחם "מג'יק טראק" הצמוד למלון אגמים, המיועד להצבת משאיות – "פוד טראק" לממכר מזון.`
    }
  ];
  const section2 = [
    {
        number: 3,
        name: "הרקע להגשת תביעה זו:",
        content: `ביום 09.08.2022 נפגשו הצדדים באשקלון (במבנה העירייה) וחתמו על הסכם – "הסכם שכירות להצבת פוד-טראק במרכז מג'יק טראק, (להלן: ההסכם"). בהסכם זה התחייב הנתבע לספק לתובעת משאית פוד טראק חדשה המותאמת לצרכיה בעלות של 130,000 ₪, כאשר הנגרר אשר בבעלות התובעת יהווה כחלק מהתשלום "טרייד אין" בסך 88,000 ₪ . כמו כן התחייב הנתבע בהסכם להשכיר לתובעת שטח להצבת הפוד טראק בעלות של 2500 ₪ לפני מע"מ לחודש. מצ"ב החוזה בין הצדדים כנספח א'.`,
    },
    {
        number: 4,
        name: "1-במסגרת ההסכם לעיל:",
        content: `במעמד ההסכם לעיל שילמה התובעת מקדמה בסך 10,000 ₪ בצ'ק (ז"פ 9.8.22) ע"ח הזמנת הפוד טראק, ובגינה קיבלה קבלה מס' 80008.     מצ"ב קבלה כנספח ב'.`,
    },
    {
        number: 5,
        name: "2-במסגרת ההסכם לעיל:",
        content: `בנוסף, הבטיח הנתבע במעמד החתימה כי הצפי לפתיחת המתחם ולהפעלת הפוד טראק יהיה עד תאריך 28.9.22.`,
    },
  ];
  return (
    <DocPageWrapper margin={"130px 110px 0 0"}>
      <Typography
        fWeight={"b"}
        value={"כתב תביעה"}
        underLine={true}
        location={"center"}
      />
      <SectionListContainer listTitle={"הצדדים:"} sectionList={section1} />
      <SectionListContainer listTitle={"הרקע להגשת תביעה זו:"} sectionList={section2} />
    </DocPageWrapper>
  );
};

export default DocPage1;
