import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchRandomGreeting } from '../store';
import { Link } from 'react-router-dom';

const Greeting = ({ greeting, fetchRandomGreeting }) => {
  useEffect(() => {
    fetchRandomGreeting();
  }, [fetchRandomGreeting]);

  return (
    <div>
      <h2>Random Greeting</h2>
      <p>{greeting}</p>
      <Link to="/">Go Home</Link>
    </div>
  );
};

const mapStateToProps = (state) => ({
  greeting: state.greeting
});

const mapDispatchToProps = {
  fetchRandomGreeting
};

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
