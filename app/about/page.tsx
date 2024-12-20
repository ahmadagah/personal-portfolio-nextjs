import { title } from "@/components/primitives";

export default function AboutPage() {
  return (
    <div className="min-h-screen  text-gray-800">
      <div className="container mx-auto px-4 py-10">
        <h1
          className={`${title()} text-5xl font-bold text-center mb-8`}
        >
          About Me
        </h1>
        <div className="space-y-8">
          <section className="p-6 lg:p-10">
            <p className="text-lg leading-relaxed mb-4">
            Hi, I’m Ahmad, a passionate full-stack web developer.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
