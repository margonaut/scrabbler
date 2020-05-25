import { Location } from '@reach/router';
import React from 'react';
import queryString from 'query-string';

const withLocation = (ComponentToWrap) => (props) => (
  <Location>
    {({ location, navigate }) => (
      <ComponentToWrap
        {...props}
        location={location}
        navigate={navigate}
        search={location.search ? queryString.parse(location.search) : {}}
      />
    )}
  </Location>
);

export default withLocation;
