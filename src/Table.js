import React, { Component } from 'react';
import { fetchAllMovie } from './Client';


class Table extends  Component {

    constructor(props){
        super(props);
        this.state = {
            //reçois les données de l'api
            movies : []
        }
        this.handlerClickMovie = this.handlerClickMovie.bind(this);
    }
    
handlerClickMovie () {
        //charge les données depuis l'api
        fetchAllMovie()
        //set 'movies' avec les données chargées
        .then(response => {
            this.setState({movies: response.data})
        })
    }

    componentDidMount(){
        
        //charge les données concernant les film depuis l'api rest
        fetchAllMovie()
        //set 'movies' avec les données chargées
        .then(response => {
            this.setState({movies: response.data})
        })
    }
    
    render() {

    const { movies } = this.state;   
        console.log(movies);
    if(movies.length) {

        return movies.map((movie, index) => {
            return(
                <div key={index}>
                    <h2>{movie.title}</h2>
                    <p>{movie.description}</p>
                    <p>{movie.releaseYear}</p>
                    <p>{movie.length}</p>

                </div>
            )
        })
    }
      
        
     
        return (
            
            <h2>No movies</h2>
        )
    }
}


export default Table;