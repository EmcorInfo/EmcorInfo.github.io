import "./breadcrumb.css"

export const Breadcrumb = (props) => {
    return(
        <nav aria-label="breadcrumb" >
            <ol className="breadcrumb center-block justify-content-center items">
                <li class="breadcrumb-item" ><a href="/" style={{textDecoration: "none",color:"white"}} >Home</a></li>
                <li class="breadcrumb-item active" aria-current="page">{ props.crumb }</li>
            </ol>
        </nav>
    )
  
}
