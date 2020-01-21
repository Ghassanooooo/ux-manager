import React, { Component } from 'react';
import { Input, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { Paths } from '../../../models/PagesPathes/Admin/Paths';

export class AdminProductControl extends Component {
    state = { activeItem: 'new product' };

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    render() {
        const { activeItem } = this.state;

        return (
            <div>
                <Menu pointing>
                    <Menu.Item
                        as={Link}
                        to={Paths.AdminAddNewProduct}
                        name="new product"
                        active={activeItem === 'new product'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item name="messages" active={activeItem === 'messages'} onClick={this.handleItemClick} />
                    <Menu.Item name="friends" active={activeItem === 'friends'} onClick={this.handleItemClick} />
                    <Menu.Menu position="right">
                        <Menu.Item>
                            <Input icon="search" placeholder="Search..." />
                        </Menu.Item>
                    </Menu.Menu>
                </Menu>
            </div>
        );
    }
}

export default AdminProductControl;
