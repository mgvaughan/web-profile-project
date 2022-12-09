import * as React from 'react';

const Resume = () => {
    return (
        <>
            <div className="container align-items-end mt-4">
                <div className="row d-flex justify-content-between mt-6">
                    <h1 className="col-md-4 d-flex align-items-center">Michael Vaughan</h1>
                    <div className="col-md-4 justify-content-end my-2 d-flex">
                        <div className=" align-items-center col-2 d-flex">
                            <div className="mx-1">
                                <a href="https://github.com/mgvaughan">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" className="bi bi-github" viewBox="0 0 30 30">
                                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                                    </svg>
                                </a>
                            </div>
                            <div className="mx-1">
                                <a href="https://www.linkedin.com/in/michael-vaughan-pe-939460227/">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" className="bi bi-linkedin" viewBox="0 0 30 30">
                                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
            </div>
            <div className="container">
                <section>
                    <h2 className="">Summary</h2>
                    <p className="">Highly motivated Professional Engineer looking to increase my knowledge and experience in Software Engineering while working in a fast-paced work environment.</p>
                </section>
                <section className="my-3">
                    <h2 className="">Technical Skills</h2>
                    <div className="row">
                        <div className="col-md-3">
                            <li>React</li>
                            <li>Python</li>
                            <li>MySQL Workbench</li>
                        </div>
                        <div className="col-md-3">
                            <li>Node.js/Express</li>
                            <li>HTML</li>
                            <li>Microsoft Office</li>
                        </div>
                        <div className="col-md-3">
                            <li>JavaScript</li>
                            <li>CSS</li>
                            <li>AutoCAD</li>
                        </div>
                        <div className="col-md-3">
                            <li>TypeScript</li>
                            <li>Bootstrap</li>
                            <li>Heroku</li>
                        </div>
                    </div>
                </section>


                <section className="my-3">
                    <h2 className="">Experience</h2>


                    <main>
                        <div className="row">
                            <h5 className="col-md-6">Schnabel (Marietta, GA)</h5>
                        </div>
                        <div className="row">
                            <h6 className="col-md-6">Project Manager, Pre-Construction</h6>
                            <h6 className="col-md-6 text-end fst-italic">January 2020 - August 2022</h6>
                        </div>
                        <div className="row">
                            <h6 className="col-md-6">Construction Manager</h6>
                            <h6 className="col-md-6 text-end fst-italic">June 2017 - December 2019</h6>
                        </div>
                        <p>Under both titles, I operated as both a Pre-Construction & Construction Project Manager.  As a Construction Project Manager, I managed projects in multiple states, and typically managed multiple projects simultaneously.  For FY 2022, I was a top 5 project manager for Schnabel with reference to Project Income ($) earned.</p>
                        <div className="row justify-content-center">
                            <div className="col-md-10">
                                <h6>As a Pre-Construction Project Manager, I completed the following responsibilities for bids:</h6>
                                <div className="list-group">
                                    <li className="">Reviewed bid documents (Project Drawings, Specifications, Geotech Reports).</li>
                                    <li className="">Designed preliminary shoring layout drawings and calculations.</li>
                                    <li className="">Utilized the preliminary shoring design to produce the material quantity take-offs, schedule, and budget for the work.</li>
                                    <li className="">Wrote and submitted a proposal for the shoring work needed on given project.</li>
                                    <li className="">Attended pre-construction meetings to network with clients, and to discuss submitted bid proposal, work schedule, and workflow.</li>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center mt-3">
                            <div className="col-md-10">
                                <div className="list-group">
                                    <h6>As the Construction Project Manager, I completed the following responsibilities for projects:</h6>
                                    <li className="">Reviewed construction documents (Project Drawings, Specifications, Geotech Reports).</li>
                                    <li className="">Finalized the design for the shoring walls needed for a given project: Produced the calculation package for the designed system and oversaw the production of the shop drawings for the work.</li>
                                    <li className="">Executed material quantity take-offs based on project shop drawings.  Utilized this information to generate accurate overall project schedule and budget.</li>
                                    <li className="">Negotiated contract and change orders with General Contractors.</li>
                                    <li className="">Created project specific safety documents and General Contractor’s required submittal documents.</li>
                                    <li className="">Ordered and scheduled delivery of essential materials and equipment needed for successful completion of project.</li>
                                    <li className="">Effectively communicated schedule updates and timely communicated foreseeable issues at client meetings.</li>
                                    <li className="">Completed all project specific closeout documents.</li>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center mt-3">
                            <div className="col-md-10">
                                <div className="list-group">
                                    <h6>Leadership Positions:</h6>
                                    <li>Held the role of Regional Safety Representative from 03/2019 to 10/2022.  The responsibilities for this role were to represent our region in company Safety Committee Meetings, as well as host Annual Regional Safety Meetings for engineers and key field personnel.</li>
                                    <li>Selected as a Mentor for Schnabel’s Pilot Mentorship Program for Summer 2022 Interns.</li>
                                    <li>Performed reviews of colleague’s shop drawings, calculations, budgets, and proposals.</li>
                                </div>
                            </div>
                        </div>
                    </main>


                    <main className="mt-3">
                        <div className="row">
                            <h5 className="col-md-5">Groundforce Shorco (U.K.)</h5>
                        </div>
                        <div className="row">
                            <h6 className="col-md-6">Technical Services Engineer</h6>
                            <h6 className="col-md-6 text-end fst-italic">August 2016 - March 2017</h6>
                        </div>
                        <div className="row">
                            <h6 className="col-md-6">Graduate Engineer</h6>
                            <h6 className="col-md-6 text-end fst-italic">October 2014 - July 2016</h6>
                        </div>
                        <p>Under both titles, I designed increasingly complex temporary shoring systems. I designed and priced more than 1,300 excavations varying in size from small excavations up to large cofferdams with multiple raking struts.</p>
                        <div className="row justify-content-center">
                            <div className="col-md-10">
                                <div className="list-group">
                                    <li className="">Reviewed Geotech Reports and discussed with clients their excavation requirements.</li>
                                    <li className="">Designed temporary shoring system to meet excavation requirements.</li>
                                    <li className="">Drafted AutoCAD drawings of designed shoring system.</li>
                                    <li className="">Produced estimate for cost of materials to be installed in shoring system design.</li>
                                    <li className="">Supported sales personnel in the field with technical knowledge.</li>
                                </div>
                            </div>
                        </div>
                    </main>


                    <main className="mt-3">
                        <div className="row">
                            <h5 className="col-md-5">ECS Southeast, LLC (Marietta, GA)</h5>
                        </div>
                        <div className="row">
                            <h6 className="col-md-6">Staff Engineer</h6>
                            <h6 className="col-md-6 text-end fst-italic">March 2013 - June 2014</h6>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-md-10">
                                <div className="list-group">
                                    <li className="">Helped manage geotechnical projects from beginning to end.</li>
                                    <li className="">Assisted writing pre-construction soil investigation reports.</li>
                                    <li className="">Created report figures using AutoCAD.</li>
                                    <li className="">Supervised SPT, HVAC, and Airtrack Drilling, GeoPier Installations, Test Pit Excavations.</li>
                                    <li className="">Performed WDCP, DCP, and Hand Auger field work.</li>
                                    <li className="">Received Caisson Pile and Post Tension Cable Inspection Training.</li>
                                    <li className="">Classified soil samples and performed soil lab testing.</li>
                                </div>
                            </div>
                        </div>
                    </main>
                </section>

                <section className="my-3">
                    <h2 className="">Education</h2>
                    <div className="row">
                        <h6 className="col-md-6">Covalence Fullstack Engineering Bootcamp (Molecular Program)</h6>
                        <h6 className="col-md-6 text-end fst-italic">December 2022</h6>
                    </div>
                    <div className="row">
                        <h6 className="col-md-6">Georgia Institute of Technology</h6>
                        <h6 className="col-md-6 text-end fst-italic">December 2012</h6>
                    </div>
                    <h6 className="col-md-6">Bachelor of Science in Civil Engineering</h6>
                    <li className="px-4">Concentrations: Structural, Geotechnical, and Enviromental Engineering</li>
                </section>

                <section className="my-3">
                    <h2 className="">Achievements</h2>
                    <div className="row">
                        <h6 className="col-md-6">P.E. Status</h6>
                        <h6 className="col-md-6 text-end fst-italic">December 12, 2020</h6>
                    </div>
                    <li className="px-4">Earned Georgia Professional Engineering License #PE046597</li>
                    <h6 className="col-md-6">Eagle Scout</h6>
                </section>

                <section className="my-3">
                    <h2 className="">Certificates</h2>
                    <div className="row">
                        <h6 className="col-md-6">Harvard Business School Online Negotiation Mastery Course</h6>
                        <h6 className="col-md-6 text-end fst-italic">August 24, 2022</h6>
                    </div>
                    <div className="row">
                        <h6 className="col-md-6">AMA Critical Thinking Course</h6>
                        <h6 className="col-md-6 text-end fst-italic">August 17, 2022</h6>
                    </div>
                    <div className="row">
                        <h6 className="col-md-6">University of Michigan: Python for Everybody Specialization (5 Course Certificate)</h6>
                        <h6 className="col-md-6 text-end fst-italic">March 9, 2022</h6>
                    </div>
                    <div className="row">
                        <h6 className="col-md-6">ADSC Field Manager Course</h6>
                        <h6 className="col-md-6 text-end fst-italic">February 18, 2022</h6>
                    </div>
                    <div className="row">
                        <h6 className="col-md-6">FranklinCovey Time Management Essentials Course</h6>
                        <h6 className="col-md-6 text-end fst-italic">December 5, 2019</h6>
                    </div>
                    <div className="row">
                        <h6 className="col-md-6">OSHA 30</h6>
                        <h6 className="col-md-6 text-end fst-italic">June 6, 2017</h6>
                    </div>
                </section>

                <section className="my-3">
                    <h2 className="">Interests</h2>
                    <p>Kayaking, Hiking, Tennis, History Podcasts</p>
                </section>
            </div>
            <div className="container my-5">

            </div>
            <div className="container my-5">

            </div>
        </>
    )
}

export default Resume;