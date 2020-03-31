import React from 'react';

import './styles.css'

export default function Button(props) {
  return (
   <button className="button" type={props.type}>{props.name}</button>
  );
}
