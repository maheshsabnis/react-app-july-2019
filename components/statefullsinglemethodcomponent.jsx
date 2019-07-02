import React, { Component } from 'react';
import { ProductLogic } from './../models/logic.js';
class StateFulSingleMethodComponent extends Component {
    constructor(props) {
        super(props);
        this.logic = new ProductLogic();

        // object that is used to define
        // state of the component
        this.state = {
            ProductId: 0,
            ProductName: '',
            CategoryName: '',
            Price: 0,
            Categories: ['Electronics', 'Electrical', 'Food'],
            Products: [],
            columns: []
        };
       
    }
    // Write the code for all External Dependencies those are Asynchronous
    // by nature 
    componentDidUpdate() {
        console.log(JSON.stringify(this.logic.getProducts()));

        // this.setState({Products:this.logic.getProducts()} );
        // this.loadProperties();
        // this.state.Products = this.logic.getProducts();
    }
    // all Synchronous Operations for the Client-Side logic from Externally
    // exported classes
    componentDidMount() {
        this.setState({Products:this.logic.getProducts()} );
    }
    
    loadProperties() {
        for (let p in this.state.Products[0]) {
            this.state.columns.push(p);
        }
    }
    // a single method to listen changes for all Editable UI Elements
    handleElementChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    clear() { }
    save() {
        alert(this.state.ProductId + this.state.ProductName + this.state.CategoryName + this.state.Price);
    }
    getSelectedRowData(d) {
        console.log(d);
    }
    render() {
        return (
            <div className="container">
                <h2>The Stateful Component</h2>
                <div className="form-group">
                    <label htmlFor="ProductId">Product Id</label>
                    <input type="text" className="form-control"
                        name="ProductId"
                        value={this.state.ProductId}
                        onChange={this.handleElementChange.bind(this)} />
                </div>
                <div className="form-group">
                    <label htmlFor="ProductName">Product Name</label>
                    <input type="text" className="form-control"
                        name="ProductName"
                        value={this.state.ProductName}
                        onChange={this.handleElementChange.bind(this)} />
                </div>
                <div className="form-group">
                    <label htmlFor="CategoryName">Category Name</label>
                    <select className="form-control"
                        name="CategoryName"
                        value={this.state.CategoryName}
                        onChange={this.handleElementChange.bind(this)} >
                        {
                            this.state.Categories.map((cat, idx) => (
                                <Option key={idx} name={cat}></Option>
                            ))
                        }
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="Price">Price</label>
                    <input type="text" className="form-control"
                        name="Price"
                        value={this.state.Price}
                        onChange={this.handleElementChange.bind(this)} />
                </div>
                <div className="form-group">
                    <input type="button" value="Clear" className="btn btn-default" onClick={this.clear.bind(this)} />
                    <input type="button" value="Save" className="btn btn-success" onClick={this.save.bind(this)} />
                </div>
                <br />
                <div className="container">
                    <table className="table table-bordered table-striped">
                        <thead>
                            <tr>
                                {
                                    this.state.columns.map((v, idx) => (
                                        <TableHeader key={idx} value={v} />
                                    ))
                                }
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.Products.map((prd, idx) => (
                                    <TableRow key={idx} data={prd}
                                        selectedRow={this.getSelectedRowData.bind(this)}></TableRow>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

// an <option> component
class Option extends Component {
    render() {
        return (
            <option value={this.props.name}>{this.props.name}</option>
        );
    }
}

class TableHeader extends Component {
    render() {
        return (
            <td>{this.props.value}</td>
        );
    }
}

class TableRow extends Component {
    onRowClick() {
        this.props.selectedRow(this.props.data.ProductId);
    }
    render() {
        return (
            <tr onClick={this.onRowClick.bind(this)}>
                <td>{this.props.data.ProductId}</td>
                <td>{this.props.data.ProductName}</td>
                <td>{this.props.data.CategoryName}</td>
                <td>{this.props.data.Price}</td>
            </tr>
        );
    }
}

export default StateFulSingleMethodComponent;