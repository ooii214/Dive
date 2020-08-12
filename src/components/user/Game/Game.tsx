import React from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import Calendar from "assets/icons/calendar.png";
import SearchIcon from "assets/icons/search.png";
import Online from "assets/icons/online.png";
import Heart from "assets/icons/heart.png";
import Dia from "assets/icons/dia.png";

const Game = () => {
  return (
    <Wrap>
      <div className="membermenu">
        <ul>
          <li>
            <NavLink exact to="/user" activeClassName="active">
              회원목록
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/user/game" activeClassName="active">
              게임목록
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="search">
        <input type="text" placeholder="ID" className="id" />
        <input type="text" placeholder="Nickname" className="nickname" />
        <input type="text" className="date" />
        <span> ~ </span>
        <input type="text" className="date" />
        <button>
          <img src={SearchIcon} />
        </button>
      </div>

      <div className="table">
        <table>
          <tr>
            <td>No.</td>
            <td>Round</td>
            <td>아이디</td>
            <td>닉네임</td>
            <td>방</td>
            <td>승패</td>
            <td>카드</td>
            <td>기본배팅</td>
            <td>배팅금액</td>
            <td>게임 전 보유금액</td>
            <td>승 / 패 금액</td>
            <td>현재 보유금액</td>
            <td>게임시간</td>
          </tr>

          <tr>
            <td>200</td>
            <td>1122</td>
            <td>홍길동</td>
            <td>
              길동이 <img src={Online} />
            </td>
            <td>Lv.1</td>

            <td>승</td>
            <td>
              <span>
                <img src={Heart} />
              </span>
              <span>2</span>
              <span>
                <img src={Dia} />
              </span>
              <span>4</span>
            </td>
            <td>20,000</td>
            <td>20,000</td>
            <td>40,000</td>
            <td>10.000</td>
            <td>10.000</td>
            <td>2020.02.02 02:02</td>
          </tr>
        </table>
      </div>
    </Wrap>
  );
};
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
      background: url(${Calendar}) no-repeat;
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
          & > span {
            & > img {
              vertical-align: top;
              margin-right: 4px;
            }
          }
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
export default Game;
