import PropTypes from "prop-types";
import React, { Component } from "react";
import BodySection from "./BodySection";
import { StyleSheet, css } from 'aphrodite';

class BodySectionWithMarginBottom extends Component {
  render() {
    return (
      <div className={css(styles.bodySectionWithMargin)}>
        <BodySection {...this.props}>
        </BodySection>
      </div>
    );
  }
}

BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

const styles = StyleSheet.create({
  bodySectionWithMargin: {
    marginBottom: 40,
  },
});

export default BodySectionWithMarginBottom;