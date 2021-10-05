import './Skills.css';
// import PageHeader from '../PageHeader/PageHeader';

const Skills = () => {
    return (
        <div className="skill-bars " id="skills" >
            <h1>Skills</h1>
            <div className="bar">
                <div className="info">
                    <span>HTML</span>
                </div>
                <div className="progress-line html">
                    <span></span>
                </div>
            </div>
            <div className="bar">
                <div className="info">
                    <span>CSS</span>
                </div>
                <div className="progress-line css">
                    <span></span>
                </div>
            </div>
            <div className="bar">
                <div className="info">
                    <span>javascript</span>
                </div>
                <div className="progress-line jquery">
                    <span></span>
                </div>
            </div>
            <div className="bar">
                <div className="info">
                    <span>Photoshop</span>
                </div>
                <div className="progress-line python">
                    <span></span>
                </div>
            </div>
            <div className="bar">
                <div className="info">
                    <span>ReactJs</span>
                </div>
                <div className="progress-line mysql">
                    <span></span>
                </div>
            </div>
        </div>
      
    )
}
export default Skills;