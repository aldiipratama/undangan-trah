window.addEventListener("load", () => {
  const form = document.getElementById("form-rsvp");
  const btnKirim = document.querySelector(".btn.kirim");
  const btnLoading = document.querySelector(".btn.load");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const action = e.target.action;
    btnKirim.classList.add("hidden");
    btnLoading.classList.remove("hidden");
    fetch(action, {
      method: "POST",
      body: data,
    })
      .then(() => {
        btnKirim.classList.remove("hidden");
        btnLoading.classList.add("hidden");
        Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
        }).fire({
          text: "Sukses Konfirmasi Kehadiran !",
          icon: "success",
        });
      })
      .catch((e) => {
        btnKirim.classList.remove("hidden");
        btnLoading.classList.add("hidden");
        Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
        }).fire({
          text: "Gagal Konfirmasi Kehadiran !",
          icon: "error",
        });
      });
  });
});
