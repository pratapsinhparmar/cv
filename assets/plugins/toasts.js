// responseMessage('Hello friends', 'success');

function responseMessage(message, type) {
    var toastMixin = Swal.mixin({
        toast: true,
        icon: 'success',
        title: 'General Title',
        animation: false,
        position: 'top-right',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      });

    if(type == 'success') {
        // toastr.init(message);
        toastMixin.fire({
            animation: true,
            title: message
        });
    } else {
        // toastr.init(message);
        toastMixin.fire({
            title: message,
            icon: 'error'
        });
    }
}