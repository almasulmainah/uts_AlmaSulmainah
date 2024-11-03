"use client";

export default function Skill() {
  const skills = [
    {
      category: "GRAPHIC DESIGN",
      tools: ["Canva", "CorelDraw", "Adobe Photoshop"],
    },
    {
      category: "UI/UX DESIGN",
      tools: ["Figma"],
    },
    {
      category: "EDITOR VIDEO",
      tools: ["Capcut"],
    },
    {
      category: "DATA MANAGE",
      tools: ["Google Workspace", "Ms. Office"],
    },
    {
      category: "FRONT END DEV",
      tools: ["HTML", "CSS", "JS", "React (Basic)"],
    },
    {
      category: "SOFT SKILL",
      tools: ["Good Communication", "Time Management"],
    },
  ];

  return (
    <div className="container mx-auto p-2 text-center pt-20">
      <h2 className="text-2xl font-bold">My Skills</h2>

      <div className="my-card skill my-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {skills.map((skill, index) => (
          <div key={index} className="skill-box p-4 border rounded-lg shadow">
            <ul className="mb-4">
              <li className="text-lg font-bold">{skill.category}</li>
              <li>{skill.tools.join(", ")}</li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
