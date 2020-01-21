import React from 'react';
import { Header, Table, Rating } from 'semantic-ui-react';

const TemplateProductsTabCmx = () => {
    return (
        <Table celled padded>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell singleLine>Evidence Rating</Table.HeaderCell>
                    <Table.HeaderCell>Effect</Table.HeaderCell>
                    <Table.HeaderCell>Efficacy</Table.HeaderCell>
                    <Table.HeaderCell>Consensus</Table.HeaderCell>
                    <Table.HeaderCell>Comments</Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(i => (
                    <Table.Row key={i}>
                        <Table.Cell>
                            <Header as="h2" textAlign="center">
                                A
                            </Header>
                        </Table.Cell>
                        <Table.Cell singleLine>Power Output</Table.Cell>
                        <Table.Cell>
                            <Rating icon="star" defaultRating={3} maxRating={3} />
                        </Table.Cell>
                        <Table.Cell textAlign="right">
                            80% <br />
                            <a href="#">18 studies</a>
                        </Table.Cell>
                        <Table.Cell>
                            Creatine supplementation is the reference compound for increasing muscular creatine levels;
                            there is variability in this increase, however, with some nonresponders.
                        </Table.Cell>
                    </Table.Row>
                ))}
            </Table.Body>
        </Table>
    );
};

export default TemplateProductsTabCmx;
