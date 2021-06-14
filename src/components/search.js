import { Component , createElement} from "../lib/React/index.js";
import Form from "./form.js";
import Input from './input.js';
import Button from './button.js';
import store from "../store.js";
import { SEARCH_MOVIES, SET_FILTER } from "../actions/index.js";
class Search extends Component {
    handleSubmit = (event) => {
        event.preventDefault()
        const formData = new FormData(event.target)
        const query = formData.get('title')
        if(query) {
        return store.dispatch ({
                type:   SEARCH_MOVIES,
                payload: query
            })
        }
        return store.dispatch({
            type: SET_FILTER,
            payload: 'all'
        })
    }
    render(){
        return Form({
            onsubmit: this.handleSubmit,
            children:  [
                new Input({
                    placeholder: 'Escribe tu pelicula favorita',
                    name: 'title',
                    type: 'text'
                }),
                new Button(null, 'Buscar')
            ]
           
        })
    }
}


export default Search