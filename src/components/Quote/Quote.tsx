import React from 'react';
import './Quote.css';
import { Quote as QuoteModel }  from '../../models/quote.model';
import { Source } from '../../models/source.enum';

export interface QuotesProps {
    quote: QuoteModel
}

function getSourceClass( quote: QuoteModel ) {
    switch( quote.source ) {
        case Source.BOOK:
            return 'fa-book';
        case Source.TV:
            return 'fa-tv';
        case Source.MOVIE:
            return 'fa-film';
        default:
            break;
    }
}

const Quote = (props: QuotesProps) => {
    const quote = props.quote;

    if ( !quote ) return <div>Bad prop received</div> ;

    return (
        <div className="card alq-quote__container" style={{marginBottom: '16px'}} >
            { quote.image &&
            <div className="card-image">
                <figure className="image is-2by1">
                    <img src={quote.image} alt="quote image" />
                </figure>
            </div>
            }
            <div className="card-content">
                <p className="title alq-quote__content">
                "{ quote.content}"
                </p>
                <small className="subtitle alq-quote__author">
                { quote.author }{quote.author ? ', ' : null }{ quote.appearsIn }
                </small>
                &nbsp;
                <span className="icon is-small">
                    <i className={'fas ' + getSourceClass(quote) }></i>
                </span>
            </div>
        </div>
    );
}

export default Quote;