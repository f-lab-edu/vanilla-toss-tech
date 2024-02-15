export const formatDate = (inputDate) => {
  return inputDate.replace(/(\d{4})(\d{2})(\d{2})/, '$1.$2.$3');
};
