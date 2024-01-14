import fs from "fs/promises";
import path from "path";
import dataValidate from "./helpers/dataValidator.js";

export const createFile = async (fileName, content) => {
  const file = {
    fileName,
    content,
  };

  const { error } = dataValidate(file);

  if (error) {
    console.log(`Please, specify ${error.details[0].path[0]} param!`);
    return;
  }
};
