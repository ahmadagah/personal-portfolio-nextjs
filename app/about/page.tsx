import { title } from "@/components/primitives";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <div className="container mx-auto px-4 py-10">
        <h1
          className={`${title()} text-5xl font-bold text-center text-blue-600 mb-8`}
        >
          About Me
        </h1>
        <div className="space-y-8">
          <section className="bg-white shadow-lg rounded-lg p-6 lg:p-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Who I Am
            </h2>
            <p className="text-lg leading-relaxed mb-4">
              I am a professional software developer with a passion for creating
              innovative solutions that solve real-world problems. With a strong
              foundation in modern web technologies, I have spent years honing
              my skills in{" "}
              <span className="font-medium text-blue-600">
                React, Next.js, TypeScript,
              </span>{" "}
              and{" "}
              <span className="font-medium text-blue-600">
                cloud computing platforms
              </span>{" "}
              such as AWS and Google Cloud.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              My journey into software development started with a curiosity for
              how systems work. Over time, this curiosity grew into a
              deep-seated passion for building efficient, scalable, and
              user-centric applications. Whether it’s designing robust backend
              APIs or crafting seamless user interfaces, I strive to deliver
              value through my work.
            </p>
            <p className="text-lg leading-relaxed">
              In addition to development, I enjoy teaching and mentoring others.
              Sharing knowledge has always been an integral part of my career. I
              believe that learning is a continuous process, and I make it a
              point to stay updated with the latest technologies and industry
              trends.
            </p>
          </section>

          <section className="bg-white shadow-lg rounded-lg p-6 lg:p-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              My Expertise
            </h2>
            <ul className="list-disc pl-6 space-y-3">
              <li className="text-lg">
                **Frontend Development:** Crafting responsive and interactive
                user interfaces using{" "}
                <span className="font-medium text-gray-900">
                  React, Next.js, and Tailwind CSS
                </span>
                .
              </li>
              <li className="text-lg">
                **Backend Development:** Designing and implementing scalable
                REST APIs and GraphQL endpoints with{" "}
                <span className="font-medium text-gray-900">Node.js</span> and{" "}
                <span className="font-medium text-gray-900">Express</span>.
              </li>
              <li className="text-lg">
                **Database Management:** Proficient in relational databases like
                <span className="font-medium text-gray-900">
                  PostgreSQL
                </span>{" "}
                and NoSQL databases like
                <span className="font-medium text-gray-900">MongoDB</span>.
              </li>
              <li className="text-lg">
                **Cloud Computing:** Experienced in deploying applications using
                cloud platforms such as{" "}
                <span className="font-medium text-gray-900">
                  AWS, Google Cloud,
                </span>{" "}
                and <span className="font-medium text-gray-900">Azure</span>.
              </li>
              <li className="text-lg">
                **DevOps Practices:** Containerization with{" "}
                <span className="font-medium text-gray-900">Docker</span>, CI/CD
                pipelines, and infrastructure as code using tools like
                <span className="font-medium text-gray-900">Terraform</span>.
              </li>
              <li className="text-lg">
                **Testing and Debugging:** Writing efficient test cases and
                debugging complex issues in large-scale applications.
              </li>
            </ul>
          </section>

          <section className="bg-white shadow-lg rounded-lg p-6 lg:p-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              My Philosophy
            </h2>
            <p className="text-lg leading-relaxed mb-4">
              My philosophy as a developer revolves around three core
              principles: **efficiency, collaboration,** and **continuous
              improvement**. I believe that technology is most impactful when it
              simplifies lives and enhances productivity. This is why I focus on
              creating solutions that are not only functional but also intuitive
              and accessible.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Collaboration is another cornerstone of my work. I thrive in team
              environments where diverse ideas come together to create something
              greater. I enjoy working with designers, product managers, and
              other developers to deliver projects that exceed expectations.
            </p>
            <p className="text-lg leading-relaxed">
              Lastly, I am committed to lifelong learning. Technology evolves
              rapidly, and I make it a point to stay ahead of the curve by
              attending workshops, reading industry blogs, and experimenting
              with new tools and frameworks.
            </p>
          </section>

          <section className="bg-white shadow-lg rounded-lg p-6 lg:p-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Beyond Work
            </h2>
            <p className="text-lg leading-relaxed mb-4">
              Outside of work, I am an avid learner and explorer. I enjoy diving
              into topics like artificial intelligence, data visualization, and
              blockchain technology. These fields inspire me to think outside
              the box and explore new possibilities in software development.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              When I’m not coding, you can often find me reading tech blogs,
              attending meetups, or contributing to open-source projects. I am
              also a fitness enthusiast and enjoy outdoor activities like hiking
              and cycling. Staying active helps me maintain a healthy balance
              between work and personal life.
            </p>
            <p className="text-lg leading-relaxed">
              I’m always open to connecting with like-minded professionals and
              collaborating on exciting projects. Feel free to reach out through
              my
              <span className="font-medium text-blue-600">contact page</span> to
              discuss ideas or just to say hi!
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
