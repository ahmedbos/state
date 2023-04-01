import './App.css';
import { useState } from "react";
import ReactDOM from "react-dom/client";

function App() { 

  const [inputs, setInputs] = useState({});

const handleChange = (event) => {
  const name = event.target.name;
  const value = event.target.value;
  setInputs(values => ({...values, [name]: value}))
}
var iw=5;
switch (inputs.gender) {case 'male' :
                                       iw+=50+(0.91*parseInt(inputs.heigth)-152.4);
                                       break;
                        case 'female' :
                                       iw+=45.5+(0.91*parseInt(inputs.heigth)-152.4);
                                        break;  };
iw=Math.floor(iw);
var msgs="";
if (inputs.heigth==undefined){msgs=""}
else {
if (parseInt(inputs.weigth)==iw){msgs=` ${inputs.username} your weigth is ideal`}
else if(parseInt(inputs.weigth)<iw){msgs=`${inputs.username} your weigth is unfortunately not ideal infact your ideal weigth should be ${iw} so you're underweigth`}
else {msgs=`${inputs.username} your weigth is unfortunately not ideal infact your ideal weigth should be ${iw} so you're overweigth`}
}
const handleSubmit = (event) => {
  
  event.preventDefault();
  console.log(inputs);
  console.log(iw);
  console.log(msgs);
}

  return (
    <div className="App">
      <header className="App-header">
        <h1>is your weigth ideal ??  Let's find out</h1>
        <p>we're going to find out through this form !</p>
        <form onSubmit={handleSubmit}>
      <label>Username:
      <input 
        type="text" 
        name="username" 
        value={inputs.username || ""} 
        onChange={handleChange}
      />
      </label><br/>
      <label>Gender:
        <input 
        type="text" 
        name="gender" 
        value={inputs.gender || ""} 
        onChange={handleChange}
        
        />
      </label>
      <br/>
    <label>Age:
      <input 
        type="number"  
        name="age" 
        value={inputs.age || ""} 
        onChange={handleChange}
      />
      </label><br/>
      <label>weight(KG):
      <input 
        type="number"  
        name="weigth" 
        value={inputs.weigth || ""} 
        onChange={handleChange}
      />
      </label><br/>
      <label>Height(cm):
      <input 
        type="number"  
        name="heigth" 
        value={inputs.heigth || ""} 
        onChange={handleChange}
      />
      </label>
      
      
      
      
      
    </form>
      </header>
      <div class='message'>
       <span><h2> {msgs} </h2></span>
       <span><h1 class="msg"></h1></span>

      </div>
    </div>
  );
}

export default App;
