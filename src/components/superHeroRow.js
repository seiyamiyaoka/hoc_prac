import React from 'react';

export const SuperHeroRow = ({row}) => {
  const {id, name, superPower} = row
  return (
    <tr key={id}>
    <td>{id}</td>
    <td>{name}</td>
    <td>{superPower}</td>
  </tr>
  )
}