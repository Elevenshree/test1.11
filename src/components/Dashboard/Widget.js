import React from 'react';

const Widget = ({ title, data }) => {
  return (
    <div className="p-4 border rounded shadow">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-gray-700">{data}</p>
    </div>
  );
};

export default Widget;
