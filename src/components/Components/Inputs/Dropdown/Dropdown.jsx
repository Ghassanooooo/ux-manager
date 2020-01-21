import React from 'react';
import { Dropdown, Menu, Message, Form } from 'semantic-ui-react';
const DropdownSingle = props => {
    const errors = props.errors;

    return (
        <Form.Field error={!!errors}>
            <label>{props.config.lable}</label>
            <Menu compact>
                <Dropdown
                    placeholder={props.config.lable}
                    onChange={(e, options) => props.onCategoryHandler(e, options, props.config.name)}
                    options={props.config.options}
                    search
                    selection
                    value={props.state[props.config.name]}
                />
            </Menu>
            {!!errors && <Message warning header={'Could you check=> ' + errors.header} list={errors.list} />}
        </Form.Field>
    );
};

export default DropdownSingle;
