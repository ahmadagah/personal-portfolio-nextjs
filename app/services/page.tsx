import { title } from "@/components/primitives";

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-10">
        <h1
          className={`${title()} text-5xl font-bold text-center text-blue-600 mb-8`}
        >
          Services
        </h1>
        <div className="space-y-8">
          <h3>Frameworks and Technologies I work with</h3>
          <p className="text-lg leading-relaxed mb-4">
            I work with modern technologies and frameworks to build your
            websites and web apps.
          </p>
          <ul className="list-disc list-inside">
            <li>React</li>
            <li>Next.js</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>GraphQL</li>
            <li>REST APIs</li>
            <li>PostgreSQL</li>
            <li>MongoDB</li>
            <li>Redis</li>
            <li>Typescript</li>
            <li>JavaScript</li>
            <li>HTML5</li>
            <li>CSS3</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
