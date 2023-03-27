import React from 'react';
import './myParagraph.css';

const AboutUs = () => {
    return (
        <div>
            <h2>About Me</h2>
            <div className="myParagraph">
                <p>
                    My name is Rafid H. Shaon, a passionate and dedicated software
                    engineer with a keen interest in web development and modern
                    technologies. I am constantly learning and pushing myself to
                    expand my skill set, allowing me to create innovative and
                    user-friendly applications.{' '}
                </p>

                <p>
                    Recently, I undertook a project to develop a To-Do list web
                    application, which I chose because I recognized the need for
                    a simple and intuitive tool to help people manage their
                    tasks and stay organized. This project allowed me to improve
                    my understanding of full-stack development and provide a
                    valuable resource for users.{' '}
                </p>

                <p>
                    For this project, I utilized a technology stack consisting
                    of React for the frontend, Node.js and Express for the
                    backend, and MongoDB as the database. To enable seamless
                    communication between the frontend and backend, I used Axios
                    for AJAX requests. React Router was employed to create a
                    smooth navigation experience across multiple pages, making
                    the application more accessible and user-friendly. Mongoose
                    was used for creating and managing MongoDB schemas and
                    models. The application demonstrates a simple user
                    authentication system, although it's not secure and should
                    not be used in production.{' '}
                </p>

                <p>
                    Through the development of this To-Do list application, I
                    learned the importance of carefully planning and structuring
                    a full-stack project to ensure efficient communication
                    between frontend and backend components. Additionally, I
                    gained valuable experience in utilizing modern libraries and
                    tools, such as React Router and Axios, to create a seamless
                    and engaging user experience. This project has not only
                    enriched my web development knowledge but also reinforced my
                    passion for creating meaningful and practical applications
                    that improve people's daily lives.
                </p>

                <p>
                    In Professor Roberts' computer science web programming course,
                    I acquired an extensive understanding of HTML, CSS, and 
                    JavaScript, along with numerous invaluable libraries. More than 
                    just imparting technical knowledge, Professor Roberts emphasized 
                    the importance of independent research, equipping me with the 
                    skills to efficiently search for code-related information. 
                    Under his guidance, I overcame anxiety in seeking help, realizing 
                    that asking questions was essential to my growth as a programmer. 
                    In this nurturing environment, I learned never to apologize for 
                    needing assistance, as it was a crucial aspect of my learning 
                    journey.
                </p>

            </div>
        </div>
    );
};

export default AboutUs;
