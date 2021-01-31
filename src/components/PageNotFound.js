
import React from 'react';

export default function PageNotFound({ location }) {
 
 return (
  <>
    Page not found - the path "{location && location.pathname}" did not match
    any Router routes.
  </>
 )
}
// Page not found - the path, <Code>{location.pathname}</Code>, did not match