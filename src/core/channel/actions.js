export const channelActions = {
  LOAD_CHANNEL_BY_USER: 'LOAD_CHANNEL_BY_USER',
  LOAD_CHANNEL_BY_USER_FAILED: 'LOAD_CHANNEL_BY_USER_FAILED',
  LOAD_CHANNEL_BY_USER_FULFILLED: 'LOAD_CHANNEL_BY_USER_FULFILLED',

  SET_CURRENT_CHANNEL: 'SET_CURRENT_CHANNEL',
  ADD_MESSAGE: 'ADD_MESSAGE',

  loadChannelByUser: user => ({
    type: channelActions.LOAD_CHANNEL_BY_USER,
    payload: {user}
  }),

  loadChannelByUserFailed: error => ({
    type: channelActions.LOAD_CHANNEL_BY_USER_FAILED,
    payload: {error}
  }),

  loadChannelByUserFulfilled: channel => ({
    type: channelActions.LOAD_CHANNEL_BY_USER_FULFILLED,
    payload: {channel}
  }),
  
  setCurrentChannel: channel => ({
    type: channelActions.SET_CURRENT_CHANNEL,
    paeload: {channel}
  })

  
}
