import React from 'react';

import './progressbar.styles.scss'

const Progressbar = ({ progress}) => {
  const [style, setStyle] = React.useState({});

  React.useEffect(() => {
    const timer = setTimeout(() => {
      const newStyle = {
        opacity: 1,
        width: `${progress * 100}%`
      }
    setStyle(newStyle)
    }, 1000)
    return () => {
      clearTimeout(timer)
    };
  });

  return (
    <div className='progressbar'>
      <div className='progress-done' style={style}>
        <span>{`${progress * 100} %`}</span>
      </div>
    </div>
  )
}

export default Progressbar;