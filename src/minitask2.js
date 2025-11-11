export function withoutPackage(input){
   let dateArray = input.split("-");
  input = new Date(`${dateArray[0]}-${dateArray[1]}-${dateArray[2]}`);
  if (!isNaN(input)) {
    const convert = `${dateArray[0]}/${dateArray[1]}/${dateArray[2]}`;
    console.log(`date setelah di konversi${convert}`);
  } else {
    console.log("Format yang dimasukan salah");
  }
}