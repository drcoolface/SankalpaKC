import React from "react";

const events = [
  {
    date: "Facet Technology",
    title: "Frontend Developer",
    description: "I've been working at Facet Technology since mid-March, 2024.",
  },
  {
    date: "Chandragiri Hills",
    title: "Frontend Developer",
    description:
      "I worked at Chandragiri Hills as a contract-based Frontend Developer in 2023.",
  },
];

const Timeline = () => {
  return (
    <div className="my-10 flex flex-col justify-center">
      <p className="text-center text-5xl font-semibold mb-10">
        Professional Experience
      </p>
      <div className="flex justify-center items-center">
        <div className="w-[700px] text-white pr-5">
          <ul className="list-none border-l border-[#094a68] px-2 py-3">
            {events.map((event, index) => (
              <li
                key={index}
                className="relative cursor-pointer transition duration-500  hover:bg-gray-500 pl-6 pr-4 py-5 group"
              >
                <span className="inline-block bg-[#1685b8]  rounded-full px-2 py-1 text-center text-sm mb-3">
                  {event.date}
                </span>
                <div>
                  <h3 className="text-[#34ace0] group-hover:text-[#cfebf8] text-lg mb-2">
                    {event.title}
                  </h3>
                  <p className="font-mono text-sm mb-3 text-black group-hover:text-white">
                    {event.description}
                  </p>
                </div>
                <div className="absolute w-2.5 h-2.5 bg-[#363332] rounded-full left-[-11px] top-[28px] transition duration-500 hover:bg-blue-500 hover:shadow-lg"></div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
