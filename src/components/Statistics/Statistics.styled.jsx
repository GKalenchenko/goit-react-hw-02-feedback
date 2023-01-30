import styled from '@emotion/styled';

export const StatList = styled.ul`
  list-style: none;
`;

export const StatItem = styled.li`
  font-size: 16px;
  line-height: 1.1;
  font-weight: 500;
  text-transform: capitalize;

  color: #2b138aec;

  :last-child {
    margin-bottom: 15px;
  }
`;

export const StatCount = styled.p`
  font-size: 16px;
  line-height: 1.1;
  font-weight: 700;
  text-transform: capitalize;

  color: #191970;
`;
