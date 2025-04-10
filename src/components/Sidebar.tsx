import styled from "@emotion/styled";
import { LAYOUT_WIDTH } from "../constants.ts";
import { transition } from "../utils/transition-styled.ts";
import Contacts from "./Contacts/index.tsx";
import ThemeSwitch from "./ThemeSwitch.tsx";

const DEFAULT_CONTACTS = [
  {
    label: "Telephone",
    value: "+44 1632 960515",
    type: "tel",
  },
  {
    label: "Email",
    value: "hello@granthudison.co.uk",
    type: "email",
  },
  {
    label: "Website",
    value: "www.granthudson.co.uk",
  },
];

const Sidebar = () => {
  return (
    <Root>
      <UserContainer>
        <PhotoWrapper>
          <ThemeSwitch />
          <Photo>
            <img src="/image/photo.JPG" alt="photo image" />
          </Photo>
        </PhotoWrapper>
        <NameContainer>
          <Name>13Evgenii Kolesnik</Name>
          <Position>Frontend Developer</Position>
        </NameContainer>
      </UserContainer>
      <Contacts list={DEFAULT_CONTACTS} />
    </Root>
  );
};

const UserContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 8px;

  @media (max-width: ${LAYOUT_WIDTH.MD}) {
    flex-direction: row;
    align-items: start;
  }

  @media (max-width: 540px) {
    flex-direction: column;
  }
`;

const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 44px;

  ${transition(["height"])};

  @media (max-width: ${LAYOUT_WIDTH.MD}) {
    height: 100%;
  }
`;

const Root = styled.div`
  ${transition(["background", "border-color"])};
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 8px;
  background: ${(p) => p.theme.colorBackgroundSecondary};
  padding: 12px;
  border-right: 1px solid ${(p) => p.theme.colorPrimary};
  border-bottom: 0 solid ${(p) => p.theme.colorPrimary};

  @media (max-width: ${LAYOUT_WIDTH.MD}) {
    flex-direction: row;
    height: initial;
    border-right: 0 solid ${(p) => p.theme.colorPrimary};
    border-bottom: 1px solid ${(p) => p.theme.colorPrimary};
  }

  @media (max-width: ${LAYOUT_WIDTH.SM}) {
    //flex-direction: column;
  }
`;

const PhotoWrapper = styled.div`
  position: relative;
  margin-left: 31px;
  margin-right: 31px;

  ${transition(["margin"])};

  @media (max-width: ${LAYOUT_WIDTH.MD}) {
    margin-left: 0;
    margin-right: 0;
  }
`;

const Photo = styled.div`
  width: 146px;
  height: 146px;
  border: 3px solid ${(p) => p.theme.colorPrimary};
  border-radius: 8px 0 8px 8px;
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Name = styled.p`
  color: ${(p) => p.theme.colorText};
  font-size: 20px;
`;

const Position = styled.p`
  color: ${(p) => p.theme.colorSecondaryText};
  font-size: 16px;
`;

export default Sidebar;
