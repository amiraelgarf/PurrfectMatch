import NavBar from './NavBar';
import './Products.css';

export default function Products(){
   
    const navStyle = {
        borderColor: '#6F3BB2',
        borderStyle: 'solid',
        borderWidth: '5px'
    };

    return(
        <div className = "background2">
       <NavBar style={navStyle}/>
        <h1>Products</h1>
        
        </div>
    )
}