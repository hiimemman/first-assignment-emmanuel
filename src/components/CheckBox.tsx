import { useState } from "react";
import '../styles/customStyle.css'

interface ICheckBoxProps{
    labelName : string;
    id: string;
  }
export default function CheckBox( {checkBoxProps} : { checkBoxProps : ICheckBoxProps []}){
   
    const [checkedState, setCheckedState] = useState<{ [key: string]: boolean }>({});

    // Toggle the checkbox state based on its ID
    const handleChange = (id: string) => {
        setCheckedState((prevState) => ({
          ...prevState,
          [id]: !prevState[id], 
        }));
    };
    
    return(
        // ITERATE THROUGH CHECKBOXES
       checkBoxProps.map((checkBox : ICheckBoxProps) =>{
        return(
            <div className="checkbox-card" onClick={() => handleChange(checkBox.id)}>
            <label className="checkbox-label">{checkBox.labelName}</label>
            <input
                type="checkbox"
                id= {checkBox.id}
                className="custom-checkbox" 
                checked={checkedState[checkBox.id] || false}
                onChange={() => handleChange(checkBox.id)}
            />
            <label htmlFor={checkBox.id} className="checkbox-icon"/>
        </div>
        )

       })
      
    )

}