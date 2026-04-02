import { Pipe, PipeTransform } from '@angular/core';
import { Student } from '../models/student.model';

@Pipe({
  name: 'studentSearch',
  standalone: true,
  pure: false 
})
export class StudentSearchPipe implements PipeTransform {
  transform(students: Student[] | null | undefined, searchText: string): Student[] {
    // 1. Return empty if the data hasn't loaded yet
    if (!students) return [];

    // 2. CRITICAL: Return all students if search is empty (Auto-load behavior)
    if (!searchText || !searchText.trim()) {
      return students;
    }

    const lowerSearch = searchText.toLowerCase().trim();

    // 3. Filter logic with null-safety
    return students.filter(student => {
      const fName = (student.firstName || '').toLowerCase();
      const lName = (student.lastName || '').toLowerCase();
      const email = (student.email || '').toLowerCase();
      const city = (student.city || '').toLowerCase();
      const course = (student.course || '').toLowerCase();
      const id = student.studentId?.toString() || '';

      return fName.includes(lowerSearch) || 
             lName.includes(lowerSearch) || 
             email.includes(lowerSearch) || 
             city.includes(lowerSearch)  || 
             course.includes(lowerSearch) ||
             id.includes(lowerSearch);
    });
  }
}