import React, {Component} from 'react';
import './App.css';
import Filter from './Filter';
import ProductTable from './ProductTable';
import ProductForm from './ProductForm';


let PRODUCTS = {
  '1': {id: 1, category: 'Music', price: '$459.99', name: 'Clarinet'},
  '2': {id: 2, category: 'Music', price: '$5,000', name: 'Cello'},
  '3': {id: 3, category: 'Music', price: '$4,500', name: 'Tuba'},
  '4': {id: 4, category: 'Furniture', price: '$799', name: 'Chaise Lounge'},
  '5': {id: 5, category: 'Furniture', price: '$1,300', name: 'Dining Table'},
  '6': {id: 6, category: 'Furniture', price: '$100', name: 'Bean Bag'}
};


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
        products : PRODUCTS,
        filterText : ''
      }
  }

  handleFilter = (filterInput) => {
    this.setState(filterInput);
  }

  handleSave = (product) => {
    if (!product.id) {
         product.id = new Date().getTime()
    }
    this.setState((prevState) => {
      let products = prevState.products
      products[product.id] = product
      return { products }
    });

  }
  handleDestroy = (productId) => {
    this.setState((prevState) => {
      let products = prevState.products
      delete products[productId]
      return { products }
    });
}


  render() {
    return (
      <div className="App">
        <Filter 
            onFilter={this.handleFilter}/>

        <ProductTable 
            products={this.state.products} 
            filterText={this.state.filterText}
            onDestroy={this.handleDestroy}/>

        <ProductForm
            onSave={this.handleSave}/>
      </div>
    )
  }
}

export default App;
