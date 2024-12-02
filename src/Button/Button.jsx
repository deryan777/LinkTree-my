import "./button.css"
import { Icon } from "@iconify/react";


export const Button = ({label, icon}) => {
    return (  
     
           
            <button className={`button`}>
                {label}
                {icon && <Icon icon={icon} />}
            </button>
    
    );
}