import React, { useEffect } from 'react'

import { getQuote } from '../actions/index'

import { connect } from 'react-redux'

export const Quote = (props) => {
    useEffect(() => {
        props.getQuote();
    }, [props.getQuote])

    if (props.loading) {
        return <h2>Fetching more Kanye wisdom...</h2>;
      }
      return (
        <>
          <h2>Kanye says: {props.quote} </h2>
          <button onClick={props.getQuote}>Get new quote</button>
        </>
      );
}

const mapStateToProps = (state) => {
    return {
    }
}

export default connect(mapStateToProps, { getQuote })(Quote)