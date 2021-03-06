const React = require("react");
const {connect} = require("react-redux");

const TopSites = require("components/TopSites/TopSites");
const ActivityFeed = require("components/ActivityFeed/ActivityFeed");
const Spotlight = require("components/Spotlight/Spotlight");

const NewTabPage = React.createClass({
  render() {
    const props = this.props;
    return (<main className="new-tab">
      <div className="new-tab-wrapper">
        <div className="left">
          <TopSites sites={props.TopSites.rows} />
          <Spotlight sites={props.History.rows} />
        </div>
        <div className="right">
          <h3 className="section-title">Top Activity</h3>
          <ActivityFeed sites={props.Bookmarks.rows} length={2} />

          <h3 className="section-title">Yesterday</h3>
          <ActivityFeed sites={props.History.rows} length={6} />
        </div>
      </div>
    </main>);
  }
});

function select(state) {
  return state;
}

module.exports = connect(select)(NewTabPage);
module.exports.NewTabPage = NewTabPage;
