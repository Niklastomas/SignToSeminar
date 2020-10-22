import { CheckBox } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import './Checkbox.css';

function Checkbox({ handleCheckboxChange }) {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    handleCheckboxChange(checked);
  }, [checked]);

  return (
    <div className='checkbox'>
      <label htmlFor='checkbox'>Descending</label>
      <input
        type='checkbox'
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
    </div>
  );
}

export default Checkbox;
