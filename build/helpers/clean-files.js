import cleanFile from "./clean-file.js";

export default function cleanFiles(filepaths) {
  var promises = [];
  for (var filepath of filepaths) {
    promises.push(cleanFile(filepath));
  }
  return Promise.all(promises);
}