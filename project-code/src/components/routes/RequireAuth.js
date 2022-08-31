import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';

export default function RequireAuth(props) {
  const [authorized, setAuthorized] = useState(true);

  useEffect(() => {
    console.log(`userRole: ${props.userRole}`);
    console.log(`local userRole: ${localStorage.getItem('userRole')}`);
    const role = localStorage.getItem('userRole');
    if (role !== props.requiredRole) {
      console.log('setting unauthorized');
      setAuthorized(false);
    }
  }, [props.userRole]);

  return authorized ? props.element : <Navigate to='/' replace />;
}

RequireAuth.propTypes = {
  children: PropTypes.node,
  element: PropTypes.node,
  userRole: PropTypes.string,
  requiredRole: PropTypes.string
};
