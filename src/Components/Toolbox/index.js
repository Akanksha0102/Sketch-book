import React from 'react'
import styles from './index.module.css';
import { useSelector } from 'react-redux';
const Tool = () => {
  const activeMenuItem = useSelector((state)=> state.menu.activeMenuItem)

   const updateBrushSize = (e)=>{

   }
  return (
    <div className={styles.ToolContainer}>
      <div className={styles.Toolitem}>
        <h4 className={styles.Tooltext}>Stroke color</h4>
        <div className={styles.itemContainer}>
            <div className={styles.colorBox}  style={{backgroundColor : 'black'}}  ></div>
            <div className={styles.colorBox} style={{backgroundColor : 'blue'}}></div>
            <div className={styles.colorBox} style={{backgroundColor : 'green'}}></div>
            <div className={styles.colorBox} style={{backgroundColor : 'orange'}}></div>
            <div className={styles.colorBox} style={{backgroundColor : 'yellow'}}></div>
            <div className={styles.colorBox} style={{backgroundColor : 'red'}}></div>
        </div>
      </div>
      <div className={styles.Toolitem}>
        <h4 className={styles.Tooltext}>Brush size : {activeMenuItem} </h4>
        <div className={styles.itemContainer}>
           <input className={styles.brush} type="range" size={1} min={1} max={10}  onChange={updateBrushSize} />
        </div>
      </div>
    </div>
  )
}

export default Tool
