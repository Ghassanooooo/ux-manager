import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Button, Container, Icon, Menu, Responsive, Segment, Sidebar, Visibility } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './AdminNavbar.less';
import PopupCategoriesContainer from '../../components/PopupCategoriesContainer/PopupCategoriesContainer';

import AdminNavbar from '../../configurations/navbar/admin/adminNavbarConfig';
const getWidth = () => {
    const isSSR = typeof window === 'undefined';

    return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
};

class DesktopContainer extends Component {
    state = { active: 'Home' };
    handleItemClick = (e, { name }) => this.setState({ active: name });

    hideFixedMenu = () => this.setState({ fixed: false });
    showFixedMenu = () => this.setState({ fixed: true });

    render() {
        const { children } = this.props;
        const { fixed } = this.state;

        return (
            <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
                <Visibility once={false} onBottomPassed={this.showFixedMenu} onBottomPassedReverse={this.hideFixedMenu}>
                    <Segment
                        className="AdminNavbar"
                        inverted
                        textAlign="center"
                        style={{ minHeight: 100, padding: '1em 0em' }}
                        vertical
                    >
                        <Menu inverted={!fixed} pointing={!fixed} secondary={!fixed} size="large">
                            <Container>
                                <Menu.Item as="h4" name="Admin">
                                    Admin
                                </Menu.Item>
                                {AdminNavbar.map(item =>
                                    item.subItems && item.nested ? (
                                        <PopupCategoriesContainer navbarSubItems={item.subItems}>
                                            <Menu.Item
                                                onClick={this.handleItemClick}
                                                name={item.title}
                                                as={Link}
                                                active={this.state.active === item.title}
                                                to={item.linkTo}
                                            >
                                                {item.title}
                                            </Menu.Item>
                                        </PopupCategoriesContainer>
                                    ) : (
                                        <Menu.Item
                                            onClick={this.handleItemClick}
                                            name={item.title}
                                            as={Link}
                                            active={this.state.active === item.title}
                                            to={item.linkTo}
                                        >
                                            {item.title}
                                        </Menu.Item>
                                    ),
                                )}

                                <Menu.Item position="right">
                                    <Button as={Link} to="/account" inverted={!fixed}>
                                        Account
                                    </Button>
                                </Menu.Item>
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
                    {AdminNavbar.map(item => (
                        <Menu.Item
                            key={item.itemName}
                            active={this.state.active === `${item.itemName}`}
                            onClick={this.handleItemClick}
                            name={item.itemName}
                            as={Link}
                            to={item.linkTo}
                        >
                            {item.itemName}
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
                                <Menu.Item position="right">
                                    <Button as={Link} to="/account" inverted>
                                        Account
                                    </Button>
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

const Navbar = props => <ResponsiveContainer>{props.children}</ResponsiveContainer>;

export default Navbar;
