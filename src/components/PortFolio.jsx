import React from 'react'
import MealApp from '../assets/portfolio/Meals_app.png'
import MovieApp from '../assets/portfolio/movie_app.png'
import ReactParallax from '../assets/portfolio/reactParallax.jpg'
import WeatherApp from '../assets/portfolio/reactWeather.jpg'
import TodoList from '../assets/portfolio/Todo_list.png'
import QuizApp from '../assets/portfolio/Quiz_app.png'

const PortFolio = () => {
    const portFolios = [
        {
            id: 1,
            src: MealApp,
            demoLink: "https://icarz.github.io/Meal_app/",
            codeLink: "https://github.com/Icarz/Meal_app"
        },
        {
            id: 2,
            src: WeatherApp,
            demoLink: "https://icarz.github.io/weather_react_app",
            codeLink: "https://github.com/Icarz/weather_react_app"
        },
        {
            id: 3,
            src: MovieApp,
            demoLink: " https://icarz.github.io/Movies_app/",
            codeLink: "https://github.com/Icarz/Movies_app"
        },
        {
            id: 4,
            src: ReactParallax,
            demoLink: "https://icarz.github.io/React-Parallax-Effect",
            codeLink: "https://github.com/Icarz/React-Parallax-Effect"
        },
        {
            id: 5,
            src: TodoList,
            demoLink: "https://icarz.github.io/React_todo_list",
            codeLink: "https://github.com/Icarz/React_todo_list"
        },
        {
            id: 6,
            src: QuizApp,
            demoLink: "https://icarz.github.io/Quiz_app",
            codeLink: "https://github.com/Icarz/Quiz_app"
        },
    ]
    return (
        <div
            name="portfolio"
            className="bg-gradient-to-b from-black to-gray-800 w-full text-white"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        Portfolio
                    </p>
                    <p className="py-6">Check out some of my work right here</p>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                    {portFolios.map(({ id, src, demoLink, codeLink }) => (
                        <div key={id} className="shadow-md shadow-gray-600 rounded-lg w-auto">
                            <img
                                src={src}
                                alt=""
                                className="rounded-md duration-200 hover:scale-105"
                            />
                            <div className="flex items-center justify-center">
                                <a href={demoLink} target="_blank" rel="noopener noreferrer">
                                    <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                                        Demo
                                    </button>
                                </a>
                                <a href={codeLink} target="_blank" rel="noopener noreferrer">
                                    <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PortFolio;