import React, {Component} from 'react';
import {Col} from "react-bootstrap";

class ListCatagories extends Component {
    render() {
        return (
            <Col md={2} mt={2}>
                <h4><strong>Daftar Kategori</strong></h4>
                <hr />
            </Col>
        );
    }
}

export default ListCatagories;