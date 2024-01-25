export type GenderType = "M" | "F";
interface PersonalData {
  name: string;
  surname: string;
  gender: GenderType;
  dateOfBirth: string; // 'DD/MM/YYYY'
}

function generateSurnameCode(surname: string) {
  let consonants = "";
  let vowels = "";
  for (let char of surname.toUpperCase()) {
    if (consonants.length === 3) break;
    if (/[BCDFGHJKLMNPQRSTVWXYZ]/.test(char)) {
      consonants += char;
    } else if (/[AEIOU]/.test(char) && char !== "Y") {
      // Specidified in the instructions Y to be not taken as a vowel
      vowels += char;
    }
  }

  if (consonants.length < 3) {
    consonants += vowels.padEnd(3, "X");
  }

  return consonants.slice(0, 3);
}

function generateNameCode(name: string) {
  let consonants = "";
  let vowels = "";

  for (let char of name.toUpperCase()) {
    if (consonants.length === 3) break;
    if (/[BCDFGHJKLMNPQRSTVWXYZ]/.test(char)) {
      consonants += char;
    } else if (/[AEIOU]/.test(char) && char !== "Y") {
      //Same here
      vowels += char;
    }
  }

  if (consonants.length < 3) {
    consonants += vowels.padEnd(3, "X");
  }

  return consonants.slice(0, 3);
}

function generateDateOfBirthCode(dateOfBirth: string, gender: "M" | "F") {
  const [day, month, year] = dateOfBirth.split("/").map(Number);
  const monthCode = getMonthCode(month);
  //adding 0 infront until its length reaches 2 here
  const dayCode =
    gender === "M" ? String(day).padStart(2, "0") : String(day + 40);
  const yearCode = String(year).slice(-2);

  return `${yearCode}${monthCode}${dayCode}`;
}

function getMonthCode(month: number) {
  const monthCodes = "ABCDEHLMPRST".split("");
  return monthCodes[month - 1];
}

export function generateFiscalCode(personalData: PersonalData) {
  const surnameCode = generateSurnameCode(personalData.surname);
  const nameCode = generateNameCode(personalData.name);
  const birthCode = generateDateOfBirthCode(
    personalData.dateOfBirth,
    personalData.gender
  );

  return `${surnameCode}${nameCode}${birthCode}`;
}
