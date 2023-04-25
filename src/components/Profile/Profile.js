import './Profile.css';
import imran_m from './assets/imran_m.jpg'

function Profile() {
    return (
        <section id="about">
        <div className="profile-bg">
            <div className=" profile container">
                <div className="img-name">
                    <img className="my-image " src={imran_m} alt="imran" />
                    <p className="my-name ">Mohamed Imran</p>
                </div>
                <div className="tittle-text">
                    <p className="about-text">I am Full stack web Developer with a year of experience in building responsive websites and web application development. Strong proficiency in HTML, CSS, and JavaScript, Experience with popular front-end library such as ReactJS, Strong understanding of problem solving and web standards and best practices for web development.</p>
                </div>
            </div>
        </div>
        </section>
    )
}
export default Profile;