import Swal from "sweetalert2";

export const notify = (type, text) => {
  return Swal.fire({
    position: "center",
    icon: type,
    title: text,
    showConfirmButton: false,
    timer: 2000
  });
};
