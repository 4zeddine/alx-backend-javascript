export default function getListStudentIds(students) {
  if (students instanceof Array) {
    return students.map((x) => x.id);
  }
  return [];
}
