


const students = [
  {
    name: "Luiz",
    firstExam: 7,
    secondExam: 8,
  },
  {
    name: "Thiago",
    firstExam: 6,
    secondExam: 9,
  },
  {
    name: "Mara",
    firstExam: 5,
    secondExam: 4,
  }
];

// Loop pelos alunos para calcular a média e verificar as notas
for (let student of students) {
  const average = (student.firstExam + student.secondExam) / 2;

  if (average >= 7) {
    alert("Parabéns, " + student.name + "! Sua média foi de: " + average);
  } else {
    alert(student.name + ", não foi dessa vez. Tente novamente. Sua média foi de: " + average);
  }
}

