const unli = ["a", "e", "i", "u", "o", "ŏ", "A", "E", "I", "U", "O"];

export default function ajratgich(incoming) {
  const letters = incoming
    .replace("-", "")
    .replace(".", "")
    .replace("‘", "'")
    .replace("`", "'")
    .replace("ʻ", "'")
    .replace("ʼ", "'")
    .replace("'", "'")
    .replace("`", "'")
    .replace("G'", "Ğ")
    .replace("g'", "ğ")
    .replace("O'", "Õ")
    .replace("o'", "ŏ")
    .replace("sh", "š")
    .replace("sH", "š")
    .replace("ch", "č")
    .replace("cH", "č")
    .replace("Sh", "Š")
    .replace("SH", "Š")
    .replace("Ch", "Č")
    .replace("CH", "Č")
    .split("");
  let word = "";
  if (incoming.length < 3) {
    word = incoming;
    return word;
  }
  if (incoming.length === 3) {
    if (
      unli.includes(letters[0]) &&
      !unli.includes(letters[1]) &&
      unli.includes(letters[2])
    ) {
      word += `${letters[0]}-${letters[1]}${letters[2]}`;
    } else {
      word = incoming;
    }
    return word;
  }
  word += letters[0];

  for (let i = 1; i < letters.length; i++) {
    if (letters[i + 1] && !unli.includes(letters[i])) {
      if (unli.includes(letters[i - 1]) && unli.includes(letters[i + 1])) {
        word += `-${letters[i]}`;
      } else if (
        unli.includes(letters[i - 1]) &&
        letters[i + 1] === "'" &&
        unli.includes(letters[i + 2]) &&
        letters[i - 2]
      ) {
        word += `-${letters[i]}`;
      } else if (
        unli.includes(letters[i - 1]) &&
        !unli.includes(letters[i + 1]) &&
        !unli.includes(letters[i + 2])
      ) {
        word += letters[i];
      } else if (
        !unli.includes(letters[i - 1]) &&
        !unli.includes(letters[i + 1]) &&
        unli.includes(letters[i + 2])
      ) {
        word += `${letters[i]}-`;
      } else if (
        unli.includes(letters[i - 1]) &&
        !unli.includes(letters[i + 1]) &&
        letters[i + 2]
      ) {
        word += `${letters[i]}-`;
      } else {
        word += `${letters[i]}`;
      }
    } else if (
      !unli.includes(letters[i - 1]) &&
      unli.includes(letters[i]) &&
      unli.includes(letters[i + 1])
    ) {
      word += `${letters[i]}-`;
    } else {
      word += letters[i];
    }
  }

  return word
    .replace("Ğ", "G'")
    .replace("Õ", "O'")
    .replace("ğ", "g'")
    .replace("ŏ", "o'")
    .replace("š", "sh")
    .replace("Š", "Sh")
    .replace("č", "ch")
    .replace("Č", "Ch");
}
