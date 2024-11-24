export const generateResponse = (
  message: string,
  success: boolean,
  data: unknown = {}
) => ({
  message,
  success,
  data,
});
