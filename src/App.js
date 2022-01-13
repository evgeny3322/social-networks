import logo from './logo.svg';
import photo from './img/photo.jpg';
import './App.css';


const App = () =>{
    return (
       <div className='app-wrapper'>
           <header className='header'>
               <img className='header_photo' src="logo.svg" alt=""/>
           </header>
           <nav className='nav'>
               <div>
                   <a>
                       Profile
                   </a>
               </div>
               <div>
                   <a>
                       Messages
                   </a>
               </div>
               <div>
                   <a>
                       News
                   </a>
               </div>
               <div>
                   <a>
                       Music
                   </a>
               </div>
               <div>
                   <a>
                       Settings
                   </a>
               </div>
           </nav>
           <div className='content'>
               <img src='logo.svg' alt=""/>
           </div>
       </div>
    );
}


export default App;
