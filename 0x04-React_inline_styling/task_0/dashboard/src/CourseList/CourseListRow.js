import PropTypes from 'prop-types';
import './CourseList.css';

function CourseListRow({isHeader, textFirstCell, textSecondCell}) {
  let content;
  const background = {backgroundColor: isHeader?"#deb5b545":"#f5f5f5ab"};
  
  if (isHeader && textSecondCell === null) {
    content = <th colSpan="2">{textFirstCell}</th>;
  }

  if (isHeader && textSecondCell !== null) {
    content = <><th className='course_name_header'>{textFirstCell}</th><th className='credit_header'>{textSecondCell}</th></>;
  }

  if (!isHeader) {
    content = <><td>{textFirstCell}</td><td>{textSecondCell}</td></>;
  }
  
  return (
    <tr style={background}>
      {content}
    </tr>
  )
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
}

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null
};

export default CourseListRow