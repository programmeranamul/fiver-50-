import copy from "copy-text-to-clipboard";
import { pushNotify } from './../components/common/PushNotify';

export function copyText(text) {
  pushNotify("Copied to clipboard");
}
