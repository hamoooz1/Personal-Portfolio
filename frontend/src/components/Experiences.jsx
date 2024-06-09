import React from 'react';
import '../styles/Experiences.css';

const Experiences = () => {

  let jobs = [
    {
      title: 'Software Engineer',
      image: 'https://img1.wsimg.com/isteam/ip/5c91d6ad-b651-47c2-a35b-0cecb7fbd78a/Amerliorat%20Tech%20logo%20with%20text.png/:/rs=w:430,h:51,cg:true,m/cr=w:430,h:51/qt=q:95',
      company: 'Ameliorat Tech Inc',
      date: 'Jun 2024 - Present',
      description: 'Worked on a team to develop and maintain a large-scale web application. Created and maintained backend systems and APIs.'
    },
    {
      title: 'Software Engineer Intern',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_WHEt0TeOkeU_dCSpRsmJ-dCqanLFy7vksg&s',
      company: 'DynamicSLR',
      date: 'Jan 2024 - Present',
      description: 'Developed and maintained web applications for a variety of clients. Utilized a variety of technologies to create dynamic, responsive websites.'
    },
    {
      title: 'Full Stack Developer',
      image: 'https://media.licdn.com/dms/image/D560BAQFsU-kP9bUM1g/company-logo_200_200/0/1713558493120/immi_ai_logo?e=2147483647&v=beta&t=lAEeKm4-UfprvwavahNJTtjRQnlSGSVdrnkJgSNYqpw',
      company: 'Immican',
      date: 'Oct 2023 - Jan 2024',
      description: 'Developed websites for clients using a variety of technologies. Worked with clients to create custom web solutions.'
    },
    {
      title: 'Web Developer',
      image: 'https://proonsite.ca/wp-content/uploads/2022/02/Pro-On-Site-Logo.png',
      company: 'ProOnSite',
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