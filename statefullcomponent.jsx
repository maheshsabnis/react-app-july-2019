import React, { Component } from 'react';

class StateFulComponent extends Component {
    constructor(props) {
        super(props);
        // object that is used to define
        // state of the component
        this.state = {
            ProductId: 0,
            ProductName: '',
            CategoryName: '',
            Price: 0,
            Categories: ['Electronics', 'Electrical', 'Food'],
            Products: [
                { ProductId: 101, ProductName: 'Laptop', CategoryName: 'Electronics', Price: 120000 },
                { ProductId: 102, ProductName: 'Iron', CategoryName: 'Electrical', Price: 1300 },
                { ProductId: 103, ProductName: 'Lays', CategoryName: 'Food', Price: 20 }
            ],
            columns:[]
        };
        this.loadProperties();

    }

    loadProperties() {
        for(let p in this.state.Products[0]){
            this.state.columns.push(p);
        }
    }
    handleProductIdChange(e) {
        // update the state for ProductId
        this.setState({ ProductId: e.target.value });
    }
    handleProductNameChange (e) {
        // update the state for ProductId
        this.setState({ ProductName: e.target.value });
    }
    handleCategoryNameChange (e) {
        // update the state for ProductId
        this.setState({ CategoryName: e.target.value });
    }
    handlePriceChange (e) {
        // update the state for ProductId
        this.setState({ Price: e.target.value });
    }
    clear(){}
    save(){
        alert(this.state.ProductId);
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
                        value={this.state.ProductId}
                        onChange={this.handleProductIdChange.bind(this)} />
                </div>
                <div className="form-group">
                    <label htmlFor="ProductName">Product Name</label>
                    <input type="text" className="form-control" 
                    value={this.state.ProductName}
                        onChange={this.handleProductNameChange.bind(this)} />
                </div>
                <div className="form-group">
                    <label htmlFor="CategoryName">Category Name</label>
                    <select className="form-control"
                    value={this.state.CategoryName}
                        onChange={this.handleCategoryNameChange.bind(this)} >
                            {
                                this.state.Categories.map((cat,idx) => (
                                    <Option key={idx} name={cat}></Option>
                                ))
                            }
                        </select>
                </div>
                <div className="form-group">
                    <label htmlFor="Price">Price</label>
                    <input type="text" className="form-control" 
                    value={this.state.Price}
                        onChange={this.handlePriceChange.bind(this)} />
                </div>
                <div className="form-group">
                    <input type="button" value="Clear" className="btn btn-default" onClick={this.clear.bind(this)}/>
                    <input type="button" value="Save" className="btn btn-success" onClick={this.save.bind(this)}/>
                </div>
                <br />
                <div className="container">
                    <table className="table table-bordered table-striped">
                        <thead>
                            <tr>
                                {
                                    this.state.columns.map((v,idx)=>(
                                        <TableHeader key={idx} value={v}/>
                                    ))
                                }
                            </tr>
                        </thead>
                        <tbody>
                         {
                             this.state.Products.map((prd,idx)=>(
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
    render(){
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
        this.props.selectedRow(this.props.data.ProductId)
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

export default StateFulComponent;