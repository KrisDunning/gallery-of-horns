import React from 'react';
import './Modal.css'
import Modal from 'react-bootstrap/Modal'
import Image from 'react-bootstrap/Image'

class SelectedBeast extends React.Component {

  render() {
    return (             
        <Modal
          show={this.props.show}
          onHide={this.props.onHide}   
          >
          <Modal.Header closeButton>
            <Modal.Title>
              {this.props.beastobj.title}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Image src={this.props.beastobj.image_url} alt={this.props.beastobj.title} />
            <p>
              {this.props.beastobj.description}
            </p>
          </Modal.Body>
        </Modal>      
    );
  };
}

export default SelectedBeast;
