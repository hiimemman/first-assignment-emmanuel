import Button from "./components/Button"
import CheckBox from "./components/CheckBox"
import Frame from "./components/Frame"
import './styles/customStyle.css'
function App() {
  
  interface ICheckBoxProps{
    labelName : string;
    id: string;
  }

  // CHECKBOXES
  const checkBoxes :  ICheckBoxProps[] = [
    { id:"1", labelName: "Page 1" },
    { id:"2", labelName: "Page 2" },
    { id:"3", labelName: "Page 3" },
    { id:"4", labelName: "Page 4" }
  ];

  return (
    <>
    <Frame>
      
      <CheckBox checkBoxProps={[{id:"All", labelName:"All pages"}]}/>
      <hr />
      <CheckBox checkBoxProps={checkBoxes}/>
      <hr />
      <Button />
    </Frame>
    
    </>
  )
}

export default App
