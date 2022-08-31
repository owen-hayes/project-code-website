import * as React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import PropTypes from 'prop-types';

export default function BasicDatePicker(props) {
  // const [value, setValue] = React.useState(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        // label='Basic example'
        // value={value}
        // onChange={(newValue) => {
        //   setValue(newValue);
        // }}
        {...props}
        // ref={props.forwardedRef}
        renderInput={(params) => <TextField {...params} {...props} />}
      />
    </LocalizationProvider>
  );
}

// BasicDatePicker.propTypes = {
//   forwardedRef: PropTypes.object,
// };
