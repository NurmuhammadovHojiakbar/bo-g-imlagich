const unli = ["a", "e", "i", "u", "o", "A", "E", "I", "U", "O"];

function ajratgich(incoming) {
  const letters = incoming
    .replace("-", "")
    .replace(".", "")
    .replace("`", "'")
    .replace("‘", "'")
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
      if (
        unli.includes(letters[i - 1]) &&
        ["s", "S", "C", "c"].includes(letters[i]) &&
        ["H", "h"].includes(letters[i + 1]) &&
        unli.includes(letters[i + 2])
      ) {
        word += `-${letters[i]}`;
      } else if (
        unli.includes(letters[i - 2]) &&
        ["s", "S", "C", "c"].includes(letters[i - 1]) &&
        ["H", "h"].includes(letters[i]) &&
        !unli.includes(letters[i + 1])
      ) {
        word += `${letters[i]}-`;
      } else if (
        unli.includes(letters[i - 1]) &&
        unli.includes(letters[i + 1])
      ) {
        word += `-${letters[i]}`;
      } else if (
        unli.includes(letters[i - 1]) &&
        letters[i + 1] === "'" &&
        unli.includes(letters[i + 2]) &&
        letters[i - 2]
      ) {
        word += `-${letters[i]}`;
      } else if (
        unli.includes(letters[i - 2]) &&
        !unli.includes(letters[i - 1]) &&
        letters[i] === "'" &&
        !unli.includes(letters[i + 1])
      ) {
        word += `${letters[i]}-`;
      } else if (
        letters[i] === "'" &&
        !unli.includes(letters[i - 1]) &&
        unli.includes(letters[i - 2]) &&
        unli.includes(letters[i + 1]) &&
        !letters[i + 3]
      ) {
        word += `${letters[i]}-`;
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
        if (
          ["s", "S", "C", "c"].includes(letters[i]) &&
          ["H", "h"].includes(letters[i + 1])
        ) {
          word += `${letters[i]}`;
        } else if (
          letters[i] === "'" &&
          !unli.includes(letters[i + 1]) &&
          !unli.includes(letters[i + 2])
        ) {
          word += `${letters[i]}`;
        } else if (letters[i + 1] === "'") {
          word += `${letters[i]}`;
        } else if (
          unli.includes(letters[i - 1]) &&
          letters[i] === "'" &&
          !unli.includes(letters[i + 1])
        ) {
          word += `${letters[i]}-`;
        } else {
          word += `${letters[i]}-`;
        }
      } else if (letters[i - 1] === "'" && !unli.includes(letters[i + 1])) {
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

  return word;
}

/* const newwords = [];
"taom Imlo.uz — bu o'zbek tilining imlo lug'atidir. Sayt o'zbek tilidagi so'zlardan tarkib topgan. Saytimizda hozirgi zamon yoshlari hayotiga daxldor ommabop so'zlar, ko'p marotaba va qayta-qayta xato bilan yoziladigan so'zlar jamlashtirilgan. Mana shu so'zlar asosida yaratilgan imlo lug'ati sayti, 87 000 dan ortiq so'zni o'z ichiga olgan."
  .split(" ")
  .forEach((el) => {
    newwords.push(ajratgich(el));
  });

console.log(newwords.join(" "));
console.log(ajratgich("in'om"));
console.log(ajratgich("a'lo"));
console.log(ajratgich("a'lochi")); */
