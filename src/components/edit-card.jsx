import React from "react";
import PageHeader from "./common/page-header";
import Joi from "joi-browser";
import Form from "./common/form";
import cardService from "../services/cardService";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

class EditCard extends Form {
  state = {
    data: {
      bizName: "",
      bizDescription: "",
      bizAddress: "",
      bizPhone: "",
      bizImage: "",
    },
    errors: {},
  };

  schema = {
    _id: Joi.string(),
    bizName: Joi.string().min(2).max(255).required(),
    bizDescription: Joi.string().min(2).max(1024).required(),
    bizAddress: Joi.string().min(2).max(400).required(),
    bizPhone: Joi.string()
      .min(9)
      .max(10)
      .required()
      .regex(/^0[2-9]\d{7,8}$/),
    bizImage: Joi.string().min(11).max(1024).uri().allow(""),
  };

  async componentDidMount() {
    const cardId = this.props.match.params.id;
    const { data } = await cardService.getCard(cardId);
    this.setState({ data: this.mapToViewModel(data) });
  }

  mapToViewModel(card) {
    return {
      bizName: card.bizName,
      bizDescription: card.bizDescription,
      bizAddress: card.bizAddress,
      bizPhone: card.bizPhone,
      bizImage: card.bizImage,
      _id: card._id,
    };
  }

  doSubmit = async () => {
    const data = this.state.data;
    await cardService.editCard(data);
    toast("Card is updated");
    this.props.history.replace("/my-cards");
  };

  render() {
    return (
      <div className="container">
        <PageHeader>Edit card form</PageHeader>
        <div className="row">
          <div className="col-12">
            <p>Edit your card here</p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <form onSubmit={this.handleSubmit} autoComplete="off" method="POST">
              {this.renderInput("bizName", "Business Name")}
              {this.renderInput("bizDescription", "Business Description")}
              {this.renderInput("bizAddress", "Business Address")}
              {this.renderInput("bizPhone", "Business Phone")}
              {this.renderInput("bizImage", "Business Image")}
              {this.renderButton("Update Card")}
              <Link className="btn btn-secondary ml-2" to="/my-cards">
                Cancel
              </Link>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default EditCard;
