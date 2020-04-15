import React from 'react';

import './progressbar.styles.scss'

const Progressbar = ({ progress}) => {
  const [style, setStyle] = React.useState({});

  setTimeout(() => {
    const newStyle = {
      opacity: 1,
      width: `${progress * 100}%`
    }

    setStyle(newStyle)
  })
  return (
    <div className='progressbar'>
      <div className='progress-done' style={style}>
        <span>{`${progress * 100} %`}</span>
      </div>
    </div>
  )
}

export default Progressbar;