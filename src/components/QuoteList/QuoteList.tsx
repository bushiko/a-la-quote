import React from 'react';
import axios, { AxiosInstance, AxiosResponse } from 'axios';

import Quote from '../Quote/Quote';
import { Quote as QuoteModel } from '../../models/quote.model';

export interface QuoteListState {
    loading: boolean,
    noMore: boolean,
    quotes: QuoteModel[]
}

export interface GQLResult {
    quotes: QuoteModel[],
    total: number
}

class QuoteList extends React.Component<any, QuoteListState> {
    axiosGQL: AxiosInstance;
    pageSize = 3;

    constructor(props: any) {
        super(props);
        this.state = {
            loading: false,
            noMore: false,
            quotes: []
        };

        this.axiosGQL = axios.create({
            baseURL: 'https://alq-alq-graphql.7e14.starter-us-west-2.openshiftapps.com/graphql'
        });
    }

    componentDidMount() {
        window.addEventListener('scroll', this.onScroll);
        this.loadQuotes();
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScroll);
    }

    onScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight ) {
            this.loadQuotes();
        }
    }

    
    loadQuotes() {
        const loading = this.state.loading,
            noMore = this.state.noMore;

        if ( loading || noMore ) {
            return;
        }

        this.setState({loading: true});
        this.axiosGQL.post('', { query: this.getQuoteQuery() })
        .then( (result: AxiosResponse) => {
            const axiosresult = result.data,
                gqlResult: GQLResult = axiosresult.data.paginatedQuotes;

            this.setState({
                loading: false,
                quotes: [
                    ...this.state.quotes,
                    ...gqlResult.quotes
                ],
                noMore: this.state.quotes.length >= gqlResult.total
            });

        }, () => {
            this.setState({loading: false});
        });
    }

    getQuoteQuery() {
        return `
        {
            paginatedQuotes(first: ${this.pageSize}, 
                offset: ${this.state.quotes.length}
            ) {
            total
            quotes {
                appearsIn
                author
                content
                image
                source
                }
            }
        }`;
    }

    render() {
        return (
            <React.Fragment>
                { this.state.quotes.map( quote => <Quote key={quote.content} quote={quote} /> ) }
                {
                this.state.loading &&
                <span className="icon is-large" style={{margin: '0 auto', display: 'block'}}>
                    <i className="fas fa-spinner fa-spin fa-3x"></i>
                </span>
                }
                {
                this.state.noMore &&
                <article className="message is-info">
                    <div className="message-header">
                        <p>This is the end</p>
                    </div>
                    <div className="message-body">
                        Oh jeez! You've reached the end for today, Morty!
                    </div>
                </article>
                }
            </React.Fragment>
        );
    }
}

export default QuoteList;