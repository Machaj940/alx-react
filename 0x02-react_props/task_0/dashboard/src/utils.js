function getFullYear() {
  return new Date().getFullYear();
}

function getFooterCopy(isIndex) {
  if (isIndex) {
    return "Holberton School";
  }
  return "Holberton School main dashboard"
}

export default function getLatestNotification() {
  return {__html: '<strong style="font-weight: 900">Urgent requirement</strong> - complete by EOD'};
}

export { getFullYear, getFooterCopy }
