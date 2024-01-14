import fs from "fs/promises";
import path from "path";
import chalk from "chalk";
import dataValidate from "./helpers/dataValidator.js";
import checkExtension from "./helpers/checkExtension.js";

const log = console.log;

export const createFile = async (fileName, content) => {
  const file = {
    fileName,
    content,
  };

  const { error } = dataValidate(file);

  if (error) {
    log(chalk.bgRed(`Please, specify ${error.details[0].path[0]} param!`));
    return;
  }
  const { extension, result } = checkExtension(fileName);

  if (!result) {
    log(
      chalk.bgRed(
        `Sorry this app doesn't support file with ${extension} extension`
      )
    );
  }
};
