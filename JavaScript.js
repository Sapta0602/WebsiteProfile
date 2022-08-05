function ValidasiEmail(input) {
    var karakterValidasi= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (input.value.match(karakterValidasi)) {
      alert("Pesan Terkirim!");
      document.form1.text1.focus();
      return true;
    }else {
      alert("Pesan Tidak Terkirim, Silahkan Periksa Email Anda !!");
      document.form1.text1.focus();
      return false;
    }
  }