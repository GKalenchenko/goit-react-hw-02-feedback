import styled from '@emotion/styled';

export const ButtonList = styled.ul`
  list-style: none;

  display: flex;
  height: 60px;
`;

export const Button = styled.button`
  font-size: 30px;
  line-height: 1.4;
  font-weight: 400;
  text-transform: capitalize;

  background-color: #000080;

  color: #e8e8e8;

  padding: 4px 10px 4px 10px;

  border: 2px solid #f5f5f5;
  border-radius: 5px;

  user-select: none;
  cursor: pointer;
  transition: color 250ms cubic-bezier(0.1, 0.7, 0.6, 0.9),
    font-weight 150ms cubic-bezier(0.1, 0.7, 0.6, 0.9),
    background-color 150ms cubic-bezier(0.1, 0.7, 0.6, 0.9),
    box-shadow 150ms cubic-bezier(0.1, 0.7, 0.6, 0.9),
    font-size 150ms cubic-bezier(0.1, 0.7, 0.6, 0.9),
    border 150ms cubic-bezier(0.1, 0.7, 0.6, 0.9);

  :hover {
    font-weight: 500;
    font-size: 35px;

    border: none;

    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
      rgba(0, 0, 0, 0.22) 0px 10px 10px;
    :not(:last-child) {
      margin-right: 4px;
    }
  }
`;

// export const ButtonWrapper = styled.li`
// :not(:last-child) {
//   margin-right: 4px;
// }
// `;

// color: ${({ buttonType }) => {
//   let color = null;
//   switch (buttonType) {
//     case 'good':
//       color = '#0BDA51';
//       break;
//     case 'neutral':
//       color = '	#A9A9A9';
//       break;
//     case 'bad':
//       color = '	#FF3131 ';
//       break;
//     default:
//       throw new Error('unexpected button');
//   }
//   return color;
// }};
// background-color: ${({ buttonType }) => {
//   let color = null;
//   switch (buttonType) {
//     case 'good':
//       color = '#228B22';
//       break;
//     case 'neutral':
//       color = '	#808080';
//       break;
//     case 'bad':
//       color = '	#A80000  ';
//       break;
//     default:
//       throw new Error('unexpected button');
//   }
//   return color;
// }};
