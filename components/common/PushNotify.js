import Notify from "simple-notify";
import "simple-notify/dist/simple-notify.min.css";

export function pushNotify(title) {
  console.log(title);
  new Notify({
    status: "success",
    title: title,
    effect: "fade",
    speed: 300,
    customClass: null,
    customIcon: null,
    showIcon: true,
    showCloseButton: false,
    autoclose: true,
    autotimeout: 1500,
    gap: 20,
    distance: 20,
    type: 2,
    position: "right bottom",
  });
}
