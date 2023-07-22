// outside of a Vue file
import { Notify } from "quasar";

export const notify = (message, options = {}) => {
  Notify.create({
    message,
    ...options,
  });
};
