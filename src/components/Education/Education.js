import './Education.css'

function Education() {
    const educationData=[
        {
            degree:"Master of computer Application-MCA",
            university:"Amity University - Noida",
            percentage:"Pursing"
        },
        {
            degree:"Bachelor of computer Application-BCA",
            university:"Bharathidasan University- Trichy",
            percentage:"Secured with 74%"
        },
        {
            degree:"CK school of pk matric hr sec school",
            university:"Cuddalore -Tamil Nadu",
            percentage:"Secured with 55%"
        },
        {
            degree:"Lakshmi Matriculation School",
            university:"Cuddalore -Tamil Nadu",
            percentage:"Secured with 74%"
        },
    ]
    return (
        <section id="education">

       
        <div className="edu-bg">
            <div className="container">
            <h1 className="education-title">Education</h1>
            <div className="education-style ">
                {educationData.map((edu, index)=>(
                    <div key ={index}>
                        <h4>{edu.degree}</h4>
                        <p>{edu.university}</p>
                        <p>{edu.percentage}</p>
                    </div>
                ))}
            </div>
            </div>
        </div>
        </section>
    )
}
export default Education;