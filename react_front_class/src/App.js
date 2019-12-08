import React from 'react';
import './style.css'

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row text-center">
          <div className="col-6">
            <a href="/child/register" class="btn btn-primary">Je suis un enfant</a>
          </div>
          <div className="col-6">
            <a href="/lutin/list-gift" class="btn btn-primary">Je suis un Lutin</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;