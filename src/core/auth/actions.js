import firebase from 'firebase'

export const authActions = {
  SIGN_IN: 'SIGN_IN',
  SIGN_IN_FAILED: 'SIGN_IN_FAILED',
  SIGN_IN_FULFILLED: 'SIGN_IN_FULFILLED',

  SIGN_IN_WITH_POPUP: 'SIGN_IN_WITH_POPUP',
  SIGN_IN_WITH_POPUP_FAILED: 'SIGN_IN_WITH_POPUP_FAILED',
  SIGN_IN_WITH_POPUP_FULFILLED: 'SIGN_IN_WITH_POPUP_FULFILLED',

  SIGN_OUT: 'SIGN_OUT',
  SIGN_OUT_FAILED: 'SIGN_OUT_FAILED',
  SIGN_OUT_FULFILLED: 'SIGN_OUT_FULFILLED',

  signIn: (email, password) => ({
    type: authActions.SIGN_IN,
    payload: {email, password}
  }),

  signInFailed: error => ({
    type: authActions.SIGN_IN_FAILED,
    payload: {error}
  }),

  signInFulfilled: authUser => ({
    type: authActions.SIGN_IN_FULFILLED,
    payload: {authUser}
  }),

  signInWithPopup: authProvider => ({
    type: authActions.SIGN_IN_WITH_POPUP,
    payload: {authProvider}
  }),

  signInWithPopupFailed: error => ({
    type: authActions.SIGN_IN_WITH_POPUP_FAILED,
    payload: {error}
  }),

  signInWithPopupFulfilled: authUser => ({
    type: authActions.SIGN_IN_WITH_POPUP_FULFILLED,
    payload: {authUser}
  }),

  signInWithGithub: () => authActions.signInWithPopup(
    new firebase.auth.GithubAuthProvider()
  ),

  signInWithGoogle: () => authActions.signInWithPopup(
    new firebase.auth.GoogleAuthProvider()
  ),

  signInWithFacebook: () => authActions.signInWithPopup(
    new firebase.auth.FacebookAuthProvider()
  ),

  signOut: () => ({
    type: authActions.SIGN_OUT
  }),

  signOutFailed: error => ({
    type: authActions.SIGN_OUT_FAILED,
    payload: {error}
  }),

  signOutFulfilled: () => ({
    type: authActions.SIGN_OUT_FULFILLED
  })
}