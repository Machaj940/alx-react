import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

function CourseListRow ({ isHeader, textFirstCell, textSecondCell }) {
  let content;
  const background = { backgroundColor: isHeader ? '#deb5b545' : '#f5f5f5ab' };

  if (isHeader && textSecondCell === null) {
    content = <th colSpan='2'>{textFirstCell}</th>;
  }

  if (isHeader && textSecondCell !== null) {
    content = <><th className={css(styles.textAlign)}>{textFirstCell}</th><th className={css(styles.textAlign)}>{textSecondCell}</th></>;
  }

  if (!isHeader) {
    content = <><td>{textFirstCell}</td><td>{textSecondCell}</td></>;
  }

  return (
    <tr style={background} className={isHeader ? css(styles.trth) : css(styles.normal)}>
      {content}
    </tr>
  );
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null
};

const styles = StyleSheet.create({
  trth: {
    borderBottom: '1px solid #C8C8C8',
    fontWeight: 600,
  },

  textAlign: {
    textAlign: 'left',
  },

  normal: {
    fontWeight: 300,
  }
});

export default CourseListRow;
