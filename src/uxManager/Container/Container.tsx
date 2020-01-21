import React, { useState, useCallback } from 'react'
import Card from './Card'
import { useDrop } from 'react-dnd'

import ItemTypes from './ItemTypes'
import AppServices from '../../App.service'
import TemplateFlash from '../../components/TemplateFlash/TemplateFlash'
function getStyle(backgroundColor: string): React.CSSProperties {
    return {
      border: '1px solid rgba(0,0,0,0.2)',
      minHeight: '8rem',
      minWidth: '8rem',
      color: 'white',
      backgroundColor,
      padding: '2rem',
      paddingTop: '1rem',
      margin: '1rem',
      textAlign: 'center',
      float: 'left',
      fontSize: '1rem',
    }
  }
  
  export interface DustbinProps {
    greedy?: boolean
  }
  
  export interface DustbinState {
    hasDropped: boolean
    hasDroppedOnChild: boolean
  }

const style = {
  width: 400,
}

export interface Item {
  id:string,
  name:string,
  key:string,
  title:string,
  description:string,
  options:any
}

export interface ContainerState {
      getPages:any
      moveCard:any
      insertCard:any
}

const Container = () => 

  {
    const {
      getPages,
      moveCard,
      insertCard
  } = AppServices();
  console.log('Container ==> ',getPages())
    const [hasDropped, setHasDropped] = useState(false)
    const [hasDroppedOnChild, setHasDroppedOnChild] = useState(false)

    const [{ isOver, isOverCurrent,canDrop }, drop] = useDrop({
        accept: ItemTypes.BOX,
        drop(item, monitor) {
          const didDrop = monitor.didDrop()
          if (didDrop ) {
            return
          }
          console.log('is over ==> ', isOver, 'isOverCurrent => ',isOverCurrent)
          insertCard(item)
          setHasDropped(true)
          setHasDroppedOnChild(didDrop)
        },
        collect: monitor => ({
          isOver: monitor.isOver(),
          canDrop:monitor.canDrop(),
          isOverCurrent: monitor.isOver({ shallow: true }),
        }),
      })
    
     
      let backgroundColor = 'rgba(0, 0, 0, .5)'
    
      if (isOverCurrent || (isOver )) {
        backgroundColor = 'darkgreen'
      }

   

    const renderCard = (card: any, index: number) => {
      return (
       <TemplateFlash />
      )
    }

    return (
      <div ref={drop} >
        <div style={style}>{getPages().map((card:any, i:any) => renderCard(card, i))}</div>
      </div>
    )
  }


export default Container
