import React, { Component } from "react";
import PageHeader from "./common/page-header";
import Card from "./card";
import cardService from "../services/cardService";

class MyCards extends Component {
  state = {
    cards: [],
  };

  async componentDidMount() {
    const { data } = await cardService.getMyCards();
    if (data.length > 0) this.setState({ cards: data });
  }
  render() {
    const { cards } = this.state;
    return (
      <div className="container">
        <PageHeader>My cards Page</PageHeader>
        <div className="row">
          <div className="col-12">
            {cards.length > 0 && <p>Your cards in the list below</p>}
          </div>
        </div>
        <div className="row">
          {cards.length > 0 &&
            cards.map((card) => <Card card={card} key={card._id} />)}
        </div>
      </div>
    );
  }
}
export default MyCards;
