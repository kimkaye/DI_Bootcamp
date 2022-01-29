import React,{Component} from 'react';
import Card from './Card';

class SuperHeroesCards extends Component {

    constructor(props) {
        super(props);
        this.state = {
            superheroesMap:new Map(),
            superheroesArray: []
        };
        this.onCardClicked = this.onCardClicked.bind(this);
    }

    componentDidMount() {
        const heroesMap = new Map(this.props.heroesList.map(key => [key.id, key]));
        let newValuesIterable = heroesMap.values()
        const superheroes = Array.from(newValuesIterable) || [];
        this.setState({superheroesMap:heroesMap, superheroesArray: superheroes });
    }

    onCardClicked(heroId) {
        let hero = this.state.superheroesMap.get(heroId);


        const shuffledArray = this.state.superheroesArray.sort((a, b) => 0.5 - Math.random());

        if(hero.clicked === false){
            hero.clicked = true

            // this.setState({score: this.state.score + 1});
            // console.log(this.state.superheroesMap.get(heroId));
            this.setState({
                superheroesMap: this.state.superheroesMap,
                superheroesArray: shuffledArray
            })
            this.props.onUpdateScore()
        }else {
            let newValuesIterable = this.state.superheroesMap.values()
            const superheroes = Array.from(newValuesIterable);
            for(let i=0; i< superheroes.length; i++){
                let hero = superheroes[i];
                hero.clicked = false;
            }
            console.log(superheroes)
            const heroesMap = new Map(superheroes.map(key => [key.id, key]));
            this.setState({superheroesMap:heroesMap,
                superheroesArray: shuffledArray});
            this.props.onFailure()
        }

    }

    render(){
        return(
            <div className="wrapper">
                {
                    this.state.superheroesArray.map(hero => (
                        <Card hero={hero} onCardClicked={this.onCardClicked} key={hero.id}/>
                    ))
                }
            </div>
        )
    }
}
export default SuperHeroesCards;
