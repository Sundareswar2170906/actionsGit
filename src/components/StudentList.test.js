import React from 'react';
import { render, screen } from '@testing-library/react';
import StudentList from './StudentList';

describe('StudentList', () => {
  it('renders the student list with names', () => {
    const students = [
      { name: 'Alice' },
      { name: 'Bob' },
      { name: 'Charlie' }
    ];
    render(<StudentList students={students} />);
    expect(screen.getByText('Student List'));
    expect(screen.getByText('Alice'));
    expect(screen.getByText('Bob'));
    expect(screen.getByText('Charlie'));
  });

  it('renders an empty list when no students are provided', () => {
    render(<StudentList students={[]} />);
    expect(screen.getByText('Student List'));
    // Should not find any list items
    expect(screen.queryAllByRole('listitem'));
  });
});
