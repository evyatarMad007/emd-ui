import React from "react";
interface SectionItemProps {
    section: {
        name: string;
        number: number;
        content: string;
    };
}
declare const SectionItem: React.FC<SectionItemProps>;
export default SectionItem;
