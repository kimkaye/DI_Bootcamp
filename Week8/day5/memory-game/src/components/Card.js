import React from 'react';


class Card extends React.Component {

    constructor(props) {
        super(props);
        this.changeClicked = this.changeClicked.bind(this);
    }

    changeClicked() {
        this.props.onCardClicked(this.props.hero.id)

    }
    render() {
        return (
                <div className="superHeroCard" onClick={this.changeClicked}>
                    <div className="img-content">
                        <li className="title">{this.props.hero.name}</li>
                        <li>{this.props.hero.clicked.toString()}</li>
                        <li className="card-item">{this.props.hero.occupation}</li>
                    </div>
                    <div className="img-container">
                        <img src={this.props.hero.image} className="image"/>
                    </div>
                </div>
        );
    }
}

export default Card