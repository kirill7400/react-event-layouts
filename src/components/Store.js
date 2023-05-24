import React from "react";
import IconSwitch from "./IconSwitch";
import CardsView from "./CardsView";

class Store extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      icon: 'view_module'
    };

    this.switcher = false

    this.products = [{
      name: "Nike Metcon 2",
      price: "130",
      color: "red",
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
    }, {
      name: "Nike Metcon 2",
      price: "130",
      color: "green",
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
    }, {
      name: "Nike Metcon 2",
      price: "130",
      color: "blue",
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
    }, {
      name: "Nike Metcon 2",
      price: "130",
      color: "black",
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
    }, {
      name: "Nike free run",
      price: "170",
      color: "black",
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
    }, {
      name: "Nike Metcon 3",
      price: "150",
      color: "green",
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
    }]

    this.onSwitch = this.onSwitch.bind(this)
  }

  componentDidMount() {
    //this.onSelectFilter(this.selected)
  }

  onSwitch() {
    this.switcher = !this.switcher
    let icon = this.switcher ? 'view_list' : 'view_module'
    this.setState({ icon })
  }


  render() {
    return (
      <>
        <IconSwitch
          icon={ this.state.icon }
          onSwitch={ this.onSwitch }
        />
        <CardsView
          cards={ this.products }
          variant={ this.state.icon }
        />
        </>
    )
  }
}

export default Store