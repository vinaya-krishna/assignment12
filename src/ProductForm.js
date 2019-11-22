import React, { Component } from 'react'

const RESET_VALUES = {id: '', category: '', price: '', name: ''}

class ProductForm extends Component {


    constructor(props) {
        super(props);
        this.state = {
            product: Object.assign({}, RESET_VALUES), errors: {}
       }
    }

    handleSave = (e) => {
        this.props.onSave(this.state.product);
        this.setState({
            product: Object.assign({}, RESET_VALUES), errors: {}
       })
        e.preventDefault();
    }

    handleChange = (e) => {
        const target = e.target
        const value = target.value
        const name = target.name
        this.setState((prevState) => {
             prevState.product[name] = value
             return { product: prevState.product }
        })
    }


    render() {
        return (
            <div>
                <h2>Enter a new Product</h2>
                <label>Name</label>
                <br/>
                <input type="text" onChange={this.handleChange} name="name"></input>
                <br/>
                <label>Category</label>
                <br/>
                <input type="text" onChange={this.handleChange} name="category"></input>
                <br/>
                <label>Price</label>
                <br/>
                <input type="text" onChange={this.handleChange} name="price"></input>
                <br/>
                <button type="button" onClick={this.handleSave}>Save</button>
                
            </div>
        )
    }
}

export default ProductForm;
