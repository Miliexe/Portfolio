import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'
import Data from '../data/Panthere.md'

class Panthere extends Component {
    constructor(props) {
        super(props)

        this.state = { terms: null }
        console.log(this)
    }

    componentWillMount() {
        fetch(Data)
            .then((response) => response.text())
            .then((text) => {
                this.setState({ terms: text })
            })
    }

    render() {
        return (
            <article className="markdown-body">
                <ReactMarkdown>{this.state.terms}</ReactMarkdown>
            </article>
        )
    }
}

export default Panthere
