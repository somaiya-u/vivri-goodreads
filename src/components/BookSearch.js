import React from "react";
import {InputGroup,FormControl, Button, Row} from 'react-bootstrap';

class BookSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        input: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  handleChange(input){
    this.setState({input});
  }

  handleSearch(){
    this.props.searchClicked(this.state.input.trim());
  }

  handleClear(){
    this.setState({input: ""});
    this.props.clearClicked();
  }

  render() {
    return (
        <Row className="mt-4">
          <InputGroup className="mb-3">
              <FormControl
                placeholder="Search GoodReads"
                aria-label="Search GoodReads"
                aria-describedby="Search GoodReads"
                value={this.state.input}
                onChange={e => this.handleChange(e.target.value)} 
              />
              <InputGroup.Append>
                <Button variant="outline-secondary" onClick={this.handleSearch}>Search</Button>
                <Button variant="outline-secondary" onClick={this.handleClear}>Clear</Button>
              </InputGroup.Append>
          </InputGroup>
        </Row>
    );
  }
}

export default BookSearch;
