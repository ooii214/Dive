/* eslint-disable no-restricted-globals */
import React, { useState, useCallback } from 'react';
import styled from 'styled-components';

import UserItem from './item';
import { Link, NavLink } from 'react-router-dom';
import { DiveType } from 'stores/dive/types';
// import gopax from 'components/user/gopax';
interface Props {
  diveList: DiveType[];
}

function User({ diveList }: Props) {
  const [modal, setModal] = useState<boolean>(false);

  return (
    <>
      <Wrap>
        <div className='membermenu'>
          <ul>
            <li>
              <NavLink exact to='/' activeClassName='active'>
                회원목록
              </NavLink>
            </li>
          </ul>
        </div>

        <div className='table'>
          <table>
            <tr>
              <td>_id</td>
              <td>content</td>
              <td>nickName</td>
              <td>created</td>
            </tr>

            <tr>
              {diveList.map((data, idx) => (
                <UserItem key={idx} data={data} />
              ))}
            </tr>
          </table>
        </div>
      </Wrap>
    </>
  );
}

const Wrap = styled.div`
  width: 100%;
  height: 100%;

  & > .membermenu {
    width: 100%;
    margin-top: 40px;

    border-bottom: 2px solid #555;
    & > ul {
      overflow: hidden;
      & > li {
        & > a {
          width: 150px;
          float: left;

          cursor: pointer;

          padding: 15px 0;
          border-radius: 7px 7px 0 0;

          text-align: center;
          font-size: 14px;
          color: #333;
        }
      }
      & > li > a.active {
        background: #555;
        color: #fff;
      }
    }
  }
  & > .search {
    width: 100%;
    padding: 20px 0;
    & > .id {
      width: 200px;
      height: 35px;
      background: #ffffff;
      border: 1px solid #cccccc;

      border-radius: 7px;

      padding-left: 12px;

      ::placeholder {
        color: #ccc;
        font-size: 12px;
      }
    }

    & > .nickname {
      width: 200px;
      height: 35px;
      background: #ffffff;
      border: 1px solid #cccccc;

      border-radius: 7px;

      padding-left: 12px;
      margin-left: 20px;

      ::placeholder {
        color: #ccc;
        font-size: 12px;
      }
    }

    & > .date {
      width: 200px;
      height: 35px;
      background: #ffffff;
      border: 1px solid #cccccc;

      border-radius: 7px;

      padding: 0 12px;
      margin-left: 20px;
      margin-right: 20px;
      background-position: 95% 50%;

      ::placeholder {
        color: #ccc;
        font-size: 12px;
      }
    }

    & > span {
      color: #333;
    }

    & > button {
      width: 70px;
      height: 35px;

      background: #555555;
      border-radius: 5px;

      border: none;
      vertical-align: top;
    }
  }

  & > .table {
    width: 100%;
    & > table {
      width: 100%;
      text-align: center;
      font-size: 12px;
      color: #333;
      & > tr {
        & > td {
          padding: 10px 0;
        }
      }
      & > tr:nth-child(1) {
        background: #eee;
      }

      & > tr:nth-child(2) {
        & > td:nth-child(16) {
          cursor: pointer;
        }
      }
    }
  }
`;

export default User;
