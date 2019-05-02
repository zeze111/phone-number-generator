import { storageLimit } from './storage';

export const validateLimit = arg => {
  let message = "";
  if (isNaN(arg)) {
    message = "Limit must be a number";
  } else if (arg > storageLimit) {
    message = `Limit cannot be more than ${storageLimit}`;
  } else if (!arg) {
    message = "Please enter a limit";
  } else {
    return (message = "passed");
  }
  return message;
};
