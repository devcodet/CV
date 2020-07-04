import React, { useState } from 'react';

import './long-text.css'

function LongText(props) {
    return (
        <p className="long-text">
           {props.text}
        </p>        
    );
  }

  export default LongText;