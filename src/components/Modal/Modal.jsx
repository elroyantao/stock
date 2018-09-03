import React, { Component } from 'react'
import { connect } from 'react-redux'

import { closeModal } from '../../actions/modalActions'

import './Modal.css'

class Modal extends Component {
  closeModal = () => {
    const { closeModal } = this.props
    closeModal()
  }
  render() {
    const { modalOpen, modalChildern } = this.props
    const modalState = modalOpen ? 'is-shown' : ''
    const modalClass = `Modal ${modalState}`
    return (
      <div className={modalClass}>
        <div className="Modal-overlay" onClick={this.closeModal}></div>
        <div className="Modal-contents">
          <div className="Modal-close" onClick={this.closeModal}>x</div>
          <div className="Modal-children">{modalChildern}</div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  modalOpen: state.modal.open,
  modalChildern: state.modal.children
})

const mapDispatchToProps = {
  closeModal
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal)