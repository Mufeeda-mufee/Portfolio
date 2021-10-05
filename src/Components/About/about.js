import './about.css';
// import PageHeader  from './../PageHeader/PageHeader';

import ME from './../../img/me1.jpg';





const About=()=>{
    return(
       
       
    <section className="about" id="about">
        <div className="max-width">
            <h2 className="title">About me</h2>
            <div className="about-content">
                <div className="column left">
                    <img src={ME} alt="mine"/>
                </div>
                <div className="column right">
                    <div className="text">I'm Mufeeda and I'm a <span className="typing-2">Front end developer</span></div>
                    <p>Seasoned and independent Front End Developer with 1 and half years of 
                        experience in blending the art of design with skill of programming to
                         deliver an immersive and engaging user experience through efficient
                          website development, proactive feature optimization, and relentless
                           debugging.</p>
                    {/* <a href="C:\Users\hp\Documents\MUFEEDA_CV\mufeeda_cv[1].pdf">Download CV</a> */}
                </div>
            </div>
        </div>
    </section>
    )
}
export default About;