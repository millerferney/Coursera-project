import logo from"./assets/logo192.png"

function App() {
  return (
    <div className="App">
      <h1>Task: Add an image below</h1>
      <img src={logo} alt="Logo" />
      <img src ={require('./assets/logo192.png')} alt = "logo" />
      <img src ={randomImageUrl} />
    </div>
  );
};

export default App;
