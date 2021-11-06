import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GiftExpertApp = () => {

  // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
  // const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);
  const [categories, setCategories] = useState(['Sponge Bob']);

  // const handleAdd = () => {
  //   // const input = document.querySelector('#cat');
  //   // console.log(input);
  //   setCategories([...categories, `Patito ${categories.length}`]);
  // }

  return(
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories}/>
      <hr/>
      {/* <input id='cat' type='text'></input> */}
      {/* <button onClick={handleAdd}>Add</button> */}
      <ol>
        {
          categories.map(category =>
            <GifGrid
              key={category}
              category={category} />
          )
        }
      </ol>
    </>
  );
}

export default GiftExpertApp;

// command snnipet rafc