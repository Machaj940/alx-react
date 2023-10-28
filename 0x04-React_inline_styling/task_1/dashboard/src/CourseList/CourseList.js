import CourseListRow from './CourseListRow';
import { CourseShape }  from './CourseShape';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

export default function CourseList() {
  return (
    <table className={css(styles.table)}>
      <thead>
        <CourseListRow textFirstCell="Available courses" isHeader={true} />
        <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} />
      </thead>
      <tbody>
        <CourseListRow textFirstCell="ES6" textSecondCell="60" isHeader={false} />
        <CourseListRow textFirstCell="Webpack" textSecondCell="20" isHeader={false} />
        <CourseListRow textFirstCell="React" textSecondCell="40" isHeader={false} />
      </tbody>
    </table>
  )
}

/*export default function CourseList({listCourses}) {
  let content;

  if (!listCourses) {
    content = [];
  }

  if (listCourses.length === 0) {
    content = <tr>No course available yet</tr>
  }

  if (listCourses.length >= 1) {
    content = listCourses.map(row =>
      <>
        <tr key={row.id}>
          <td>{row.name}</td>
          <td>{row.credit}</td>
        </tr>
      </>
  )};
  
  return (
    <>{content}</>
  )
}*/

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape)
}

const styles = StyleSheet.create({
  table: {
    border: '1px solid #C8C8C8',
    width: '90%',
    margin: 'auto',
    marginTop: 40,
  },
});