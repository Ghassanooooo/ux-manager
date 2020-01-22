import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Button, Container, Icon, Menu, Responsive, Segment, Sidebar, Visibility, Checkbox } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './Navbar.less';
import PopupCategoriesContainer from '../../components/PopupCategoriesContainer/PopupCategoriesContainer';
import { Paths } from '../../models/PagesPathes/Public/Paths';

import navbarItems from '../../configurations/navbar/public/publicNavbarConfig';

const getWidth = () => {
    const isSSR = typeof window === 'undefined';

    return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
};

class DesktopContainer extends Component {
    state = { active: 'Home' };
    handleItemClick = name => {
        this.setState({ active: name });
    };

    hideFixedMenu = () => this.setState({ fixed: false });
    showFixedMenu = () => this.setState({ fixed: true });

    render() {
        const { children } = this.props;
        const { fixed } = this.state;
        console.log('Props======> ', this.props);
        return (
            <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
                <Visibility once={false} onBottomPassed={this.showFixedMenu} onBottomPassedReverse={this.hideFixedMenu}>
                    <Segment
                        inverted
                        textAlign="center"
                        className="Navbar"
                        style={{ minHeight: 100, padding: '1em 0em' }}
                        vertical
                    >
                        <Menu
                            fixed={fixed ? 'top' : null}
                            inverted={!fixed}
                            pointing={!fixed}
                            secondary={!fixed}
                            size="large"
                        >
                            <Container>
                                <Menu.Item
                                    onClick={this.handleItemClick}
                                    name="Home"
                                    className="NavbarItem"
                                    as={Link}
                                    to="/"
                                    active={this.state.active === 'Home'}
                                >
                                    <span className="NavbarItem">Logo</span>
                                </Menu.Item>
                                {navbarItems.map(item =>
                                    item.subItems && item.nested ? (
                                        <PopupCategoriesContainer key={item.title} navbarSubItems={item.subItems}>
                                            <div onMouseOver={() => this.handleItemClick(item.title)}>
                                                <Menu.Item
                                                    className="NavbarItem"
                                                    name={item.title}
                                                    as={Link}
                                                    active={this.state.active === item.title}
                                                    to={item.linkTo}
                                                >
                                                    <span className="NavbarItem">{item.title}</span>
                                                </Menu.Item>
                                            </div>
                                        </PopupCategoriesContainer>
                                    ) : (
                                        <div onMouseOver={() => this.handleItemClick(item.title)}>
                                            <Menu.Item
                                                key={item.title}
                                                className="NavbarItem"
                                                name={item.title}
                                                as={Link}
                                                active={this.state.active === item.title}
                                                to={item.linkTo}
                                            >
                                                <span className="NavbarItem">{item.title}</span>
                                            </Menu.Item>
                                        </div>
                                    ),
                                )}
                            </Container>
                        </Menu>
                    </Segment>
                </Visibility>

                {children}
            </Responsive>
        );
    }
}

DesktopContainer.propTypes = {
    children: PropTypes.node,
};

class MobileContainer extends Component {
    state = { active: 'Home' };
    handleItemClick = (e, { name }) => this.setState({ active: name });

    handleSidebarHide = () => this.setState({ sidebarOpened: false });

    handleToggle = () => this.setState({ sidebarOpened: true });

    render() {
        const { children } = this.props;
        const { sidebarOpened } = this.state;

        return (
            <Responsive as={Sidebar.Pushable} getWidth={getWidth} maxWidth={Responsive.onlyMobile.maxWidth}>
                <Sidebar
                    as={Menu}
                    animation="push"
                    inverted
                    onHide={this.handleSidebarHide}
                    vertical
                    visible={sidebarOpened}
                >
                    <Menu.Item
                        onClick={this.handleItemClick}
                        name="Home"
                        as={Link}
                        to="/"
                        active={this.state.active === 'Home'}
                    >
                        Home
                    </Menu.Item>
                    {navbarItems.map(item => (
                        <Menu.Item
                            key={item.title}
                            active={this.state.active === `${item.title}`}
                            onClick={this.handleItemClick}
                            name={item.title}
                            as={Link}
                            to={item.linkTo}
                        >
                            {item.title}
                        </Menu.Item>
                    ))}
                </Sidebar>

                <Sidebar.Pusher dimmed={sidebarOpened}>
                    <Segment inverted textAlign="center" style={{ minHeight: 100, padding: '1em 0em' }} vertical>
                        <Container>
                            <Menu inverted pointing secondary size="large">
                                <Menu.Item onClick={this.handleToggle}>
                                    <Icon name="sidebar" />
                                </Menu.Item>
                            </Menu>
                        </Container>
                    </Segment>

                    {children}
                </Sidebar.Pusher>
            </Responsive>
        );
    }
}

MobileContainer.propTypes = {
    children: PropTypes.node,
};

const ResponsiveContainer = ({ children }) => (
    <div>
        <DesktopContainer>{children}</DesktopContainer>
        <MobileContainer>{children}</MobileContainer>
    </div>
);

ResponsiveContainer.propTypes = {
    children: PropTypes.node,
};

const Navbar = ({ children }) => <ResponsiveContainer>{children}</ResponsiveContainer>;

export default Navbar;
