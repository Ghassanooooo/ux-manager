import React from 'react';
import { Button, Icon, Item, Label } from 'semantic-ui-react';
import './HorizontalCard.css';
import { Link } from 'react-router-dom';
import { Paths } from '../../../../models/PagesPathes/Public/Paths';

const HorizontalCard = ({ data }) => (
    <Item className="HorizontalCard" key={data._id}>
        <div className="MediaWraper">
            <Label as="a" color="blue" ribbon>
                Top
            </Label>
            <div className="ImgWraper" dangerouslySetInnerHTML={{ __html: data.html_code }}></div>
            <Button
                as={Link}
                to={`${Paths.SupplementReview}/${data._id}`}
                className="MoreDetailsButton"
                animated="fade"
            >
                <Button.Content visible>More Details </Button.Content>
                <Button.Content hidden>Read Buying Guide </Button.Content>
            </Button>
        </div>

        <Item.Content>
            <Item.Header as="a" className="ItemTitle">
                {data.title}
            </Item.Header>
            <Item.Meta>
                <span className="cinema">{data.sub_title}</span>
            </Item.Meta>
            <Item.Description>{data.description}</Item.Description>
            <Item.Extra>
                <Button target="_blank" as="a" href={data.link} primary floated="right">
                    Buy Now
                    <Icon name="right chevron" />
                </Button>
                <Label color="yellow">{data.source_origin}</Label>
            </Item.Extra>
        </Item.Content>
    </Item>
);

export default HorizontalCard;
