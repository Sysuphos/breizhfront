import React, { Component } from 'react';
import { fetchAllMovie } from './Client';
import{
    Table
} from 'antd';


class List extends  Component {

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
    if(movies && movies.length) {

        const columns = [
            {
                title: 'id',
                dataIndex: 'id',
                key: 'id'
            },
            {
                title: 'title',
                dataIndex: 'title',
                key: 'title'
            },
            {
                title: 'description',
                dataIndex: 'description',
                key: 'description'
            },
            {
                title: 'releaseYear',
                dataIndex: 'releaseYear',
                key: 'releaseYear'
            },
            {
                title: 'length',
                dataIndex: 'length',
                key: 'length'
            },
    
         ];
            return (
                <Table 
                    dataSource={movies} 
                    columns={columns} 
                    rowKey='id'/>
            )
    }
      
        
     
        return (
            
            <h2>No movies</h2>
        )
    }
}


export default List;