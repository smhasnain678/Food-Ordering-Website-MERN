import React, { useState, useEffect } from 'react';
import './List.css';
import { toast } from 'react-toastify';
import axios from 'axios';

const List = ({ url }) => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchList = async () => {
    const token = localStorage.getItem('token');
    console.log('Fetched token from localStorage:', token); // Debug token

    if (!token) {
      setError("Please log in as admin to view food items.");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.get(`${url}/api/food/list`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      console.log('API response:', response.data); // Debug API response
      if (response.data.success) {
        setList(response.data.data || []);
      } else {
        setError(response.data.message || "Failed to load food items");
        toast.error(response.data.message || "Error loading food items");
      }
    } catch (err) {
      console.error("Fetch list error:", err.response ? err.response.data : err.message);
      setError(`Error loading food items: ${err.response?.data?.message || err.message}`);
      toast.error(`Error loading food items: ${err.response?.data?.message || "Network error"}`);
    } finally {
      setLoading(false);
    }
  };

  const removeFood = async (foodId) => {
    const token = localStorage.getItem('token');
    if (!token) {
      toast.error("Please log in to remove items.");
      return;
    }

    try {
      const response = await axios.post(`${url}/api/food/remove`, { id: foodId }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      await fetchList();
      if (response.data.success) {
        toast.success(response.data.message);
      } else {
        toast.error("Error");
      }
    } catch (err) {
      console.error("Remove food error:", err);
      toast.error("Error removing food item");
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  if (loading) return <div className="list-loading">Loading...</div>;
  if (error) return <div className="list-error">{error}</div>;

  return (
    <div className="list">
      <p className="list-title">All Foods List</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.length === 0 ? (
          <p className="list-empty">No food items found.</p>
        ) : (
          list.map((item, index) => (
            <div key={index} className="list-table-format">
              <img src={`${url}/images/` + item.image} alt={item.name} className="list-image" />
              <p className="list-name">{item.name}</p>
              <p className="list-category">{item.category}</p>
              <p className="list-price">${item.price}</p>
              <p onClick={() => removeFood(item._id)} className="list-action cursor">X</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default List;


// import React, { useState, useEffect } from 'react';
// import './List.css';
// import { toast } from 'react-toastify';
// import axios from 'axios';

// const List = ({ url }) => {
//   const [list, setList] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const fetchList = async () => {
//     const token = localStorage.getItem('token');
//     if (!token) {
//       setError("Please log in as admin to view food items.");
//       setLoading(false);
//       return;
//     }

//     try {
//       const response = await axios.get(`${url}/api/food/list`, {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       if (response.data.success) {
//         setList(response.data.data || []);
//       } else {
//         setError(response.data.message || "Failed to load food items");
//         toast.error(response.data.message || "Error loading food items");
//       }
//     } catch (err) {
//       console.error("Fetch list error:", err.response ? err.response.data : err.message);
//       setError(`Error loading food items: ${err.response?.data?.message || err.message}`);
//       toast.error(`Error loading food items: ${err.response?.data?.message || "Network error"}`);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const removeFood = async (foodId) => {
//     const token = localStorage.getItem('token');
//     if (!token) {
//       toast.error("Please log in to remove items.");
//       return;
//     }

//     try {
//       const response = await axios.post(`${url}/api/food/remove`, { id: foodId }, {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       await fetchList();
//       if (response.data.success) {
//         toast.success(response.data.message);
//       } else {
//         toast.error("Error");
//       }
//     } catch (err) {
//       console.error("Remove food error:", err);
//       toast.error("Error removing food item");
//     }
//   };

//   useEffect(() => {
//     fetchList();
//   }, []);

//   if (loading) return <div className="list-loading">Loading...</div>;
//   if (error) return <div className="list-error">{error}</div>;

//   return (
//     <div className="list">
//       <p className="list-title">All Foods List</p>
//       <div className="list-table">
//         <div className="list-table-format title">
//           <b>Image</b>
//           <b>Name</b>
//           <b>Category</b>
//           <b>Price</b>
//           <b>Action</b>
//         </div>
//         {list.length === 0 ? (
//           <p className="list-empty">No food items found.</p>
//         ) : (
//           list.map((item, index) => (
//             <div key={index} className="list-table-format">
//               <img src={`${url}/images/` + item.image} alt={item.name} className="list-image" />
//               <p className="list-name">{item.name}</p>
//               <p className="list-category">{item.category}</p>
//               <p className="list-price">${item.price}</p>
//               <p onClick={() => removeFood(item._id)} className="list-action cursor">X</p>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default List;