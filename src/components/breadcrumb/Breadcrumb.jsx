import "./breadcrumb.css"

export const Breadcrumb = (props) => {
    

    function Bread2( isCrumb2 ) {
        isCrumb2 = (props.crumb2)
        return (isCrumb2 === "" ? (null):(<li class="breadcrumb-item" ><a href={props.href} style={{textDecoration: "none",color:"white"}} >{ props.crumb2 }</a></li>)) ;
      }
    
    return(
        
          
        <nav aria-label="breadcrumb" >
            <ol className="breadcrumb center-block justify-content-center items">
                <li class="breadcrumb-item" ><a href="/" style={{textDecoration: "none",color:"white"}} >Home</a></li>
                <Bread2/>
                <li class="breadcrumb-item active" aria-current="page">{ props.crumb }</li>
            </ol>
        </nav>
    )
  
}
