import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import { useUnleashContext, useFlag } from '@unleash/proxy-client-react'


function App() {
  const quickAdd = useFlag('QuickAdd')

  const updateContext = useUnleashContext()

  const context: any = {
    account: 'vtexinstoredev',
    sessionId: '123456'
  }

  const newContext: any = {
    account: 'trackfield'
  }

  useEffect(() => {
    updateContext(context)
  },[])

  const forceUpdateContext = () => {
    updateContext(newContext)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>          
          <button onClick={() => {alert(quickAdd)}}>Teste Quick Add </button>
          <p/>
          <button onClick={() => forceUpdateContext()}>Update Context</button>
        </p>        
      </header>
    </div>
  );
}

export default App;
