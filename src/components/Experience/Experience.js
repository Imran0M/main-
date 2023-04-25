import './Experience.css'
// import { saveAs } from 'file-saver';
// import axios from 'axios';

function Experience(){
    const experienceData =[
        {
           company:"Outrise Technology Private Limited (Fonicom)",
           job:"Web Developer",
           industry:"Information Technology",
        },
        {
            numone:"Build and Maintained user interface for web based application using Html, CSS, JavaScript and ReactJs",
            numtwo:"Collaborate with UI designers to integrate front-end designs with frontend functionality",
            numthree:"Conducted cross-browser and cross device testing to ensure optimal user experience provided technical support and troubleshooting for clients ",
            numfour:"Collaborate with Developers team to ensure that Ui designs and were implement correctly and functional requirements ",  
        },
         
        {
            company:"Shape Ai(DevTown)",
            job:"Full stack web Developer"
        },
        {
            numone:"I completed a 3 month Full stack web development training and internship at shape AI as a DevTown. During the training I learned how to design and develop responsive websites and web application using Html, CSS, and JavaScript also gained experience working with frontend frameworks and library like bootstrap and reactJs as well as backend technology like Nodejs and mongodb",
            // numtwo:"As a part of the trainning I completed several project",  
        },
    ]
    
    // function downloadResume(){
    //     axios({
    //         url:"https://v2.convertapi.com/d/pbmlm0f9m6oqkmeq9tcgplxzlrvw95i3/Imran_Fswd_resume.pdf",
    //         method:"GET",
    //         responseType: 'blob'
    //     }).then (data =>{
    //         const file = new Blob([data], {type:'application/pdf'})
    //         saveAs(file, "imran_resume.pdf");
    //     }).catch(error =>{
    //         console.log("working on it....")
    //     })
    // }
    return(
        <section id="experience">
       <div className="experience-bg" >
        <div className="container">
        <h1 className="experience-tittle">Work Experience</h1>
        {experienceData.map((exp ,idx)=>(
            <div className="align-style" key={idx}>
            <h3>{exp.company}</h3>
            <h5 className="job-tittle">{exp.job}</h5>
            <p>{exp.numone}</p>
            <p>{exp.numtwo}</p>
            <p>{exp.numthree}</p>
            <p>{exp.numfour}</p>
            </div>
        ))}
        {/* <div className="bton container">
                <button onClick={downloadResume} className="btn-style">Download Resume</button>
            </div> */}
        </div>
       </div>
       </section>
    )
}
export default Experience;
