import { Briefcase, Code, Contact, Music, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Software Engineer and Musician 
            </h3>

            <p className="text-muted-foreground">
              I’m a recent graduate from the University of Otago with a passion for both software engineering and music production. 
              I take pride in writing clean, efficient code and producing high-quality audio.<br></br><br></br> Whether I’m developing an app or composing a track,
              I approach every project with creativity, precision, and a strong work ethic. I enjoy solving problems, learning new tools and technologies, 
              and collaborating with others to bring ideas to life. ,<br></br> I'm excited to contribute to projects that blend tech and creativity—and to grow as both an engineer and a musician.
            </p>

            <p className="text-muted-foreground">
              <h3 className="text-2xl font-semibold">Key Attributes</h3>
            </p>

              <ul className="list-disc pl-6 text-muted-foreground">
                <li><b>Time Management</b> -  I thrive in a busy environment and have become highly skilled at managing my time, balancing university studies, three job, and my music commitments and interests.</li>
                <li><b>Problem Solver </b> - My capacity for creative, critical, and computational thinking makes me a highly effective problem solver in the development of packages and maintenance of existing systems.</li>
              </ul>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="/cv/HamishPhillipsCV.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

        {/*Programming Languages */}
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Software Development</h4>
                  <p className="text-muted-foreground">
                    Proficient in a variety of coding Languages for building
                    responsive and interactive applications, as well as maintenance of existing systems.
                  </p>
                </div>
              </div>
            </div>

            {/* Working with Users */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">People Focussed</h4>
                  <p className="text-muted-foreground">
                    Always strive to understand user needs and deliver
                    solutions that enhance user experience and satisfaction.
                  </p>
                </div>
              </div>
            </div>

            {/* About what I have done for work */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Project Management</h4>
                  <p className="text-muted-foreground">
                    Leading projects from conception to completion with agile
                    methodologies.
                  </p>
                </div>
              </div>
            </div>

            {/* Music Production */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Music className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Music Production</h4>
                  <p className="text-muted-foreground">
                    High Attention to detail in all aspects of music production,
                    from composition to mixing and mastering.
                  </p>
                </div>
              </div>
            </div>

            {/* Music Production */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Contact className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Effective Communicator & Collaborator</h4>
                  <p className="text-muted-foreground">
                    Able to convey complex ideas clearly and work effectively with
                    diverse teams to achieve common goals.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};