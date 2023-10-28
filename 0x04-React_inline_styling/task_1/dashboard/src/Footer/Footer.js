import { getFullYear, getFooterCopy } from '../utils';
import { StyleSheet, css } from 'aphrodite';

function Footer() {
  const year = getFullYear();
  const footerText = getFooterCopy(true);

  return (
    <div className={css(styles.Footer)}>
      <p>Copyright {year} - {footerText}</p>
    </div>
  )
}

const styles = StyleSheet.create({
  Footer: {
    position: 'fixed',
    bottom: 0,
    width: '100%',
    textAlign: 'center',
    fontStyle: 'italic',
    borderTop: '3px solid #FF5A5F',
  },
});

export default Footer