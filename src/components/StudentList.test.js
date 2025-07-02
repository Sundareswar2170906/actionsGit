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
    expect(screen.getByText('Student List')).toBeInTheDocument();
    expect(screen.getByText('Alice')).toBeInTheDocument();
    expect(screen.getByText('Bob')).toBeInTheDocument();
    expect(screen.getByText('Charlie')).toBeInTheDocument();
  });

  it('renders an empty list when no students are provided', () => {
    render(<StudentList students={[]} />);
    expect(screen.getByText('Student List')).toBeInTheDocument();
    // Should not find any list items
    expect(screen.queryAllByRole('listitem')).toHaveLength(0);
  });
});
