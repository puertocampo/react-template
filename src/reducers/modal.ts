// import { Reducer, Action } from 'redux';

// type DefaultModalState = { open: boolean };
// export type ModalsState = {
//   addUserModal: DefaultModalState;
// };

// const initialModalState = { open: false };
// const initialState: ModalsState = {
//   addUserModal: initialModalState,
// };

// export type ModalsAction = {
//   target: keyof ModalsState;
//   modalProps: { [key: string]: any };
// } & Action;

// export const OPEN_MODAL = 'OPEN_MODAL';
// export const CLOSE_MODAL = 'CLOSE_MODAL';

// const modalsReducer: Reducer<ModalsState, ModalsAction> = (
//   state = initialState,
//   action
// ) => {
//   switch (action.type) {
//     case OPEN_MODAL:
//       return {
//         ...state,
//         [action.target]: {
//           open: true,
//           ...action.modalProps
//         }
//       };
//     case CLOSE_MODAL:
//       return {
//         ...state,
//         [action.target]: {
//           open: false
//         }
//       };
//     default:
//       return state;
//   }
// };

// export default modalsReducer;
