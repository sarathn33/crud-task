import  React from "react";
function Base({title,description,children}){
 return(
    <div className="main-component">
        <header> 
            <h1 className="heading">{title}</h1>
        </header>
        <main className="main-segment">
            <h3 className="description">{description}</h3>
            <div className="child">{children}</div>
        </main>
       
       
    </div>
 )
}
export default Base