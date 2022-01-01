import { Laptop24 as Laptop } from '@carbon/icons-react';
import { Api24 as API } from '@carbon/icons-react';
import { Datastore24 as DataStore } from '@carbon/icons-react';
import { Kubernetes24 as Kubernetes } from '@carbon/icons-react';



export const Categories = [
    {
        title:"Frontend",
        description:"The front-end of a website is the part that users interact with",
        icon:<Laptop/>,
        link:"./Frontend"
    },
    {
        title:"Backend",
        description:"The front-end of a website is the part that users interact with",
        icon:<API/>,
        link:"./Backend"
    },
    {
        title:"Database",
        description:"The front-end of a website is the part that users interact with",
        icon:<DataStore/>,
        link:"./Database"
    },
    {
        title:"DevOps",
        description:"The front-end of a website is the part that users interact with",
        icon:<Kubernetes/>,
        link:"./Devops"
    },
]