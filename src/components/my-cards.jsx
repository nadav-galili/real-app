import React, { Component } from "react";
import PageHeader from "./common/page-header";
import Card from "./card";
import cardService from "../services/cardService";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

class MyCards extends Component {
  state = {
    cards: [],
  };

  async componentDidMount() {
    const { data } = await cardService.getMyCards();
    if (data.length > 0) this.setState({ cards: data });
  }

  removeCard = (cardId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#aaa5a5",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
        let { cards } = this.state;
        cards = cards.filter((card) => card._id !== cardId);
        cardService.deleteCard(cardId);
        this.setState({ cards });
      }
    });
  };
  render() {
    const { cards } = this.state;
    return (
      <div className="container">
        <PageHeader>My cards Page</PageHeader>
        <div className="row">
          <div className="col-12">
            <p className="my-2">
              <Link className="btn btn-primary ml-2" to="/create-card">
                +Add Card
              </Link>
            </p>
            {cards.length > 0 && <p>Your cards in the list below</p>}
          </div>
        </div>
        <div className="row">
          {cards.length > 0 &&
            cards.map((card) => (
              <Card
                card={card}
                key={card._id}
                removeCard={() => this.removeCard(card._id)}
              />
            ))}
        </div>
      </div>
    );
  }
}
export default MyCards;
