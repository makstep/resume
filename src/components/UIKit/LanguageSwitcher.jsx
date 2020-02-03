// @flow
import React from 'react';

// Libs
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

// Routes
import * as routes from '../../routes';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 28px;
  width: 70px;
  border-bottom: 1px solid #000000;

  @media print {
    display: none;
  }
`;

const LanguageLink = styled(NavLink)`
  font-style: normal;
  font-weight: 300;
  font-size: 22px;
  line-height: 24px;
  text-decoration: none;

  color: ${({ isSelected }) => (isSelected ? '#000000' : '#E2E2E2')};
  cursor: ${({ isSelected }) => (isSelected ? 'default' : 'pointer')};
`;

export default function(_props: any) {
  return (
    <Wrapper>
      <LanguageLink
        to={routes.ru}
        isSelected={
          window.location.pathname === routes.routeWithBaseURL(routes.ru)
        }
      >
        RU
      </LanguageLink>
      <LanguageLink
        to={routes.en}
        isSelected={
          window.location.pathname === routes.routeWithBaseURL(routes.en)
        }
      >
        EN
      </LanguageLink>
    </Wrapper>
  );
}
