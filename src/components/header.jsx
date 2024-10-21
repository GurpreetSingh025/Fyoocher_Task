import "../styles/header.css" ;
export default function Header(){
    return(
         <div className="headerCont">
              <div className="title-cont">
                   <div className="title-cir"></div> 
                   <div className="title-name-cont centerIt text-white">
                       <p className="family">Inventory Management System</p>
                   </div>
              </div>
              <div className="centerIt text-white">
                   <p className="family">Home</p>
              </div>
         </div>
    )
}
