export const formatCamelCase = (camelCaseString: string) => {
  const formattedString = camelCaseString.replace(/([A-Z])/g, ' $1').toLocaleLowerCase();

  return formattedString.charAt(0).toUpperCase() + formattedString.slice(1);
};
