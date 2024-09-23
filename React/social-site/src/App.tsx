import { useState } from 'react';
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import SideBar from './components/SideBar';
import DisplayComponent from './components/DisplayComponent';
function App() {

  const [selectedListItem, setSelectedListItem] = useState("Home");
  const [listItems] = useState(["Home", "Create Post"]);

  return (
    <>
    <div className="app-container">
    <Header />
    <div className='main-container'>
    <SideBar listItems = {listItems} selectedListItem = {selectedListItem} onListItemClick={setSelectedListItem}/>
    <DisplayComponent highlightedItem = {selectedListItem}/>
    </div>
    <Footer />
    </div>
    </>
  );
}

export default App
