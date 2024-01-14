import { program } from "commander";
import { createFile } from "./files.js";

program
  .option("-a, --action <type>", "choose action")
  .option("-f, --fileName <type>", "enter file name")
  .option("-c, --content <type>", "enter content");

program.parse();

const options = program.opts();

async function invokeAction({ action, fileName, content }) {
  switch (action) {
    case "create":
      createFile(fileName, content);
      break;

    case "":
      break;

    case "":
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(options);
