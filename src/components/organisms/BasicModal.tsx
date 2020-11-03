// import React from 'react';
// import Modal from 'react-modal';
// import styled from 'styled-components';

// const modalStyles: Modal.Styles = {
//   overlay: {
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     paddingTop: 80,
//     paddingRight: 24,
//     paddingBottom: 100,
//     paddingLeft: 24,
//     zIndex: 102
//   },
//   content: {
//     position: 'relative',
//     margin: '0 auto',
//     height: '100%',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     background: '#fff',
//     border: 'none',
//     overflow: 'auto',
//     WebkitOverflowScrolling: 'touch',
//     borderRadius: '0',
//     outline: 'none',
//     padding: '0',
//     boxShadow: '0 0 10px 3px rgba(0, 0, 0, 0.15)'
//   }
// };

// interface Props {
//   open: boolean;
//   onClickClose(): void;
// }

// Modal.setAppElement('#root');

// const BasicModal: React.FC<Props> = props => {
//   return (
//     <Modal
//       isOpen={props.open}
//       onRequestClose={props.onClickClose}
//       style={modalStyles}
//     ></Modal>
//   );
// };

// export default BasicModal;
