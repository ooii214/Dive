import qs from 'query-string';

import client from 'lib/client';

class DiveService {
  public GetBoardsListAPI() {
    return client.get(`/v1/boards`, {});
  }
}

export default new DiveService();
