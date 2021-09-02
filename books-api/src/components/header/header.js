import React from 'react';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            category: '',
            sorting: 'relevance'
        }
    }

    handleChange = (e) => {
    if (e.target.name !== 'acceptRules') {
      this.setState({ [e.target.name]: e.target.value });
    } else {
      this.setState({ [e.target.name]: e.target.checked });
    }
  };

    render() {
        const { input } = this.state;
        const { category } = this.state;
        const { sorting } = this.state;
        return (
            <>
                <form name="Book">
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="book" className="col-form-label">Book, author</label>
                            <input type="text" className="form-control" name="book" id="book" value={input} onChange={this.handleChange}/>
                        </div>
                        <button type="submit" className="btn btn-primary">Searching</button>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="category" className="col-form-label">Category</label>
                            <select id="category" name="category" className="form-control" onChange={this.handleChange} value={category}>
                                <option value="all">all</option>
                                <option value="art">art</option>
                                <option value="biography">biography</option>
                                <option value="computers">computers</option>
                                <option value="history">history</option>
                                <option value="medical">medical</option>
                                <option value="poetry">poetry</option>
                            </select>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="sorting" className="col-form-label">Sorting by:</label>
                            <select id="sorting" name="sorting" className="form-control" onChange={this.handleChange} value={sorting}>
                                <option value="relevance">relevance</option>
                                <option value="newest">newest</option>
                            </select>
                        </div>
                    </div>
                </form>
            </>
        )
    }
}