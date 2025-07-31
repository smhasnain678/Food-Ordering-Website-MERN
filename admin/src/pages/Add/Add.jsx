import React from 'react';
import './Add.css';
import { assets } from '../../assets/assets';
import { useState } from 'react';
import axios from "axios";
import { toast } from 'react-toastify';

const Add = ({ url }) => {
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Salad"
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", Number(data.price));
    formData.append("category", data.category);
    formData.append("image", image);

    try {
      const response = await axios.post(`${url}/api/food/add`, formData);
      if (response.data.success) {
        setData({
          name: "",
          description: "",
          price: "",
          category: "Salad"
        });
        setImage(false);
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (err) {
      console.error("Request failed:", err);
    }
  };

  return (
    <div className="add">
      <form className="add-form" onSubmit={onSubmitHandler}>
        <div className="add-img-upload">
          <p className="upload-label">Upload Image</p>
          <label htmlFor="image">
            <img src={image ? URL.createObjectURL(image) : assets.upload_image} alt="" className="upload-image" />
          </label>
          <input onChange={(e) => setImage(e.target.files[0])} type="file" id="image" hidden required />
        </div>
        <div className="add-product-name">
          <p className="input-label">Product Name</p>
          <input onChange={onChangeHandler} value={data.name} type="text" name="name" placeholder="Type here" className="input-field" />
        </div>
        <div className="add-product-description">
          <p className="input-label">Product Description</p>
          <textarea onChange={onChangeHandler} value={data.description} name="description" rows="6" placeholder="Write content here" className="textarea-field" required></textarea>
        </div>
        <div className="add-category-price">
          <div className="add-category">
            <p className="input-label">Product Category</p>
            <select onChange={onChangeHandler} name="category" className="select-field">
              <option value="Burger">Burger</option>
              <option value="Pizza">Pizza</option>
              <option value="Sandwish">Sandwish</option>
              <option value="Roll">Roll</option>
              <option value="Deserts">Deserts</option>
              <option value="Rice">Rice</option>
            </select>
          </div>
          <div className="add-price">
            <p className="input-label">Product Price</p>
            <input onChange={onChangeHandler} value={data.price} type="Number" name="price" placeholder="$20" className="input-field" />
          </div>
        </div>
        <button type="submit" className="add-btn">Add</button>
      </form>
    </div>
  );
};

export default Add;