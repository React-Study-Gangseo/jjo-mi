import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

// 스타일
const MenuStyle = styled.ul`
  width: 100%;
  display: flex;
  margin: 140px 0;
`;
const TabStyle = styled.li<{ isActive: boolean }>`
  border-bottom: 5px solid
    ${(props) => (props.isActive ? "var(--main-color)" : "var(--grayE0)")};
  text-align: center;
  flex: 1 1 auto;
  cursor: pointer;
`;

const linkStyle = {
  display: "block",
  padding: "1.25rem 0",
  fontSize: "1.125rem",
};

const activeLinkStyle = {
  ...linkStyle,
  color: "var(--main-color)",
};

const inactiveLinkStyle = {
  ...linkStyle,
  color: "var(--grey76)",
};

const ContentContainer = styled.div`
  margin-top: 1.25rem;

  text-align: center;
  height: 30rem;
`;

const tabs = [
  { id: "description", label: "상세정보" },
  { id: "recipe", label: "리뷰" },
  { id: "review", label: "Q&A" },
  { id: "returnExchange", label: "반품/교환정보" },
];

export const DetailMenus: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState(tabs[0].id);

  const handleTabClick = (tabId: string) => {
    setSelectedTab(tabId);
  };

  return (
    <div>
      <MenuStyle>
        {tabs.map((tab) => (
          <TabStyle
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            isActive={selectedTab === tab.id}
          >
            <div
              style={
                selectedTab === tab.id ? activeLinkStyle : inactiveLinkStyle
              }
            >
              {tab.label}
            </div>
          </TabStyle>
        ))}
      </MenuStyle>
      <ContentContainer>
        {selectedTab === "description" && <div>상세정보 페이지</div>}
        {selectedTab === "recipe" && <div>리뷰 페이지</div>}
        {selectedTab === "review" && <div>Q&A 페이지</div>}
        {selectedTab === "returnExchange" && <div>반품/교환정보 페이지</div>}
      </ContentContainer>
    </div>
  );
};
