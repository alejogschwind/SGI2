import React from 'react';

import './snack-bar.styles.scss'

const SnackBar = ({message}) => {
  const [style, setStyle] = React.useState({});

  const displaySnackBar = () => {
    setStyle({top: '16px'})
  }
  React.useEffect(() => {
    // const showtimer = setTimeout(() => {
    //   const showStyle = {
    //     top: '16px'
    //   }
    //   setStyle(showStyle)
    // }, 2000)

    
    const hidetimer = setTimeout(() => {
      const hideStyle = {
        top: '-100px',
      }
      setStyle(hideStyle)
    }, 3000)

    return () => {
      // clearTimeout(showtimer)
      clearTimeout(hidetimer)
    };
  });

  return (
    <div className='snack-bar' style={style}>
      <span>{message}</span>
      <div className='close-btn'>X</div>
    </div>
  )
}

export default SnackBar;