import React from 'react';
import { Form, Input, Message } from 'semantic-ui-react';
const InputField = props => {
    const errors = props.errors;

    return (
        <Form.Field error={!!errors}>
            <label>{props.config.label}</label>
            <input
                value={props.state[props.config.name] || ''}
                onChange={props.onChangeInputField}
                name={props.config.name}
                placeholder={props.config.placeholder}
            />
            {!!errors && (
                <Message
                    warning
                    header={'Could you check=> ' + props.config.label + ': ' + errors.header}
                    list={errors.list}
                />
            )}
        </Form.Field>
    );
};

export default InputField;
