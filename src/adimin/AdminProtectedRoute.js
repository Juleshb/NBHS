
import { Route, Navigate } from 'react-router-dom';
import PropTypes from 'prop-types'; // Import PropTypes

const AdminProtectedRoute = ({ element: Element, ...rest }) => {
  const role = localStorage.getItem('role');
  const isAdmin = role === 'admin';

  return (
    <Route
      {...rest}
      element={isAdmin ? <Element /> : <Navigate to="/login" />}
    />
  );
};

// Add PropTypes validation for the element prop
AdminProtectedRoute.propTypes = {
  element: PropTypes.elementType.isRequired,
};

export default AdminProtectedRoute;
