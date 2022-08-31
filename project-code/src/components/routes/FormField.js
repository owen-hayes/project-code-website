import { TextField } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';

function FormField(props) {
  return (
    <TextField
      variant='outlined'
      {...props.field}
      fullWidth
      color='info'
      error={props.fieldState.error ? true : false}
      required={props.required}
      label={props.label}
      placeholder={props.placeholder}
    />
  );
}

FormField.propTypes = {
  field: PropTypes.object,
  fieldState: PropTypes.object,
  required: PropTypes.bool,
  label: PropTypes.string,
  placeholder: PropTypes.string
};

export default FormField;
