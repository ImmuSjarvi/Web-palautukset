import React from 'react';


export default function Title() {
  return <nav className= "nav-list">
      <div className="headerInner">
        <h1>HELSINGIN SANOMAT</h1>
        <ul className= "ylapalkkiVasen">
            <li><a href="#">Etusivu</a></li>
            <li><a href="#">Uutiset</a></li>
            <li><a href="#">Lehdet</a></li>
            <li><a href="#">Asiakaspalvelu</a></li>
        </ul>
        <ul className= "ylapalkkiOikea">  
            <li ><a href="#" id="tilaa">Tilaa</a></li>
            <li><a href="#">Kirjaudu</a></li>
            <div class="dropdown">
                <button class="dropbtn" >Valikko 
                    
                </button>
                <div class="dropdown-content">
                <a href="#">Täällä ei</a>
                <a href="#">oo oikeesti</a>
                <a href="#">mittää</a>
                </div>
            </div>
        </ul> 
        </div>
        
    </nav>;
}
