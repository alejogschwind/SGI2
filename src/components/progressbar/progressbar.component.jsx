import React from 'react';

import './progressbar.styles.scss'

const Progressbar = ({ lable, progress}) => {
  const [style, setStyle] = React.useState({});

  setTimeout(() => {
    const newStyle = {
      opacity: 1,
      width: `${progress * 100}%`,
    }

    setStyle(newStyle);
  }, 1000)

  return (
    <div className='progressbar'>
      <div className='progress-done' style={style}>
        <span>{`${progress * 100} %`}</span>
      </div>
    </div>
)};

export default Progressbar;