import { Card, CardContent } from "../components/ui/card";

const techStacks = [
  {
    name: "Java",
    description: "Modern web development with type safety and ECMAScript features",
  },
  {
    name: "React / NextJS",
    description: "Building interactive UIs with server-side rendering capabilities",
  },
  {
    name: "JavaScript / HTML / CSS",
    description: "Enterprise-grade applications and backend services",
  },
  {
    name: "Golang",
    description: "Reactive UI framework with minimal boilerplate",
  },
  {
    name: "Python",
    description: "Systems programming and performance-critical applications",
  },

];

export default function StillsStack() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 mx-auto w-3/4">
      {techStacks.map((tech) => (
        <Card key={tech.name} className="rounded-xl border p-4 mb-4">
          <CardContent>
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-medium">{tech.name}</h3>
                <p className="text-sm text-gray-500">{tech.description}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}