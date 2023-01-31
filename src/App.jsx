import "./App.css";
import Card from "./components/Card";
import Supervisor from "./assets/images/icon-supervisor.svg";
import TeamBuilder from "./assets/images/icon-team-builder.svg";
import Karma from "./assets/images/icon-karma.svg";
import Calculator from "./assets/images/icon-calculator.svg";

function App() {
  const cardTitle = {
    first: "Supervisor",
    second: "Team Builder",
    third: "Karma",
    fourth: "Calculator",
  };

  const cardDetail = {
    first: "Monitors activity to identify project roadblocks",
    second:
      "Scans our talent network to create the optimal team for your project",
    third: "Regularly evaluates our talent to ensure quality",
    fourth: "Uses data from past projects to provide better delivery estimates",
  };

  const cardImage = {
    first: Supervisor,
    second: TeamBuilder,
    third: Karma,
    fourth: Calculator,
  };

  const cardColor = {
    first: "hsl(180, 62%, 55%)",
    second: "hsl(0, 78%, 62%)",
    third: "hsl(34, 97%, 64%)",
    fourth: "hsl(212, 86%, 64%)",
  };

  return (
    <div className="container">
      <div className="header">
        <div className="title">
          <h1>
            <span>Reliable, efficient delivery</span>
          </h1>
          <h1>Powered by Technology</h1>
          <p>
            Our Artificial Intelligence powered tools use millions of project
            data points to ensure that your project is successful
          </p>
        </div>
      </div>
      <div className="wrapCard">
        <Card
          title={cardTitle.first}
          detail={cardDetail.first}
          image={cardImage.first}
          color={cardColor.first}
        />
        <div className="middle-card">
          <Card
            title={cardTitle.second}
            detail={cardDetail.second}
            image={cardImage.second}
            color={cardColor.second}
          />
          <Card
            title={cardTitle.third}
            detail={cardDetail.third}
            image={cardImage.third}
            color={cardColor.third}
          />
        </div>
        <Card
          title={cardTitle.fourth}
          detail={cardDetail.fourth}
          image={cardImage.fourth}
          color={cardColor.fourth}
        />
      </div>
    </div>
  );
}

export default App;
