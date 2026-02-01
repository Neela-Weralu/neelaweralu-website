import React, { Component } from "react";
import { FaCloudSun, FaHiking, FaShuttleVan } from "react-icons/fa";
import { ImSpoonKnife } from "react-icons/im";
import Title from "./Title";

export default class Services extends Component {
    state = {
        services: [
            {
                icon: <ImSpoonKnife />,
                title: "Breakfast",
                info:
                "Delicious Breakfast is served every morning with a variety of options to choose from."
            },
            {
                icon: <FaHiking />,
                title: "Endless Hiking",
                info:
                "Enjoy Hiking to the top where you can enjoy the beauty of the area including the Victoria reservoir."
            },
            {
                icon: <FaShuttleVan />,
                title: "Tuk Tuk Rides",
                info:
                "We offer affordable Tuk Tuk rides to the city center and back to the hotel on request."
            },
            {
                icon: <FaCloudSun />,
                title: "Mandaram Nuwara Trip",
                info:
                "Mandaram Nuwara - very beatiful place covered by hills, water falls and tea states A must visit place to enjoy the beauty of the nature."
            }
        ]
    };

    render() {
        return (
            <section className="services">
                <Title title="services" />
                <div className="services-center">
                    {this.state.services.map(item => {
                        return (
                            <article key={`item-${item.title}`} className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>
                        );
                    })}
                </div>
            </section>
        );
    }
}
