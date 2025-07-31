import React from 'react';
import './MenuSection.css';
import { menu_list } from '../../assets/assets';

const MenuSection = ({ category, setCategory }) => {
  return (
    <div className='menu-section' id='menu-section'>
      <h1>
        DISCOVER OUR <span className="best">BEST</span>{' '}
        <span className="taste">TASTE</span>{' '}
        <span className="menu">MENU</span>
      </h1>
      <p className='menu-section-text'>
        Dive into a world of flavors! Our menu offers a delightful mix of classic dishes and creative culinary delights, all made with the freshest ingredients.
      </p>
      <div className="menu-section-list">
        {menu_list.map((item, index) => (
          <div
            onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)}
            key={index}
            className={`menu-section-list-item ${category === item.menu_name ? 'Active' : ''}`}
          >
            <img
              className={category === item.menu_name ? 'Active' : ''}
              src={item.menu_image}
              alt={item.menu_name}
            />
            <p>{item.menu_name}</p>
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default MenuSection;


// import React from 'react'
// import './MenuSection.css'
// import { menu_list } from '../../assets/assets'

// const MenuSection = ({category, setCategory}) => {
//     return(
//         <div className='menu-section' id='menu-section'>
//             <h1>OUR <span className="bes">BES</span><span className="t">T</span> <span className="menu">MENU</span></h1>
//             <p className='menu-section-text'>Explore our menu, featuring a range of delicious options to satisfy your cravings. From classic favorites to innovative twists, our dishes are crafted with fresh ingredients and a passion for flavo</p>
//             <div className="menu-section-list">
//                 {menu_list.map((item, index)=>{
//                     return(
//                         <div onClick={()=> setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className="menu-section-list-item">
//                             <img className={category===item.menu_name?"Active":""} src={item.menu_image} alt="" />
//                             <p>{item.menu_name}</p>
//                         </div>
//                     )
//                 })}
//             </div>
//             <hr />
//         </div>
//     )
// }

// export default MenuSection