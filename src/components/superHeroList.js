import React from 'react'
import { SuperHeroRow } from './superHeroRow'
const SuperHeroList = ({ superHeroData }) => {
    return (
      <div className="text-center">
        <h2 className="py-4">super hero list</h2>
        <table className="table px-2 table-striped">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">name</th>
              <th scope="col">super power</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              (superHeroData).map((item) => (
                <SuperHeroRow row={item} />
              ))
            }
          </tbody>
        </table>
      </div>
    )
}
export {
  SuperHeroList
}