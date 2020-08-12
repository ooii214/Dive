import React, { useCallback } from 'react';
import styled from 'styled-components';
import theme from 'styles/theme';
import { DiveType } from 'stores/dive/types';

interface Props {
  data: DiveType;
}

function UserItem({ data }: Props) {
  return (
    <Wrap>
      <div style={{ width: '10%' }}>{data._id}</div>
      <div style={{ width: '45%' }}>{data.content}</div>
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 100%;
  height: 50px;

  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.14);
  border-radius: 5px;

  display: flex;
  align-items: center;

  font-size: 18px;
  color: #888888;

  padding: 0 20px;

  margin-bottom: 16px;

  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default UserItem;
