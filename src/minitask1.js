import moment from "moment";


export function dateConversion(input) {

  if (input.length === 8 || input.length === 10) {
    let parsedDate;

    if (input.includes("-")) {
      parsedDate = moment(input, "DD-MM-YYYY", true);
    } else {
      parsedDate = moment(input, "DDMMYYYY", true);
    }

    if (!parsedDate.isValid()) {
      console.log(
        "Format tanggal tidak valid. Gunakan format DD-MM-YYYY atau DDMMYYYY (contoh: 24-01-2005 atau 24012005)."
      );
    } else {
      const convert = parsedDate.format("DD/MM/YYYY");
      console.log(`Tanggal setelah konversi: ${convert}`);
    }
  } else {
    console.log(
      "Tanggal melebihi batas karakter (gunakan DDMMYYYY atau DD-MM-YYYY)."
    );
  }
}
