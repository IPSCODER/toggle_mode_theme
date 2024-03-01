import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';

function App() {

  const [theme,setTheme] = useState('lightTheme');

  const toggleTheme = () => {
    if (theme === 'darkTheme') {
      setTheme("lightTheme")
    }else{
      setTheme("darkTheme")
    }
  }

  useEffect(() => {
    document.body.className = theme;
  },[theme])

  return (
    <>
    <Header/>
    <button onClick={toggleTheme} >Click to {theme === 'lightTheme' ? 'Dark' : "Light"}</button>
    </>
  );
}

export default App;
