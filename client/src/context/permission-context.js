import React from 'react';

let permissons = {};

fetch('http://localhost:8000/permissions')
    .then(res => res.json())
    .then(res => permissons = { ...res.permissons })

const PermissionContext = React.createContext(permissons);

export default PermissionContext;