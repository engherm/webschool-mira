import { Component } from "react";
import Card from "../card/card.component";
import "./card-list.styles.css";

class CardList extends Component {
  render() {
    console.log(this.props.monsters);
    const monsters = this.props.monsters;
    console.log("After destructuring: ", monsters);

    return (
      <div className="card-list">
        {monsters.map(monster => {
          return <Card monster={monster} key={monster.id}/>;
        })}
      </div>
    );
  }
}

export default CardList;
