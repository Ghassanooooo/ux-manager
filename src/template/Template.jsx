import React from 'react';
import TemplateLoading from '../components/Components/TemplateLoading/TemplateLoading';

class DynamicComponent extends React.Component {
    /* Sets the state to save the dynamic component when needed */
    state = {
        DynamicComponent: null,
        isComponent: true,
    };
    TemplateNotFound = () => (
        <div style={{ height: 70, background: 'red', margin: 20 }}>{this.props.block.template} Template Not Found!</div>
    );

    componentDidMount() {
        this.handleOnClick();
    }

    /*
     * Function to be called onClick event.
     * Waits for the import to be completed and stores the default exported
     * value in the state so we can rendered when needed.
     */
    handleOnClick = async () => {
        try {
            const DynamicComponent = await import(
                `../components/${this.props.block.template}/${this.props.block.template}`
            );

            this.setState({
                DynamicComponent: DynamicComponent.default,
                isComponent: true,
            });
        } catch (ex) {
            this.setState({
                ...this.state,
                isComponent: false,
            });
        }
    };

    render() {
        /* Gets the dynamically imported component */
        const { DynamicComponent } = this.state;

        return this.state.isComponent ? (
            !DynamicComponent ? (
                <TemplateLoading />
            ) : (
                <DynamicComponent />
            )
        ) : (
            this.TemplateNotFound()
        );
    }
}
export default DynamicComponent;
