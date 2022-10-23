import React, {Component} from 'react'

const MContext = React.createContext();  //exporting context object

class VarProvider extends Component {
state = {darkMode: false}
render() {
        return (
            <MContext.Provider value={
            {   state: this.state,
                setDarkMode: (value) => this.setState({
                            darkMode: value })}}>
            {this.props.children}
            </MContext.Provider>)
    }
}

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

export {MContext, VarProvider, classNames}