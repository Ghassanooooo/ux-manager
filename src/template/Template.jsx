import React,{useState,useEffect} from 'react';
import TemplateLoading from '../components/Components/TemplateLoading/TemplateLoading';

function DynamicComponent () {
 
    const {state,setState} = useState(
        {
            DynamicComponent: null,
            isComponent: true,
            key:'TemplateProductsCarousel'
        }
    )
    useEffect(()=>{
        handleOnClick();
    },[])
    const TemplateNotFound = () => (
        <div style={{ height: 70, background: 'red', margin: 20 }}>{state.key} Template Not Found!</div>
    );
    const handleOnClick = async () => {
        try {
            const DynamicComponent = await import(
                `../components/${state.key}/${state.key}`
            );

            setState({
                DynamicComponent: DynamicComponent.default,
                isComponent: true,
            });
        } catch (ex) {
            setState({
                ...state,
                isComponent: false,
            });
        }
    };

        const { DynamicComponent } = state;

        return state.isComponent ? (
            !DynamicComponent ? (
                <TemplateLoading />
            ) : (
                <DynamicComponent />
            )
        ) : (
            TemplateNotFound()
        );

}
export default DynamicComponent;
