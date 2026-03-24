import { Pipe, PipeTransform } from '@angular/core';
import { Student } from '../models/student.model';

@Pipe({
  name: 'studentSearch',
  standalone: true
})
export class StudentSearchPipe implements PipeTransform {

  transform(students: Student[], searchText: string): Student[] {
    if (!students || !searchText) {
      return students;
    }

    // Convert search text to lowercase for case-insensitive search
    const lowerSearch = searchText.toLowerCase();

    return students.filter(student => {
      return (
        student.firstName?.toLowerCase().includes(lowerSearch) ||
        student.lastName?.toLowerCase().includes(lowerSearch) ||
        student.email?.toLowerCase().includes(lowerSearch) ||
        student.studentId?.toString().includes(lowerSearch)
      );
    });
  }
}