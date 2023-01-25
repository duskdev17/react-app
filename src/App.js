import './App.css';

const App = () => {
  const name = 'Anik'
  const isNameShowing = false

  const Person = (props) => {
    return (
      <>
        <h1>Name: {props.name}</h1> 
        <h1>Age: {props.age}</h1>
        <h1>Hobby: {props.hobby}</h1>
      </>
    )
  }



  return (
    <div className="App">
      <Person name={'anik'} age={30} hobby={'fishing'}/>
      <Person name={'Alan'} age={25} hobby={'Gaming'}/>
      <Person name={'Alex'} age={12} hobby={'Sleeping'}/>
      
    </div>
  );
}

export default App;
