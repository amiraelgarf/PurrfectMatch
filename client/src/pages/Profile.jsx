import NavBar from "./NavBar";
import './Profile.css';

export default function Profile(){
    const navStyle = {
        borderColor: '#6F3BB2',
        borderStyle: 'solid',
        borderWidth: '5px'
    };

    return(
        <div className = "background3">
        <h1>Profile</h1>
        <NavBar style={navStyle}/>
        </div>
    )
}