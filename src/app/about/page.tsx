function page() {
  return (
    <>
      <section>
        <h2>Story</h2>
        <h3>1. how I begun</h3>
        <p>
          I acquired my software engineering skills through hands-on experience
          in the real world while working part-time in 2015. It was during the
          winter break of my graduate school program, where I was assigned
          simple office tasks. The project involved converting an ERP system
          written in DOS into a GUI-based system.
        </p>
        <p>
          As I worked on the project, I soon realized that the DOS system was
          incredibly inefficient. Everyone, including the staff and new team
          members, constantly complained about its drawbacks. Even though I
          wasn&apos;t an expert in data structures, being a social scientist and
          urban planner involved in quantitative analysis with various datasets,
          I had a basic understanding of relational databases. Through some
          reverse-engineering, I figured out the structure of the data stored in
          the dbf files and discovered that Microsoft Access allowed real-time
          data sharing through files. This revelation gave me the confidence
          that the conversion was achievable. Encouraged by this, I dared to ask
          if I could take on the task of converting the system.
        </p>
        <p>
          No compensation was requested since the project wasn&apos;t officially
          planned. There was no guarantee of its success, just a strong desire
          to make it happen. Once my boss gave me the green light, I started by
          compiling a list of existing functionalities and actively sought input
          from people on what should be added or removed. This marked my first
          foray into discussing user requirements! I taught myself how to use
          Microsoft Access to create forms for CRUD operations, queries to
          extract and display data, and implemented features for printing,
          descriptive statistics, and searching. I felt like a master of MS
          Access at that point. Throughout the development process, I worked
          closely with the actual users, receiving daily feedback on various
          functionalities and the user interface. After a month of intense work,
          I successfully migrated the data and launched the MS Access program I
          had built. The program continued to serve its purpose for five years
          until an official program was adopted.
        </p>
        <p>
          Looking back, this experience laid a strong foundation for my software
          development journey. Surprisingly, there was hardly any coding
          involved, except for some SQL-like statements. Thanks to MS Access,
          the process of writing those statements was made easy. What astonishes
          me the most is that I went through all the steps without any knowledge
          of software engineering concepts. It&apos;s incredible to think that
          even as a novice, as long as one can think logically and has a genuine
          desire to simplify people&apos;s lives, they can build something
          remarkable.
        </p>
        <h3>2. how I used to the actual coding</h3>
        <p>
          After that experience, I decided to further my academic journey and
          pursued a Master&apos;s degree in Urban Planning at Iowa State
          University. During my studies, I took a Python for Automation class
          and a Satellite Image class. In the Python class, I learned the
          fundamentals of Python for data manipulation and became comfortable
          writing scripts, as I was an end-user of tools like ArcGIS and math
          libraries. In the Satellite Image class, I gained insights into
          fundamental concepts such as supervised and unsupervised learning,
          which introduced me to the world of machine learning. This deepened my
          passion for coding even more. For my final project, I utilized
          Beautiful Soup to scrape HTML elements and automate data extraction.
          Along the way, I also learned the importance of respecting data
          ethics. This experience highlighted the need to handle data
          responsibly and ethically, which further enhanced my understanding of
          the broader implications of coding and data manipulation.
        </p>
        <h4>3. how I entered the dev world</h4>
        <p>
          After the Covid break, I returned to my home country. I liked research
          but had a stronger desire for stable income from having a job. To
          pursue a career in software development, I enrolled in a bootcamp that
          offered courses on Java, SQL, HTML, JavaScript, and the Spring
          framework. Learning Java and SQL during the bootcamp was an enriching
          experience, with a particular highlight being the introduction to the
          concept of object-oriented programming (OOP). I found OOP to be
          philosophically beautiful, as it provided a structured and elegant
          approach to software design. My previous experience working with
          relational data proved to be immensely helpful as I delved into SQL.
          It was like fitting together puzzle pieces seamlessly. I built various
          portfolios during the bootcamp, showcasing my skills, and eventually
          landed my first job as a backend developer. It was an exciting step
          forward in my career journey.
        </p>
        <p>
          The first task at hand was to analyze the existing data structures as
          the company planned to migrate from a monolithic system to a
          microservices architecture (MSA) while also incorporating a hybrid
          setup. This task presented its challenges, given the numerous services
          already in production. Our team decided to begin by identifying and
          separating points of interest. I took the lead in creating diagrams as
          a draft and collaborating with the team to discuss the proposed
          changes.
        </p>
        <p>
          While my senior focused on maintaining the existing services and
          leading backend service, my role involved developing new APIs for the
          homepage CMS, authentication, and the point system. Additionally, I
          was responsible for building a simple API gateway and a migration
          program. As the company had chosen a specific tech stack, I took it
          upon myself to learn TypeScript, NodeJS, Express/NestJS, TypeORM, and
          Swagger. These experiences were invaluable in teaching me not only the
          importance of development itself but also the significance of
          effective teamwork and communication in practice.
        </p>
      </section>
      <section>
        <h2>What&apos;s Next</h2>
        <h3>1. filling the gaps</h3>
        <p>
          I know I have to fill the gaps on the fundamental of computer science.
          - started UoL distance learning - udemy, coursera
        </p>
        <p>speicifically, backend - blah blah / frontend - blah blah</p>
        <h3>2. my recent interest area</h3>
        <p>
          domain: built-environment like real estate, architecture, and
          buildings, environment, energy
        </p>
        <p>technology: interacting with bulit-environment in VR/AR</p>
        <h3>3. bulid something anyway</h3>
        <p>
          I just want to enjoy making. There are so many tools that I can reach
          and good tutorials to follow. Adding a little bit more creativity will
          be my main method to grow. I have a lot of idea list to bulid, and I
          can&apos;t wait for playing with it!
        </p>
      </section>
      <section>
        <h2>Skills</h2>
        <h3>Skills I&apos;ve experienced</h3>
        <p>
          TS, JS, Spring, NestJS, NodeJS, ExpressJS, React, NextJS, Docker, AWS
          EC2/S3/Gateway/RDS
        </p>
        <h3>Skills I&apos;m interested in</h3>
        <p>Data monitoring, ...</p>
      </section>
      <section>
        <h2>Resume</h2>
        <p>Downlod</p>
      </section>
    </>
  );
}

export default page;
