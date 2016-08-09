var SongsContainer = React.createClass({
	componentWillMount(){
		this.fetchSongs();
	},
	fetchSongs() {

		$.ajax({
	      url: this.props.songsPath,
	      dataType: 'json',

	      success: function(data) {
	        this.setState({songs: data});
	      }.bind(this),

	      error: function(data) {
	      	this.setState({songs: []});
	      }.bind(this)
	    });
	},

	searchSongs(event) {
		if (event.target.value) {
    var searchUrl = this.props.searchPath+"?query="+event.target.value;
			$.ajax({
		      url: searchUrl,
		      dataType: 'json',
		      success: function(data) {
		        this.setState({songs: data});
		      }.bind(this),

		      error: function(data) {
		      	this.setState({songs: []});
		      }.bind(this)
		    });
		}
		else{
			this.fetchSongs();
		}

	},

	getInitialState() {
		return { songs: [] };
	},

	render() {

		return (
			<div>
				<Songs songs={this.state.songs} />
				<SongsSearch searchPath={this.props.searchPath} submitPath={this.searchSongs} cancelPath={this.fetchSongs}/>
			</div>
			);

	}
});
