import React from "react";
import styled from "styled-components";

const TimelineWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .timeline {
    width: 700px;
    color: #fff;
    paddingright: 20px;

    ul {
      list-style-type: none;
      border-left: 1px solid #094a68;
      padding: 10px 5px;

      li {
        padding: 20px 20px;
        position: relative;
        cursor: pointer;
        transition: 0.5s;

        span {
          display: inline-block;
          background-color: #1685b8;
          border-radius: 25px;
          padding: 2px 5px;
          font-size: 15px;
          text-align: center;
        }

        .content h3 {
          color: #34ace0;
          font-size: 17px;
          padding-top: 5px;
        }

        .content p {
          padding: 5px 0px 15px 0px;
          font-size: 15px;
        }

        &:before {
          position: absolute;
          content: "";
          width: 10px;
          height: 10px;
          background-color: #363332;
          border-radius: 50%;
          left: -11px;
          top: 28px;
          transition: 0.5s;
        }

        &:hover {
          background-color: #7f7c7c;

          &:before {
            background-color: blue;
            box-shadow: 0px 0px 10px 2px #34ace0;
          }
        }
      }
    }
  }

  @media (max-width: 300px) {
    .timeline {
      width: 100%;
      padding: 30px 5px 30px 10px;

      ul li .content h3 {
        color: #34ace0;
        font-size: 15px;
      }
    }
  }
`;

const events = [
  {
    date: "Facet Technology",
    title: "Frontend Developer",
    description: "I've been working at Facet Technology since mid March, 2024.",
  },
  {
    date: "Chandragiri Hills",
    title: "Frontend Developer",
    description:
      "I had worked at Chandragiri Hills as a contract based Frontend Developer, in 2023 ",
  },
];

const Timeline = () => {
  return (
    <div className="my-10 justify-center">
      <p className="text-center  text-5xl font-semibold">
        {" "}
        Professional Experience
      </p>
      <TimelineWrapper>
        <div className="timeline">
          <ul>
            {events.map((event, index) => (
              <li key={index}>
                <span>{event.date}</span>
                <div className="content">
                  <h3>{event.title}</h3>
                  <p className="font-mono"> {event.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </TimelineWrapper>
    </div>
  );
};

export default Timeline;
