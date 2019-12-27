import Swal from 'sweetalert2';


export const notify = (type, text) => {
    return Swal.fire({
        type,
        text,
        title: '',
        showConfirmButton: true,
        timer: 1500
    })
}
