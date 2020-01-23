import React, { useState } from 'react';
import { Grid, Menu, Segment, Item, Icon } from 'semantic-ui-react';
import Container from './Container';
import { useDrag, DragSourceMonitor, DragPreviewImage } from 'react-dnd';
import ItemTypes from './ItemTypes';
import AppServices from '../App.service';

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
    const [{ isDragging }, drag, preview] = useDrag({
        item: { name, type: ItemTypes.BOX },
        end: (item: { name: string } | undefined, monitor: DragSourceMonitor) => {},
        collect: monitor => ({
            isDragging: monitor.isDragging(),
        }),
    });
    const opacity = isDragging ? 0.7 : 1;

    return (
        <>
            <DragPreviewImage
                connect={preview}
                src="https://assets.cdn.moviepilot.de/files/f9d77471be0adcec13a1bd6ca75d1f40ec6327af8855622cbec7df4d0235/fill/640/307/One+Piece+-+Titelbild+%28Episode+of+East+Blue%29.jpg"
            />
            <div ref={drag} style={{ opacity }}>
                <Item>
                    <Item.Content verticalAlign="middle">
                        <Item.Header>
                            <Icon name="react" /> {name}
                        </Item.Header>
                    </Item.Content>
                </Item>
            </div>
        </>
    );
};

export const UxMenu = (props: any) => {
    const [activeItem, setActiveItem] = useState('home');

    const handleItemClick = (e: any, props: any) => setActiveItem(props.name);

    return (
        <div style={{ position: 'fixed' }}>
            <Item.Group relaxed="very">
                <Box name="TemplateProductsCarousel" handleItemClick={handleItemClick} activeItem={activeItem} />
                <Box name="TemplateFlash" handleItemClick={handleItemClick} activeItem={activeItem} />
                <Box name="TemplateProductsTabCmx" handleItemClick={handleItemClick} activeItem={activeItem} />
                <Box name="TemplateProductsD" handleItemClick={handleItemClick} activeItem={activeItem} />
                <Box name="TemplateProductsG3" handleItemClick={handleItemClick} activeItem={activeItem} />
                <Box name="TemplateProductsG3DB" handleItemClick={handleItemClick} activeItem={activeItem} />
                <Box name="TemplateProductsG4" handleItemClick={handleItemClick} activeItem={activeItem} />
                <Box name="TemplateProductsTabSim" handleItemClick={handleItemClick} activeItem={activeItem} />
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
