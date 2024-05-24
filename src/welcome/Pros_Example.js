import { useState } from "react";




function ProsExample(props) {
    const [data, setdata] = useState()
    const [message, setmessage] = useState()
    const [inputvalue, setinputvalue] = useState()
    const [firstname, setfirstname] = useState()
    const [formsend, setformsend] = useState()
    function inputchange(event) {
        setdata(event.target.value)
        
        
    }
    function changhandler(event) {
        event.preventdefault();
        setmessage(data) 
    }
    function firstnamehandler(event) {
        setfirstname(event.target.value)
    } 
    function lastnamehandler(event) {
        setinputvalue(event.target.value)

        
    }
    
    function formhandler(event) {
        setformsend(inputvalue, firstname)
        

      

        
    }
    
    


    return (
        <div>
            <h2>hghh{message} { inputvalue}</h2>
            <h1>Hellohghgjhh,hjbmhg {data}hjgn</h1>
            <button onClick={changhandler}>submit</button>
            <input onChange={inputchange} placeholder="say something"></input>
            <form onClick={formhandler}>
                <input className="firstname" onChange={firstnamehandler} />
                <input className="surname" />
                <input className="lastname" onChange={lastnamehandler} />
                <button type="submit">submit</button>
                
                
                


            </form>
            <li>{formsend }</li>
            



            


        </div>
        
    )
    
};
export default ProsExample;