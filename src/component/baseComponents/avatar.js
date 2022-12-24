import './avatar.css';


const av = document.getElementById('avat');


function Avatar({position}){    
    
    return(
        <div style={{left: position.x, bottom: position.y}} class="avatar">

        </div>
    );
}

export default Avatar;