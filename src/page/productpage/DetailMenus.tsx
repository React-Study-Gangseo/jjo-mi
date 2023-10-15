import React, { useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import styled from "styled-components";

const MenuStyle = styled.ul`
  width: 100%;
  display: flex;
  margin: 140px 0;
`;
const ListStyle = styled.li`
  border-bottom: 5px solid #e0e0e0;
  text-align: center;
  flex: 1 1 auto;
`;

const activeLinkStyle = {
  display: "block",
  padding: "20px 0",
  textDecoration: "none",
  color: "var(--main-color)",
  fontSize: "18px",
};

const inactiveLinkStyle = {
  display: "block",
  padding: "18px 0",
  // textDecoration: "none",
  fontSize: "18px",
  color: "var(--grey76)",
};

export const DetailMenus: React.FC = () => {
  const { id } = useParams();

  return (
    <div>
      <MenuStyle>
        <ListStyle>
          <NavLink
            to={`/kimchis/${id}/description`}
            style={({ isActive }) =>
              isActive ? activeLinkStyle : inactiveLinkStyle
            }
          >
            버튼
          </NavLink>
        </ListStyle>
        <ListStyle>
          <NavLink
            to={`/kimchis/${id}/recipe`}
            style={({ isActive }) =>
              isActive ? activeLinkStyle : inactiveLinkStyle
            }
          >
            리뷰
          </NavLink>
        </ListStyle>
        <ListStyle>
          <NavLink
            to={`/kimchis/${id}/review`}
            style={({ isActive }) =>
              isActive ? activeLinkStyle : inactiveLinkStyle
            }
          >
            Q&A
          </NavLink>
        </ListStyle>
        <ListStyle>
          <NavLink
            to={`/kimchis/${id}/review`}
            style={({ isActive }) =>
              isActive ? activeLinkStyle : inactiveLinkStyle
            }
          >
            반품/교환정보
          </NavLink>
        </ListStyle>
      </MenuStyle>
    </div>
  );
};
