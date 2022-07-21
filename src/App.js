import "./App.css";
import React from "react";
import Table from "./table";
import Header from "./header";
import Content from "./content";

class App extends React.Component {
  state = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "HTML",
      h: "Tech",
      date: "15-04-2022",
      details: "Lorem, ipsum dolor sit a ",
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1585076641399-5c06d1b3365f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "HTML5",
      h: "Tch",
      date: "15-04-2022",
      details:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, nemo aliquam? Consectetur aperiam eos unde eaque dolore non?",
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1505685296765-3a2736de412f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=8",
      title: "Css",
      h: "Tch",
      date: "15-04-2022",
      details:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, nemo aliquam? Consectetur aperiam eos unde eaque dolore non?",
    },
    {
      id: 4,
      img: "https://images.unsplash.com/photo-1524666643752-b381eb00effb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
      title: "Css2",
      h: "Tch",
      date: "15-04-2022",
      details:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, nemo aliquam? Consectetur aperiam eos unde eaque dolore non?",
    },
    {
      id: 5,
      img: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "Java Script",
      h: "Tch",
      date: "15-04-2022",
      details:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, nemo aliquam? Consectetur aperiam eos unde eaque dolore non?",
    },
    {
      id: 6,
      img: "https://images.unsplash.com/photo-1576936422505-18d321d54d40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "React",
      h: "Tch",
      date: "15-04-2022",
      details:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, nemo aliquam? Consectetur aperiam eos unde eaque dolore non?",
    },
  ];

  render() {
    return (
      <div>
        <Header />
        <Content />

        {this.state.map((user) => (
          <Table user={user} />
        ))}
      </div>
    );
  }
}

export default App;
