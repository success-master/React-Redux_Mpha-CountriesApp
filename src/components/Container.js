import React from 'react';
import { connect } from "react-redux";
import axios from 'axios';
import ReactSelectMaterialUi from 'react-select-material-ui';
import { regionAction } from '../actions/regionAction';
import { countryAction } from '../actions/countryAction';
import { resultAction } from '../actions/resultAction';

const baseUrl = `https://pokeapi.co/api/v2/move`;

class Container extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            // 
        }
    }

    async componentDidMount() {
        let data = [];

        // First API for Africa countries(Alternative API)
        await axios.get(`${baseUrl}?offset=0&limit=20`)
            .then(response => {
                Object.keys(response.data.results).forEach((item) => {
                    data.push(response.data.results[item].name);
                })
            })
            .catch(err => console.log(err));

        this.props.resultAction(data);
    }

    async handleRegion(value) {
        this.props.regionAction(value);

        let offset = 0;
        offset = value === 'Africa' ? 0 : value === 'America' ? 20 : value === 'Asia' ? 40 : 60;
        let data = [];

        // API Call for selected region(Alternative API)
        await axios.get(`${baseUrl}?offset=${offset}&limit=20`)
            .then(response => {
                Object.keys(response.data.results).forEach((item) => {
                    data.push(response.data.results[item].name);
                })
            })
            .catch(err => console.log(err));

        this.props.resultAction(data);
        this.props.countryAction('');
    };

    handleCountries(value) {
        this.props.countryAction(value);
    }

    render() {
        const region_options = ['Africa', 'America', 'Asia', 'Europe'];

        return (
            <div className="container" >
                <div className="row">
                    <div className="row g-3">
                        <div className="col-md-6">
                            <ReactSelectMaterialUi
                                value={this.props.region}
                                options={region_options}
                                onChange={(region) => this.handleRegion(region)} />
                        </div>
                        <div className="col-md-6">
                            <ReactSelectMaterialUi
                                SelectProps={{
                                    isClearable: true,
                                }}
                                value={this.props.country}
                                placeholder="Select Country..."
                                options={this.props.result}
                                onChange={(country) => this.handleCountries(country)} />
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

const mapStateToProps = state => ({
    ...state
});

const mapDispatchToProps = (dispatch) => ({
    regionAction: (region) => dispatch(regionAction(region)),
    countryAction: (country) => dispatch(countryAction(country)),
    resultAction: (result) => dispatch(resultAction(result)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Container);