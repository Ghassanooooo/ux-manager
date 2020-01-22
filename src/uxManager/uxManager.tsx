import React, { useState } from 'react';
import { Grid, Menu, Segment,Item, Icon } from 'semantic-ui-react';
import Container from './Container/Container';
import { useDrag, DragSourceMonitor, DragPreviewImage } from 'react-dnd';
import ItemTypes from './Container/ItemTypes';
import AppServices from '../App.service';

import App from './App';

const style: React.CSSProperties = {
    border: '1px dashed gray',
    backgroundColor: 'white',
    padding: '0.5rem 1rem',
    marginRight: '1.5rem',
    marginBottom: '1.5rem',
    cursor: 'move',
    float: 'left',
};

interface BoxProps {
    name: string;
    handleItemClick: any;
    activeItem: string;
}

export const Box: React.FC<BoxProps> = ({ name, handleItemClick, activeItem }) => {
    const [{ isDragging }, drag,preview] = useDrag({
        item: { name, type: ItemTypes.BOX },
        end: (item: { name: string } | undefined, monitor: DragSourceMonitor) => {
            const dropResult = monitor.getDropResult();
            if (item && dropResult) {
                //  alert(`You dropped ${item.name} into ${dropResult.name}!`)
                // insertCard(name)
            }
        },
        collect: monitor => ({
            isDragging: monitor.isDragging(),
        }),
    });
    const opacity = isDragging ? 0.4 : 1;

    return (
     
        <div ref={drag} style={{opacity}}>
            <Item>


  <Item.Content verticalAlign='middle'>
    <Item.Header><Icon name='folder' /> {name}</Item.Header>
  </Item.Content>
</Item>
        
        </div>
      
    );
};

export const UxMenu = (props: any) => {
    const [activeItem, setActiveItem] = useState('home');

    const handleItemClick = (e: any, props: any) => setActiveItem(props.name);

    return (
        <div  style={{    position: 'fixed'}}>
     <Item.Group relaxed='very'>
                <Box name="TemplateProductsCarousel" handleItemClick={handleItemClick} activeItem={activeItem} />

<Box name="TemplateFlash" handleItemClick={handleItemClick} activeItem={activeItem} />

<Box name="TemplateProductsTabCmx" handleItemClick={handleItemClick} activeItem={activeItem} />
        </Item.Group>
        </div>
   
            
     
    );
};

const UxManager: React.FC<any> = () => {
    return (
        <Grid>
            <Grid.Column width={4}>
                <UxMenu />
            </Grid.Column>

            <Grid.Column stretched width={12}>
                <Segment>
                    <Container />
                </Segment>
            </Grid.Column>
        </Grid>
    );
};

export default UxManager;
