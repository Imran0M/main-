import './Pro.css'
import imagesearch from './assets/imagesearch.png'
import crud from './assets/crud.png'
import admindashboard from './assets/admindashboard.png'

function Pro() {




    return (
        <section id="project">
            <div className="pro-bg">
            <div className="container">
            <h1 className="project-tittle ">Projects</h1>
            <div className="project-section ">
                <div>
                    <h3 className="project-name">CRUD</h3>
                    <p className="des-pro">Technology using of this Application ReactJs, and Bootstrap</p>
                    <p className="des-pro">A CRUD project is a software application that performs the four basic functions of creating, reading, updating, and deleting data in Api. CRUD stands for Create, Read, Update, and Delete, and these operations are fundamental to most software applications that need to store and manage data</p>
                    <p className='des-pro'>The Create operation allows users to add new records to the database, while the Read operation retrieves data from the database and displays it to the user. The Update operation allows users to modify existing data, and the Delete operation removes data from the database. These operations can be performed through a web interface, a REST API.</p>
                   
                </div>
                <div>
                    <img className="validation-image" src={crud} alt="crud-pic" />
                    <a className="decoration-style" href="https://main-crud.netlify.app/" target="blank"><button className="btn "> Live site</button></a>
                </div>
                
            </div> 
             <p className="line "></p>
            <div className="project-section " >
                <div >
                  <h3 className="project-name">Image search engine</h3>
                
                    <p className="des-pro">Technology using of this Application Html, css, and javaScript</p>
                    <p className="des-pro">An image search engine project is a software application that allows users to search for images on the internet based on their queries. The goal of this project is to develop an algorithm that can quickly and accurately search through a large database of images and return the most relevant results to the user.</p>
                    
                    {/* <a className="decoration-style" href="" target="blank"><button className="btn">Source Code</button></a> */}
                </div>
                <div>
                <img className="validation-image" src={imagesearch} alt="imagesearch-pic" />
                <a className="decoration-style" href="https://image-searchengine.netlify.app/" target="blank"><button className="btn "> Live site</button></a>{' '}
                </div>
            </div>
            <p className="line "></p>
            <div className=" project-section ">
                <div>
                    <h3 className="project-name">Admin Dashboard</h3>
                    <p className="des-pro">Technology using of this Application ReactJs and Bootstrap</p>
                    <p className="des-pro">User interface UI projects involve designing and developing the visual and interactive elements of a software application or website to provide an engaging user experience.</p>
                    <p className="des-pro">such as navigation menus, forms, and graphics, to provide an appealing and easy-to-use interface for visitors.</p>
                   
                </div>
                <div>
                    <img className="validation-image" src={admindashboard} alt="imagesearch-pic" />
                    <a className="decoration-style " href="https://react-ui-comp.netlify.app/" target="blank"><button className="btn "> Live site</button></a>
                </div>

            </div>
        </div>
        </div> 

       
        </section>

    )
}
export default Pro;
















