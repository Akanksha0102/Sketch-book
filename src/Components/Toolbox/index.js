import React from 'react'
import styles from './index.module.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { COLORS, MENU_ITEMS } from '@/constants';
import { changeColor,  changebrushSize } from '@/slice/toolBoxSlice';
import cx from 'classnames';
    
import { socket } from '@/socket';

const Tool = () => {
  const dispatch = useDispatch()
  const activeMenuItem = useSelector((state)=> state.menu.activeMenuItem)
  const showStrokeToolOption = activeMenuItem == MENU_ITEMS.PENCIL
  const showBrushToolOption = activeMenuItem ==  MENU_ITEMS.PENCIL || activeMenuItem == MENU_ITEMS.ERASER
const {color}= useSelector((state) => state.toolbox[activeMenuItem])
   const updateBrushSize = (e)=>{
    dispatch(changebrushSize({item : activeMenuItem , size: e.target.value}))
    socket.emit('changeConfig' , {color , size:e.target.value})
   }

   const updateColor = (newColor)=> {
    dispatch(changeColor({item : activeMenuItem , color : newColor}))
    socket.emit('changeConfig' , {color :newColor, size})
   }
   

  return (
    <div className={styles.ToolContainer}>
      <div className={styles.Toolitem}>
        <h4 className={styles.Tooltext}>Stroke color</h4>
        <div className={styles.itemContainer}>
            <div className={cx(styles.colorBox, {[styles.active]: color === COLORS.BLACK}   )}  style={{backgroundColor : COLORS.BLACK}}  onClick={ ()=> updateColor(COLORS.BLACK) }></div>
            <div className={cx(styles.colorBox, {[styles.active]: color === COLORS.RED}   ) } style={{backgroundColor : COLORS.RED}}  onClick={ ()=> updateColor(COLORS.RED) }></div>
            <div className={cx(styles.colorBox, {[styles.active]: color === COLORS.GREEN}   )} style={{backgroundColor : COLORS.GREEN}}  onClick={ ()=> updateColor(COLORS.GREEN) } ></div>
            <div className={cx(styles.colorBox, {[styles.active]: color === COLORS.BLUE}   )} style={{backgroundColor : COLORS.BLUE }}  onClick={ ()=> updateColor(COLORS.BLUE) }></div>
            <div className={cx(styles.colorBox, {[styles.active]: color === COLORS.ORANGE}   )} style={{backgroundColor : COLORS.ORANGE}}   onClick={ ()=> updateColor(COLORS.ORANGE) }></div>
            <div className={cx(styles.colorBox, {[styles.active]: color === COLORS.YELLOW}   )} style={{backgroundColor : COLORS.YELLOW}}  onClick={ ()=> updateColor(COLORS.YELLOW) } ></div>
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
