import React, { Component } from 'react'

class Filter extends Component {


    handleChange = (e) => {
        this.props.onFilter({
            filterText : e.target.value
       });
    }

    render() {
        return (
            <div>
                <input type="text" 
                        placeholder="Search..."
                        onChange={this.handleChange}>        
                </input>
            </div>
        )
    }
}

export default Filter;


