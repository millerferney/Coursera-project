import React from "react";
import ReactPlayer from "react-player/youtube";

/* const App = () => {
  return (
    <div>
      <MyVideo />
    </div>
  );
};

const MyVideo = () => {
  return (
    <ReactPlayer url='https://www.youtube.com/watch?v=H1PgccykclM&ab_channel=Microsoft' />
  );
};

export default App;
 */

function App() {
    const vidURL = 'https://www.youtube.com/watch?v=sgJy6dklpUw&ab_channel=BloombergenEspa%C3%B1ol';
    
  
    return (
    <div className="App">
        <h1>React Player example</h1>
      <ReactPlayer  
      url={vidURL}
      playing = {false}
      volume={0.7}
        controls
      
      />
    </div>
  );
}

export default App;