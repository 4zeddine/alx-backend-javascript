export default function getStudentsByLocation(students, city) {
  if (students instanceof Array) {
    return students.filter((x) => x.location === city);
  }
  return [];
}
