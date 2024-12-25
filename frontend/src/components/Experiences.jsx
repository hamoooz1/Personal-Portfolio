import React from 'react';
import '../styles/Experiences.css';
import Amerilot from '../assets/Amerilot.png'
const Experiences = () => {

  let jobs = [
    {
      title: 'Software Engineer Intern',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_WHEt0TeOkeU_dCSpRsmJ-dCqanLFy7vksg&s',
      company: 'DynamicSLR',
      date: 'Jan 2024 - Present',
      description: 'Scope and develop internal tools for business needs. Created backlog management, AWS QA mechanism to grade call center rep calls, and more.'
    },
    {
      title: 'Software Engineer',
      image: Amerilot,
      company: 'Ameliorat Tech Inc',
      date: 'Jun 2024 - Sept 2024',
      description: 'Worked on a team to develop an app to add to the Square marketplace. Created and maintained backend systems and APIs.'
    },
    {
      title: 'Full Stack Developer',
      image: 'https://media.licdn.com/dms/image/D560BAQFsU-kP9bUM1g/company-logo_200_200/0/1713558493120/immi_ai_logo?e=2147483647&v=beta&t=lAEeKm4-UfprvwavahNJTtjRQnlSGSVdrnkJgSNYqpw',
      company: 'Immican',
      date: 'Oct 2023 - Jan 2024',
      description: 'Developed systems for clients using a NextJS. Worked with project mangers to create custom web solutions.'
    },
    {
      title: 'Frontend Engineer',
      image: 'https://images.crunchbase.com/image/upload/c_pad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/vvaoeibv6ojwjkqhdkvm',
      company: 'Wouessi',
      date: 'June 2023 - Oct 2023',
      description: 'Crafted the wireframe for the main website, developed using React and Tailwind. Worked with project manager to create custom web solutions.'
    },
    {
      title: 'Web Developer',
      image: 'https://proonsite.ca/wp-content/uploads/2022/02/Pro-On-Site-Logo.png',
      company: 'Pro On-Site',
      date: 'Feb 2022 - Present',
      description: 'Developed and maintained websites for clients. Worked with clients to create custom web solutions.'
    }
  ]

  return (
    <section className='experiences'>
      <h3>Experiences</h3>
      <h5>
        As a full stack developer with over two years of experience, I specialize in creating dynamic, responsive web applications and robust backend systems. My journey has been marked by a commitment to delivering high-quality software solutions and enhancing user experiences.
      </h5>
      
      {jobs.map((job, index) => (
        <div className='job-section' key={index}>
          <img src={job.image} alt={job.company} className='job-image'/>
          <div className='job-description'>
            <h4>{job.title}</h4>
            <h5>{job.company}</h5>
            <h5>{job.date}</h5>
            <p>{job.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Experiences;