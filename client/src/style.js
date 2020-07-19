const priceGuarantee = {
  backgroundImage: 'url("http://127.0.0.1:3005/checkmark.png")',
  width: '17px',
  height: '17px',
  // display: 'block',
  // maxWidth: '100%',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover'
}

const blackStars = {
  backgroundImage: 'url("http://127.0.0.1:3005/blackStar.png")',
  height: '14px',
  width: '14px',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  display: 'inline-block'
}

const halfStars = {
  backgroundImage: 'url("http://127.0.0.1:3005/halfStar.png")',
  height: '14px',
  width: '14px',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  display: 'inline-block'
}

const whiteStars = {
  backgroundImage: 'url("http://127.0.0.1:3005/whiteStar.png")',
  height: '14px',
  width: '14px',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  display: 'inline-block'
}

const title = {
  fontSize: '1.25em',
  lineHeight: '1.25em',
  padding: '0',
  fontWeight: 'bold',
  fontStyle: 'normal',
  fontStretch: 'normal',
  letterSpacing: 'normal',
  color: '#333'
}

const main = {
  width: '30%',
  marginLeft: '1%',
  marginRight: '1%',
  display: 'block',
  float: 'left',
  margin: '0.5rem 2%',
  minHeight: '0.125rem',
  boxSizing: 'border-box',
  width: '96%'
}

const upperSection = {
  borderBottom: '1px solid #d4dadc',
  marginBottom: '20px',
  paddingBottom: '15px'
}

const price = {
  color: '#333',
  fontSize: '1.25em',
  fontWeight: 'bold',
  lineHeight: '1.25em'
}

const ratingNum = {
  width: '29.8px',
  height: '18px',
  fontFamily: 'Arial',
  fontSize: '13px',
  fontWeight: 'bold',
  lineHeight: '1.38',
  letterSpacing: '.1px',
  textAlign: 'left',
  color: '#333'
}

const greenText = {
  color: '#007500',
  fontWeight: 'bold',
  fontSize: '.8125em',
  lineHeight: '1.53846em'
}

const blueText = {
  color: '#005891',
  fontWeight: 'bold',
  fontSize: '.8125em',
  lineHeight: '1.53846em',
  cursor: 'pointer'
}

const form = {
  border: '1px solid #8e9da2',
  borderRadius: '5px',
  marginBottom: '10px',
  display: 'inline-block',
  width: '100%',
  overflow: 'hidden',
  maxWidth: '1095px',
  marginLeft: 'auto',
  marginRight: 'auto',
  clear: 'both',
  verticalAlign: 'baseline'
}

const quantity = {
  textAlign: 'center',
  fontSize: '.9375em',
  fontWeight: 'bold',
  color: '#333',
  height: '43px',
  lineHeight: '43px',
  margin: '0',
  width: '20%',
  clear: 'both',
  minHeight: '0.125rem',
  boxSizing: 'border-box',
  float: 'left'
}

const plusMinus = {
  width: '26.66%',
  borderLeft: '1px solid #d4dadc',
  borderRight: '0',
  borderTop: '0',
  borderBottom: '0',
  borderRadius: '0px',
  backgroundColor: 'white',
  //borderColor: '#8e9da2',
  color: '#005891',
  fontSize: '15px',
  fontWeight: 'bold',
  height: '43px',
  cursor: 'pointer',
  transition: '0.2s',
  padding: '11px 15px',
  display: 'inline-block'
}

const number = {
  backgroundColor: 'rgba(244,246,246,0.4)',
  width: '26.66%',
  borderLeft: '1px solid #d4dadc',
  borderRight: '0',
  borderTop: '0',
  borderBottom: '0',
  borderRadius: '0 0px 0px 0',
  // borderColor: '#8e9da2',
  padding: '11px 15px',
  boxSizing: 'border-box',
  color: '#333',
  fontSize: '0.9375em',
  height: '43px',
  backgroundSize: '0',
  backgroundPosition: '95% center',
  transition: '0.2s',
  textAlign: 'center'
}

const modal = {
  backgroundImage: 'url("http://127.0.0.1:3005/detailsModal.png")',
  width: '485px',
  height: '350px',
  // display: 'block',
  // maxWidth: '100%',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  display: 'block',
  // position: 'relative',
  // marginLeft: 'auto',
  // marginRight: 'auto',
  // width: 'auto',
  // height: 'auto'
}

const close = {
  backgroundImage: 'url("http://127.0.0.1:3005/closeX.png")',
  width: '30px',
  height: '30px',
  // display: 'block',
  // maxWidth: '100%',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  cursor: 'pointer',
  display: 'block',
  clear: 'both',
  position: 'absolute',
  top: '20px',
  right: '20px',
  zIndex: '1000'
}

const modalDiv = {
  display: 'block',
  left: '50%',
  top: '50%',
  transform: 'translateX(-50%) translateY(-50%)',
  position: 'fixed',
  minWidth: '540px',
  maxWidth: '845px',
  height: 'auto',
  maxHeight: '94%',
  overflow: 'auto',
  margin: '0',
  padding: '60px 30px 30px',
  backgroundColor: '#fff',
  boxSizing: 'border-box',
  boxShadow: '0 5px 15px 6px rgba(0,0,0,0.1)',
  borderRadius: '5px',
  zIndex: '9999'
}

export {
  priceGuarantee,
  blackStars,
  halfStars,
  whiteStars,
  greenText,
  blueText,
  price,
  upperSection,
  main,
  ratingNum,
  title,
  form,
  quantity,
  plusMinus,
  number,
  modal,
  close,
  modalDiv
}