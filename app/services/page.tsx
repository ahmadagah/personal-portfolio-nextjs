import { title } from "@/components/primitives";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <div className="container mx-auto px-4 py-10">
        <h1
          className={`${title()} text-5xl font-bold text-center text-blue-600 mb-8`}
        >
          Services
        </h1>
        <div className="space-y-8">
          <section className="bg-white shadow-lg rounded-lg p-6 lg:p-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Web Development
            </h2>
            <p className="text-lg leading-relaxed mb-4">
              I specialize in building modern, responsive, and user-friendly
              websites tailored to meet the unique needs of my clients. Using
              cutting-edge technologies like
              <span className="font-medium text-blue-600">React</span>,
              <span className="font-medium text-blue-600">Next.js</span>, and
              <span className="font-medium text-blue-600">Tailwind CSS</span>, I
              deliver websites that not only look great but also perform
              flawlessly across all devices.
            </p>
            <p className="text-lg leading-relaxed">
              Whether you need a portfolio website, a complex web application,
              or an e-commerce platform, I have the expertise to turn your ideas
              into reality. I focus on clean code, scalable designs, and
              delivering projects on time.
            </p>
          </section>

          <section className="bg-white shadow-lg rounded-lg p-6 lg:p-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Backend Development
            </h2>
            <p className="text-lg leading-relaxed mb-4">
              From building RESTful APIs to architecting scalable backend
              solutions, I ensure that your application runs smoothly behind the
              scenes. My expertise includes working with{" "}
              <span className="font-medium text-blue-600">Node.js</span>,
              <span className="font-medium text-blue-600">Express</span>, and
              databases like
              <span className="font-medium text-blue-600">PostgreSQL</span> and
              <span className="font-medium text-blue-600">MongoDB</span>.
            </p>
            <p className="text-lg leading-relaxed">
              I also focus on optimizing database queries, handling complex
              business logic, and implementing robust authentication systems to
              ensure your data remains secure and your application performs at
              its best.
            </p>
          </section>

          <section className="bg-white shadow-lg rounded-lg p-6 lg:p-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Cloud & DevOps Services
            </h2>
            <p className="text-lg leading-relaxed mb-4">
              I provide cloud solutions to help your business scale seamlessly.
              With experience in platforms like{" "}
              <span className="font-medium text-blue-600">AWS</span>,
              <span className="font-medium text-blue-600">Google Cloud</span>,
              and
              <span className="font-medium text-blue-600">Azure</span>, I handle
              deployments, monitoring, and maintenance so you can focus on
              growing your business.
            </p>
            <p className="text-lg leading-relaxed">
              My services include containerization using{" "}
              <span className="font-medium text-gray-900">Docker</span>, setting
              up CI/CD pipelines, and implementing infrastructure as code with
              tools like{" "}
              <span className="font-medium text-gray-900">Terraform</span>. I
              ensure your application is always up and running with minimal
              downtime.
            </p>
          </section>

          <section className="bg-white shadow-lg rounded-lg p-6 lg:p-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Custom Software Solutions
            </h2>
            <p className="text-lg leading-relaxed mb-4">
              Every business has unique needs, and I am here to build custom
              software solutions tailored specifically to your requirements.
              Whether it’s a task automation tool, a data visualization
              platform, or a bespoke business application, I’ve got you covered.
            </p>
            <p className="text-lg leading-relaxed">
              My custom solutions are designed to enhance your workflow, save
              time, and reduce operational costs. I collaborate closely with my
              clients to ensure every detail is addressed, and the final product
              exceeds expectations.
            </p>
          </section>

          <section className="bg-white shadow-lg rounded-lg p-6 lg:p-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Consulting & Mentorship
            </h2>
            <p className="text-lg leading-relaxed mb-4">
              Are you looking for guidance on your next tech project or need
              mentorship to level up your skills? I offer consulting and
              mentorship services for individuals and businesses. Whether it’s
              choosing the right technology stack, optimizing an existing
              application, or improving team workflows, I’m here to help.
            </p>
            <p className="text-lg leading-relaxed">
              My mentorship services are perfect for junior developers looking
              to grow or teams wanting to adopt best practices in software
              development, cloud computing, and DevOps.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
