import './PageHeader.css';
// import homeImg from './../../img/43.png';
// import binaryWorld from './../../img/binaryWorld.jpg'





const PageHeader=()=>{
    return(
        <section className="home" id="home">
        <div className="max-width">
            <div className="home-content">
                <div className="text-1">Hello, my name is</div>
                <div className="text-2">Mufeeda</div>
                <div className="text-3">And I'm a <span className="typing"> Front End developer</span></div>
                {/* <a href="#">Hire me</a> */}
            </div>
        </div>
    </section>
      
  
        )
}
export default PageHeader;