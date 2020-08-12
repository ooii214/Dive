import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import DiveStore from 'stores/dive';
import { inject, observer } from 'mobx-react';
import { withCookies, ReactCookieProps } from 'react-cookie';
import { withRouter, RouteComponentProps } from 'react-router';
// import theme from 'styles/theme';
import Pokernotice from 'assets/icons/poker-notice.png';
import Member from 'assets/icons/poker-member.png';

interface Props extends ReactCookieProps, RouteComponentProps {
  diveStore?: DiveStore;
  title: string;
  children?: React.ReactNode;
}

@inject('diveStore')
@observer
class BaseTemplate extends React.Component<Props> {
  private DiveStore = this.props.diveStore! as DiveStore;

  logout = () => {
    this.DiveStore.logout();

    this.props.history.push('/');
  };

  items = () => {};

  render() {
    return (
      <Wrap>
        <div className='header'>
          <div>
            <h2>LOGO</h2>
          </div>

          <div className='admin'>
            <ul>
              <li>Admin</li>
              <li>
                <button onClick={this.logout}>logout</button>
              </li>
              <li>
                <img src={Pokernotice} />
              </li>
            </ul>
          </div>
        </div>

        <section>{this.props.children}</section>
      </Wrap>
    );
  }
}

const Wrap = styled.div`
  width: 100vw;
  min-width: 1600px;
  height: 100vh;

  & > .header {
    background: #444;
    width: 100%;

    overflow: hidden;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 20px 30px;

    & > div {
      width: 210px;
      float: left;
      & > h2 {
        color: white;
        font-size: 18px;
      }
    }

    & > .player {
      width: 700px;
      float: left;
      & > div {
        float: left;
        margin-right: 40px;
        & > p {
          margin: 0;
          color: #dcdcdc;
          font-size: 13px;
          & > img {
            width: 24px;
            height: 24px;
            vertical-align: top;
          }
          & > b {
            color: #007fdb;
            font-size: 18px;
            margin-left: 8px;
          }
        }
      }

      & > .roomplayer {
        width: 370px;
        float: left;
        margin-right: 0;
        & > ul {
          padding-top: 7px;
          overflow: hidden;

          & > li {
            margin-left: 20px;
            float: left;
            & > p:nth-child(1) {
              font-size: 14px;
              color: #fff;
            }
            & > p:nth-child(2) {
              font-size: 12px;
              color: #dcdcdc;
            }
          }
          & > li:nth-child(1) {
            margin-left: 0;
          }
        }
      }
    }

    & > .statistics {
      width: 780px;

      & > p {
        font-size: 14px;
        color: #fff;
        display: inline-block;
        margin-right: 38px;
        & > b {
          font-size: 16px;
          color: #007fdb;
          margin-left: 20px;
        }
      }
      & > p:nth-child(3) {
        margin-right: 0;
      }
    }

    & > .admin {
      width: 210px;
      float: right;

      & > ul {
        overflow: hidden;
        float: right;
        & > li {
          float: left;
          margin-left: 14px;
          color: white;
          font-size: 14px;

          & > button {
            width: 60px;
            height: 25px;
            border-radius: 4px;
            border: 1px solid #ffffff;
            font-size: 12px;
            color: #fff;
            background: transparent;
            vertical-align: top;
          }

          & > img {
            width: 22px;
            height: 22px;
          }
        }
      }
    }
  }
  & > .menu {
    width: 100%;
    background: #eee;
    border-bottom: 2px solid #555;
    & > ul {
      overflow: hidden;
      & > li {
        padding: 15px 0;
        float: left;
        width: 140px;
        border-radius: 7px 7px 0px 0px;

        cursor: pointer;

        text-align: center;
        color: #333;
        font-size: 13px;
      }
      & > li:nth-child(1) {
        background: #555;
        color: #fff;
      }
    }
  }

  & > section {
    padding: 0 30px;
  }
`;

export default withCookies(withRouter(BaseTemplate));
