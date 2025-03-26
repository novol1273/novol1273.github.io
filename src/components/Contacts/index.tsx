import styled from "@emotion/styled";
import { type FC } from "react";
import { LAYOUT_WIDTH } from "../../constants.ts";
import ContactItem from "./item";
import { IContactsProps } from "./types.ts";

const Contacts: FC<IContactsProps> = ({ list, className }) => {
  return (
    <Root className={className}>
      {list.map((contactItem, index) => (
        <ContactItem item={contactItem} key={`${index}-${contactItem.value}`} />
      ))}
    </Root>
  );
};

const Root = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  @media (max-width: ${LAYOUT_WIDTH.MD}) {
    margin-left: auto;
  }
`;

export default Contacts;
