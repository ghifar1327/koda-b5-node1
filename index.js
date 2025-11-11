import { dateConversion } from "./src/minitask1.js";
import { withoutPackage } from "./src/minitask2.js";

import { createInterface } from "node:readline";
let rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Masukan input (DD-MM-YYYY) ", (answer) => {
  //   dateConversion(answer);
  withoutPackage(answer);
  rl.close();
});
