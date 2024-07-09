import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DataList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from the Strapi API
    axios.get('http:// 18.171.243.207:1337/api/deepak-ravulas') // Update the URL to match your Strapi API endpoint
      .then(response => {
        setData(response.data.data);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);

  return (
    <div>
      <h2>Content from Strapi</h2>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.attributes.hey}</li> // Update 'hey' to match your data structure
        ))}
      </ul>
    </div>
  );
}

export default DataList;

