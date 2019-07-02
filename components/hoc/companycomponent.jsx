import React, { Component } from 'react';
import TableRowComponent from './tablerowcomponent';

class CompanyComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
            <div>
                <table className="table table-bordered table-striped">
                    <tbody>
                        {
                            this.props.data.map((d, idx) => (
                                <TableRowComponent key={idx} data={d} />
                            ))
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default CompanyComponent;