import PropTypes from "prop-types";

function PropTypeBase({ name, using }) {
    return (
        <div>
            <h1>{name}</h1>
            <p>{using ? "used here" : "not used here"}</p>
        </div>
    );
}

PropTypeBase.propTypes = {
    name: PropTypes.any.isRequired,
    // name: PropTypes.string.isRequired,
    using: PropTypes.bool,
};

export default PropTypeBase;
