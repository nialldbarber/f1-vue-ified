function getAge(birthDate?: string, deathDate?: string) {
  let date;
  if (deathDate) {
    date = Math.floor(
      (new Date(deathDate) - new Date(birthDate).getTime()) / 3.15576e10
    );
  } else {
    date = Math.floor(
      (new Date() - new Date(birthDate).getTime()) / 3.15576e10
    );
  }
  return date;
}

export {getAge};
