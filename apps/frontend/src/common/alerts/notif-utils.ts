import { toastr } from 'react-redux-toastr';

/**
 * Invoke a toastr success notifier
 * @param bodyMessage Message text for notif body
 * @param title Title for notification (default: "Success")
 */
export const NotifySuccess = (
  bodyMessage: string,
  title: string = 'Success'
) => {
  toastr.success(title, bodyMessage);
};

/**
 * Invoke a toastr warning notifier
 * @param bodyMessage Message text for notif body
 * @param title Title for notification (default: "Warning")
 */
export const NotifyWarning = (
  bodyMessage: string,
  title: string = 'Warning'
) => {
  toastr.warning(title, bodyMessage);
};

/**
 * Invoke a toastr error notifier
 * @param bodyMessage Message text for notif body
 * @param title Title for notification (default: "Error")
 */
export const NotifyError = (bodyMessage: string, title: string = 'Error') => {
  toastr.error(title, bodyMessage);
};

/**
 * Invoke a toastr info notifier
 * @param bodyMessage Message text for notif body
 * @param title Title for notification (default: "Info")
 */
export const NotifyInfo = (bodyMessage: string, title: string = 'Info') => {
  toastr.info(title, bodyMessage);
};
