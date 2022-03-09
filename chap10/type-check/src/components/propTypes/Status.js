import PropTypes from "prop-types";
const Status = ({ status }) => {
    return (
        <div>
            <h1>We're {status === "Open" ? "Open!" : "Closed!"}</h1>
        </div>
    );
};

Status.propTypes = {
    // status: PropTypes.string.isRequired,
    status: PropTypes.oneOf(["Open", "Closed"])
};

export default Status;
