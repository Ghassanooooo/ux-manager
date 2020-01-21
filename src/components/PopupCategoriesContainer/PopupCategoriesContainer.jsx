import React from 'react';
import { Header, Popup, Grid, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './PopupCategoriesContainer.less';

const PopupCategoriesContainer = props => {
    return (
        <Popup
            basic
            className="PopupCategoriesContainer"
            size="huge"
            trigger={props.children}
            flowing
            hoverable
            hideOnScroll
            Invert
            offset="30vh"
        >
            <Container>
                <Grid
                    centered
                    divided
                    columns={props.navbarSubItems.length}
                    className="PopupCategoriesContainerChlidren"
                >
                    {props.navbarSubItems.map(item => (
                        <Grid.Column key={item.title} textAlign="center">
                            <div className="SubItemsWraper">
                                <Header className="SubItemsHeader" as="h4">
                                    {item.title}
                                </Header>
                                {item.subItems &&
                                    item.nested &&
                                    item.subItems.map(subItem => (
                                        <React.Fragment key={subItem.title}>
                                            <Link className="LinkContant" to={subItem.linkTo}>
                                                {subItem.title}
                                            </Link>
                                        </React.Fragment>
                                    ))}
                                <Link className="LinkContant" to={item.linkTo}>
                                    All {item.title}s
                                </Link>
                            </div>
                        </Grid.Column>
                    ))}
                </Grid>
            </Container>
        </Popup>
    );
};

export default PopupCategoriesContainer;
