import React from "react";

const About = () => {
    return (
        <div
            name="about"
            className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        About
                    </p>
                </div>

                <p className="text-xl">
                    "Passionné par le développement informatique, je me spécialise en MERN stack (MongoDB, Express.js, React, Node.js). Ma transition professionnelle repose sur ma détermination à combiner créativité et rigueur technique. Expert en MERN, je conçois des applications web innovantes, maîtrisant le front-end, le back-end et les bases de données. Mon engagement pour l'excellence technique et mon apprentissage continu me rendent agile et prêt à relever les défis du développement informatique."
                </p>
            </div>
        </div>
    );
};

export default About;