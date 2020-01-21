import React, { Component } from 'react';
import QuillTextEditor from '../../../components/Components/QuillTextEditor/QuillTextEditor';
import { Button, Form, Message } from 'semantic-ui-react';
import InputField from '../../../components/Components/Inputs/InputField/InputField';
import DropdownSingle from '../../../components/Components/Inputs/Dropdown/Dropdown';
import dropdownConfigs from './dropdownData/dropdownData';
import './AdminAddNewProduct.less';
import axios from 'axios';
import { Paths } from '../../../models/PagesPathes/Admin/Paths';
import { scroller, Events } from 'react-scroll';
import { Fragment } from 'react';

const inputFieldConfigs = [
    {
        label: 'Product Title',
        placeholder: 'Product Title',
        name: 'title',
    },
    {
        label: 'Product Sub Title',
        placeholder: 'Product Sub Title',
        name: 'subTitle',
    },
    {
        label: 'Product Brand',
        placeholder: 'Product Brand',
        name: 'brand',
    },

    {
        label: 'Product Price',
        placeholder: 'Product Price',
        name: 'price',
    },
    {
        label: 'Product Image',
        placeholder: 'Product Image',
        name: 'image',
    },
    {
        label: 'Product Link',
        placeholder: 'Product Link',
        name: 'link',
    },
    {
        label: 'Product Description',
        placeholder: 'Product Description',
        name: 'description',
    },
    {
        label: 'Product Image 1',
        placeholder: 'Product Image 1',
        name: 'productImage1',
    },
    {
        label: 'Product Image 2',
        placeholder: 'Product Image 2',
        name: 'productImage2',
    },
    {
        label: 'Product Image 3',
        placeholder: 'Product Image 3',
        name: 'productImage3',
    },
    {
        label: 'People Image 1',
        placeholder: 'People Image 1',
        name: 'peopleImage1',
    },
    {
        label: 'People Image 2',
        placeholder: 'People Image 2',
        name: 'peopleImage2',
    },
    {
        label: 'People Image 3',
        placeholder: 'People Image 3',
        name: 'peopleImage3',
    },
];

export class AdminAddNewProduct extends Component {
    state = {
        description: '',
        link: '',
        image: '',
        price: '',
        subTitle: '',
        title: '',
        productReview: JSON.parse(localStorage.getItem('productReview')) || '',
        categorie: '',
        subCategorie: '',
        subSubCategorie: '',
        brand: '',
        productSource: 'Amazon',
        topProduct: false,
        productImage1: '',
        productImage2: '',
        productImage3: '',
        peopleImage1: '',
        peopleImage2: '',
        peopleImage3: '',
        errors: null,
    };
    componentWillUnmount() {
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
    }
    componentDidMount() {
        Object.keys(this.state).map(key => {
            if (localStorage.getItem(key)) {
                this.setState({ [key]: JSON.parse(localStorage.getItem(key)) });
            }
        });
    }

    onChangeInputField = e => {
        const { name, value } = e.target;
        localStorage.setItem(name, JSON.stringify(value));
        this.setState({ [name]: value });
    };
    QuillTextEditorData = data => {
        this.setState({ ...this.state, productReview: data.ops });
        localStorage.setItem('productReview', JSON.stringify(data.ops));
    };
    onCategoryHandler = (e, { value }, name) => {
        this.setState({ [name]: value });
        localStorage.setItem(name, JSON.stringify(value));
    };
    onSubmitProductHandler = async e => {
        e.preventDefault();
        const {
            description,
            link,
            image,
            price,
            subTitle,
            title,
            productReview,
            categorie,
            subCategorie,
            subSubCategorie,
            brand,
            productSource,
            topProduct,

            productImage1,
            productImage2,
            productImage3,
            peopleImage1,
            peopleImage2,
            peopleImage3,
        } = this.state;

        const prodectData = {
            description,
            link,
            image,
            price,
            subTitle,
            title,
            productReview,
            categorie,
            subCategorie,
            subSubCategorie,
            brand,
            productSource,
            topProduct,
            productMedia: {
                productImage: [
                    {
                        url: productImage1,
                    },
                    {
                        url: productImage2,
                    },
                    {
                        url: productImage3,
                    },
                ],
                peopleImage: [
                    {
                        url: peopleImage1,
                    },
                    {
                        url: peopleImage2,
                    },
                    {
                        url: peopleImage3,
                    },
                ],
            },
        };

        try {
            const product = await axios.post(Paths.BackendBase + '/products/', prodectData);
            console.log('product ==>', product);
        } catch (error) {
            if (error.response) {
                this.setState({
                    ...this.state,
                    errors: { ...error.response.data, statusText: error.response.statusText },
                });

                scroller.scrollTo('root', {
                    smooth: true,
                    duration: 800,
                    delay: 0,
                    smooth: 'easeInOutQuart',
                });
                console.log({ ...error.response.data, statusText: error.response.statusText });
            }
        }
    };

    render() {
        return (
            <Fragment>
                {!!this.state.errors && (
                    <Message
                        warning
                        attached
                        header={
                            'Submit data Fail: ' +
                            this.state.errors.statusText +
                            ' ( Status code ' +
                            this.state.errors.statusCode +
                            ')'
                        }
                        content={
                            'Error creator: ' +
                            this.state.errors.createdBy +
                            ', ' +
                            'Time stamp => (' +
                            this.state.errors.timestamp +
                            '), Path => ' +
                            this.state.errors.path +
                            '.'
                        }
                    />
                )}

                <Form warning onSubmit={this.onSubmitProductHandler} className="AdminAddNewProduct">
                    <div className="Dropdown">
                        {dropdownConfigs.map(dropdownConfig => {
                            let errors;
                            if (!!this.state.errors && !!this.state.errors.validationException) {
                                const validationException = this.state.errors.validationException;
                                if (!!validationException[dropdownConfig.name]) {
                                    errors = validationException[dropdownConfig.name];
                                }
                            }
                            return (
                                <DropdownSingle
                                    onCategoryHandler={this.onCategoryHandler}
                                    key={dropdownConfig.lable}
                                    config={dropdownConfig}
                                    state={this.state}
                                    errors={errors}
                                />
                            );
                        })}
                    </div>

                    {inputFieldConfigs.map(inputFieldConfig => {
                        let errors;
                        if (!!this.state.errors && !!this.state.errors.validationException) {
                            const validationException = this.state.errors.validationException;
                            if (!!validationException[inputFieldConfig.name]) {
                                errors = validationException[inputFieldConfig.name];
                            }
                        }
                        return (
                            <InputField
                                state={this.state}
                                onChangeInputField={this.onChangeInputField}
                                key={inputFieldConfig.lable}
                                config={inputFieldConfig}
                                errors={errors}
                            />
                        );
                    })}

                    <QuillTextEditor
                        quillData={this.state.productReview}
                        QuillTextEditorData={this.QuillTextEditorData}
                    />

                    <Button type="submit" primary>
                        Primary
                    </Button>
                </Form>
            </Fragment>
        );
    }
}

export default AdminAddNewProduct;
