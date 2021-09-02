import React from "react";
import cn from 'classnames';
import './pagination.css';

class Pagination extends React.Component {
    constructor(props) {
        super(props);
        const { totalRecords = null, pageLimit = 6 } = props;
        this.pageLimit = typeof pageLimit === 'number' ? pageLimit : 6;
        this.totalRecords = typeof totalRecords === 'number' ? totalRecords : 0;
        this.state = {
            shownBooks: this.pageLimit,
            showButton: this.totalRecords > this.pageLimit ? true : false
        }
    }

    handleClick = () => {
        const { shownBooks } = this.state;
        const { pageLimit } = this.props;
        const { totalRecords } = this.props;
        const pageRest = totalRecords % pageLimit;

        if (shownBooks === totalRecords - pageRest) {
            if (pageRest === 0  ) {
                this.setState({
                    showButton: false
                });
            } else {
                this.setState({
                    showButton: false,
                    shownBooks: shownBooks + pageRest
                })
            }
        } else {
            this.setState({
                shownBooks: shownBooks + pageLimit
            })
        }
    }

    renderItem = (item) => {
        return (
            <>
                <li key={item.index}>
                    <a href="#" >{item}</a>
                </li>
            </>
        )
    }

    render() {
        const { shownBooks } = this.state;
        const { showButton } = this.state;
        console.log(shownBooks, showButton);
        const btnClass = cn({'hidden': !showButton});
        return (
            <>
                <nav aria-label="Books Pagination">
                    <ul className="pagination">
                        {Array(shownBooks).map(this.renderItem)}
                    </ul>
                    <button className={btnClass} onClick={this.handleClick}>Read more...</button>
                </nav>
            </>
        )
    }
}

export default Pagination;
