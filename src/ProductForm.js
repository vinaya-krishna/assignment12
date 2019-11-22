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
                <h2>Add a new Product</h2>
                <div className="col-md-6">
                    <form> 
                        <div className="form-group">
                            <label htmlFor="productName">Name</label>
                            <input className="form-control" id="productName" type="text" onChange={this.handleChange} name="name"></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="productCategory">Category</label>
                            <input className="form-control" id="productCategory" type="text" onChange={this.handleChange} name="category"></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="productPrice">Price</label>
                            <input className="form-control" id="productPrice" type="text" onChange={this.handleChange} name="price"></input>
                        </div>
                    
                        <button className="btn btn-info" type="button" onClick={this.handleSave}>Save</button>
                    </form>
                </div>
                
            </div>
        )
    }
}

export default ProductForm;
