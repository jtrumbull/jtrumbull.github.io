import fs from "fs/promises";
export default function ensureDirectory(dirname) {
  return new Promise((resolve, reject) => {
    fs.mkdir(dirname, { recursive: true })
      .then(resolve)
      .catch((err) => {
        if (err.code == "EEXIST") resolve();
        else reject(err);
      });
  });
}
