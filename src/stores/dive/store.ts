import { observable, flow, computed, action } from 'mobx';

import BaseStore from 'stores/BaseStore';
import RootStore from 'stores';

import { DiveType } from './types';
import DiveService from 'services/dive/DiveService';
import client from 'lib/client';

class DiveStore extends BaseStore {
  root: RootStore;

  constructor(root: RootStore) {
    super();
    this.root = root;
  }

  @observable
  private _isLoggedIn = false;

  @observable
  private _userType?: number;

  @observable
  private _diveList: DiveType[] = [];

  @computed
  get IsLoggedIn() {
    return this._isLoggedIn;
  }

  @computed
  get UserType() {
    return this._userType;
  }

  @computed
  get DiveList() {
    return this._diveList;
  }

  @action
  public logout() {
    this._isLoggedIn = false;
    this._userType = undefined;
  }

  GetBoardsList = flow(function* (this: DiveStore) {
    this._init('GET_BOARDS_LIST');

    try {
      const {
        data: res,
      }: {
        data: ApiResult<DiveType[]>;
      } = yield DiveService.GetBoardsListAPI();
      // const DiveType = res;

      // client.defaults.headers.common[
      //   "Authorization"
      // ] = `Bearer ${access_token}`;

      this._diveList = res.data;

      this._success['GET_ASSETS_LIST'] = true;
    } catch (e) {
      this._failure['GET_ASSETS_LIST'] = [true, e];
    } finally {
      this._pending['GET_ASSETS_LIST'] = false;
    }
  });
}

export default DiveStore;
