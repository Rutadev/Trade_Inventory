import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Label } from 'reactstrap';
import { AvForm, AvField, AvGroup, AvInput, AvFeedback } from 'availity-reactstrap-validation';

class StockModal  extends Component{

  constructor(props) {
    super(props);
    this.state={
      isOpen: props.isOpen,
      stockDetails: {}
    }
    this.handleValidSubmit = this.handleValidSubmit.bind(this);
    this.handleInvalidSubmit = this.handleInvalidSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps){
    this.setState({isOpen: nextProps.isOpen});
  }

  handleValidSubmit(event, values) {
    debugger
      this.setState({stockDetails:{...values}},()=>{
      debugger
        this.props.handleClose();
      });
  }

  handleInvalidSubmit(event, errors, values) {
      this.setState({stockDetails:{...values}, error: true});
  }

  render() {
      const { handleClose } = this.props;
      return (
       <div>
          <Modal size="lg"
            isOpen={this.state.isOpen} toggle={handleClose}>
          <ModalHeader toggle={handleClose}>Add Stock</ModalHeader>
              <ModalBody>
                  <AvForm onValidSubmit={this.handleValidSubmit} onInvalidSubmit={this.handleInvalidSubmit}>
                      <AvField name="stock_date" label="Stock Date" type="date" required />
                      <AvField name="taka_no" label="Take No." type="number" required />
                      <AvField name="meter" label="Meter" type="number" required />
                      <AvField name="taka_type" label="Taka Type" type="text" required />
                      <AvField name="d_no" label="D. No." type="number" required />
                      <AvField name="color" label="Color" type="text" required />
                      <AvField name="cat" label="Cat" type="text" required />
                      <AvField name="p_o_no" label="PO No." type="number" required />
                      <AvField name="weight" label="Weight" type="weight" required />
                      <Button color="primary" className="btn-ll5">Submit</Button>
                  </AvForm>
              </ModalBody>
          </Modal>
       </div>
      )
  }

}

export default StockModal;