export default function updateStudentGradeByCity(students, city, newGrades) {
  const defaultGrade = { grade: 'N/A' };
  if (students instanceof Array) {
    return students
      .filter((x) => x.location === city)
      .map((x) => ({
        id: x.id,
        firstName: x.firstName,
        location: x.location,
        grade: (
          newGrades.filter((grade) => grade.studentId === x.id).pop()
          || defaultGrade
        ).grade,
      }));
  }
  return [];
}
