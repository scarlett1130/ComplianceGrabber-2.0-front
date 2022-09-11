import React from 'react'
import ProfileDropdown from './ProfileDropdown';

function DahbordHeader() {
  return (
    <div className="flex justify-between">
      <h1 className="text-2xl font-bold text-gray-600">Overview</h1>
      <ProfileDropdown />
    </div>
  );
}

export default DahbordHeader