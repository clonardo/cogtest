/**
 * Errors can come in many forms. Here, force them to be strings.
 * @param err Error object/string/whatever
 * @param fallbackText optionally override generic error text. Default: "An error has occurred"
 */
export const SanitizeError = (
  err: any,
  fallbackText: string = 'An error has occurred'
): string => {
  const unknownError: string =
    fallbackText && fallbackText.length
      ? fallbackText
      : 'An error has occurred';
  if (err) {
    if (typeof err == 'string') {
      return err;
    } else if (typeof err == 'object') {
      if (err.displayMsg) {
        // handles IStreamingResponseFromServer
        return err.displayMsg;
      } else {
        try {
          const stringified = JSON.stringify(err);
          return stringified;
        } catch (e) {
          return unknownError;
        }
      }
    } else {
      return unknownError;
    }
  } else {
    return unknownError;
  }
};
