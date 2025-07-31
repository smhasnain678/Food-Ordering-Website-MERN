import React from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import MenuSection from '../../components/MenuSection/MenuSection'
import { useState } from 'react'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'

const Home = () => {

    const [category, setCategory] = useState("All");

    return(
       <div>
        <Header />
        <MenuSection category={category} setCategory={setCategory}/>
        <FoodDisplay category={category} />
       </div>
    )
}

export default Home