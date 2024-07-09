import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DataList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://18.171.243.207:1337/api/my-react-apps')
      .then(response => {
        console.log('API Response:', response.data); // Log the response data
        setData(response.data.data); // Set the fetched data to state
      })
      .catch(error => {
        console.error('Error fetching data:', error); // Log any errors
      });
  }, []); // Empty dependency array ensures this effect runs only once on component mount

  return (
    <div>
      <h2>Content from Strapi</h2>
      <ul>
        {data.map(item => (
          <li key={item.id}>
            <p>{item.attributes.ContentfromStrapi}</p>
            <p>Created At: {item.attributes.createdAt}</p>
            {/* Add other attributes as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DataList;

