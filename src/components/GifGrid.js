// import { useState, useEffect } from "react";
// import { getGifs } from "../helpers/getGifs";
import { GifGridItem } from "./GifGridItem";

import { useFetchGifs } from "../hooks/useFetchGifs"

export const GifGrid = ({ category }) => {

  // const [images, setImages] = useState([]);
  const { data:images, loading } = useFetchGifs(category);
  // console.log(data);

  // useEffect(() => {
  //   getGifs(category)
  //     .then(setImages);
  // }, [ category ]);


  return (
    <>
      <h3 className='animate__animated animate__fadeIn'>{category}</h3>
      { loading && <p className='animate__animated animate__flash'>Loading</p> }
      <div className='card-grid'>
        <ol>
          {
            images.map((image) =>
              <GifGridItem key={image.id} {...image} />
            )
          }
        </ol>
      </div>
    </>
  )
}
