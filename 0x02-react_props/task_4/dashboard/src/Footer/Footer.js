import { getFullYear, getFooterCopy } from '../utils'
import './Footer.css'

export default function Footer() {
  const year = getFullYear();
  const footerText = getFooterCopy(true);

  return (
    <div className="App-footer">
      <p>Copyright {year} - {footerText}</p>
    </div>
  )
}