import React from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';
import './Account.less';

const Account = () => {
    const registerWithGoogle = () => {
        window.open('http://localhost:7000/api/v1/auth/google');
    };
    return (
        <Grid textAlign="center" style={{ height: '100vh' }} verticalAlign="middle">
            <Grid.Column style={{ maxWidth: 450 }}>
                <Header as="h2" color="teal" textAlign="center">
                    <Image src="/logo.png" /> Log-in to your account
                </Header>
                <Form size="large">
                    <Segment stacked>
                        <Form.Input fluid icon="user" iconPosition="left" placeholder="E-mail address" />
                        <Form.Input fluid icon="lock" iconPosition="left" placeholder="Password" type="password" />

                        <Button color="teal" fluid size="large">
                            Login
                        </Button>
                    </Segment>
                </Form>
                <Message>
                    New to us? <a href="#">Sign Up</a>
                </Message>
                <div onClick={registerWithGoogle}>
                    <Message className="SiginWithGoogle">
                        <span className="Google">
                            <span className="G">G</span>
                            <span className="Go">o</span>
                            <span className="Goo">o</span>
                            <span className="G">g</span>
                            <span className="Googl">l</span>
                            <span className="Go">e</span>
                        </span>
                    </Message>
                </div>
            </Grid.Column>
        </Grid>
    );
};

export default Account;
