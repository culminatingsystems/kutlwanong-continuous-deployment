// Breadcrumbs.jsx
import React from 'react';
import { Breadcrumb } from 'antd';

const Breadcrumbs = ({ items }) => {
  return (
    <Breadcrumb>
      {items.map((item, index) => (
        <Breadcrumb.Item key={index}>{item}</Breadcrumb.Item>
      ))}
    </Breadcrumb>
  );
};

export default Breadcrumbs;
