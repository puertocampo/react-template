// import { Dispatch } from 'redux';
// import { fetchUser, setUser, clearUser } from '../actions/user';
// import api from '../../../common/apis/user';
// import { IUser } from '../../../common/types/user';
// import Amplify from '../../../common/utils/amplify';

// type Props = {
//   userId: string;
// };

// export const fetchUserProperty = ({ userId }: Props) => {
//   return async (dispatch: Dispatch) => {
//     dispatch(fetchUser());

//     const user = await api.sampleGetUser({
//       userId
//     });
//     // .catch(() => {});

//     return dispatch(setUser(user as IUser));
//   };
// };

// export const logout = () => {
//   return async (dispatch: Dispatch) => {
//     Amplify.signOut()
//       .then(() => {
//         dispatch(clearUser());
//         if (window.location.pathname !== '/login') {
//           window.location.pathname = '/login';
//         }
//       })
//       .catch(err => console.log('logout err', err));
//     return;
//   };
// };
