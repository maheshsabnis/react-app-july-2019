import React, { Component } from 'react';
class TableRowComponent extends Component {
    render() { 
        return ( 
            <tr>
              <td>{this.props.data.id}</td>
              <td>{this.props.data.name}</td>
            </tr>
        );
    }
}
 
export default TableRowComponent;