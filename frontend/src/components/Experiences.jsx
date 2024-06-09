import React from 'react';
import '../styles/Experiences.css';

const Experiences = () => {

  let jobs = [
    {
      title: 'Software Engineer',
      image: 'https://via.placeholder.com/150',
      company: 'Ameliorat Tech Inc',
      date: 'Jun 2024 - Present',
      description: 'Worked on a team to develop and maintain a large-scale web application. Created and maintained backend systems and APIs.'
    },
    {
      title: 'Software Engineer Intern',
      image: 'https://via.placeholder.com/150',
      company: 'DynamicSLR',
      date: 'Jan 2024 - Present',
      description: 'Developed and maintained web applications for a variety of clients. Utilized a variety of technologies to create dynamic, responsive websites.'
    },
    {
      title: 'Full Stack Developer',
      image: 'https://via.placeholder.com/150',
      company: 'Immican',
      date: 'Oct 2023 - Jan 2024',
      description: 'Developed websites for clients using a variety of technologies. Worked with clients to create custom web solutions.'
    },
    {
      title: 'Web Developer',
      image: 'https://via.placeholder.com/150',
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