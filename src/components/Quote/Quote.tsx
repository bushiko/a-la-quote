import React from 'react';
import { Link } from 'react-router-dom';
import './Quote.css';
import { Quote as QuoteModel }  from '../../models/quote.model';
import { Source } from '../../models/source.enum';

export interface QuotesProps {
    quote: QuoteModel
}

class Quote extends React.Component<QuotesProps, any> {
    quote: QuoteModel;

    constructor(props: QuotesProps) {
        super(props);

        this.quote = props.quote;
    }

    getSourceClass( quote: QuoteModel ) {
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

    render() {
        return (
            <div className="card alq-quote__container" style={{marginBottom: '40px'}} >
                { this.quote.image &&
                <div className="card-image">
                    <figure className="image is-2by1">
                        <img src={this.quote.image} alt="quote image" />
                    </figure>
                </div>
                }
                <div className="card-content">
                    <p className="title alq-quote__content">
                    "{ this.quote.content}"
                    </p>
                    <small className="subtitle alq-quote__author">
                        <Link to={`/author/${this.quote.author}`}>{this.quote.author}</Link>
                        {this.quote.author ? ', ' : null }
                        <Link to={`/appearsIn/${this.quote.appearsIn}`}>{this.quote.appearsIn}</Link>
                    </small>
                    &nbsp;
                    <span className="icon is-small">
                        <Link to={`/source/${this.quote.source}`}>
                            <i className={'fas ' + this.getSourceClass(this.quote) }></i>
                        </Link>
                    </span>
                </div>
            </div>
        );
    } 
}

export default Quote;