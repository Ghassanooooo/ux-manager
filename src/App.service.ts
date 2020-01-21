import React, { useState ,useCallback} from 'react'
import update from 'immutability-helper'

import uuid from 'uuid'


const test = {
   home:{
    id:'uuid',
    name:'home page',
    key:'home',
    title:'fish oil',
    description:'some description',
    options:[
        {
            id:'uuid',
            name:'table temp',
            key:'TableTemlate',
            title:'fish oil',
            description:'some description',
            options:[
                {
                    id:'uuid',
                    name:'table temp',
                    key:'TableComponent',
                    title:'fish oil',
                    description:'some description',
                    // in the backend we pull the product by populate we pull just a bit info (id, desc, title, img)
                    product:'product id (tz8888889999okmhgvbn)'
                }
            ]
        }
    ]
}
}

const AppService = () => {
    const [pages, setPages] = useState({
        id: uuid(),
        name:'home page',
        key:'home',
        title:'fish oil',
        description:'some description',
        options:[
            {
                id:uuid(),
                name:'table temp',
                key:'TableTemlate',
                title:'fish oil',
                description:'some description',
                options:[
                    {
                        id:uuid(),
                        name:'table temp',
                        key:'TableComponent',
                        title:'fish oil',
                        description:'some description',
                        // in the backend we pull the product by populate we pull just a bit info (id, desc, title, img)
                        product:'product id (tz8888889999okmhgvbn)'
                    }
                ]
            }
        ]
    })

      const moveCard = useCallback(
        (dragIndex:any, hoverIndex:any) => {
          const dragCard = pages.options[dragIndex]
          setPages(
            update((pages as any).options, {
              $splice: [
                [dragIndex, 1],
                [hoverIndex, 0, dragCard],
              ],
            }),
          )
        },
        [pages],
      )

const insertCard =(key:any)=>{
    console.log('insertCard <== ==> ', key)
    const clonePages= JSON.parse(JSON.stringify(pages));
    clonePages.options.push(
        {
            id:uuid(),
            name:'table temp',
            key:key.name,
            title:'fish oil',
            description:'some description',
            options:[]
        }
      
    )
   setPages(clonePages)
    console.log('insertCard ==>',key)
   
}

const getPages =()=>pages.options
  return{
    getPages,
    moveCard,
    insertCard
  }
};

export default AppService;