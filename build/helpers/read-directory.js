import fs from "fs/promises";
export default function readDirectory(dirname, options) {
  return new Promise((resolve, reject) => {
    fs.readdir(dirname, options)
      .then(resolve)
      .catch((err) => {
        if (err.code == "ENOENT") resolve([]);
        else reject(err);
      });
  });
}
