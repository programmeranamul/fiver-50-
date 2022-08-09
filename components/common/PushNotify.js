
import Notify from 'simple-notify'

export  function pushNotify(title) {
   console.log(title)
    new Notify({
      status: 'success',
      title: title,
      text: 'Notify text lorem ipsum',
      effect: 'fade',
      speed: 300,
      customClass: null,
      customIcon: null,
      showIcon: true,
      showCloseButton: true,
      autoclose: false,
      autotimeout: 3000,
      gap: 20,
      distance: 20,
      type: 1,
      position: 'right bottom'
    })
  }