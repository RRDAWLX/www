var Comment = React.createClass({
	render: function(){
		return (
			<div className="comment">
			  <h2 className="comment-author">{this.props.author}</h2>
			  {this.props.children}
			</div>
		);
	}
});

var CommentList = React.createClass({
	render: function(){
		var commentNodes = this.props.data.map(function(comment){
			return (
				<Comment author={comment.author} key={comment.id}>{comment.text}</Comment>
			);	
		});
		
		return (
			<div className="comment-list">
			  {commentNodes}
			</div>
		);
	}
});

var CommentForm = React.createClass({
	getInitialState: function(){
		return {author:'', text:''};
	},
	handleAuthorChange: function(e){
		this.setState({author: e.target.value});
	},
	handleTextChange: function(e){
		this.setState({text: e.target.value});
	},
	handleSubmit: function(e){
		e.preventDefault();
		var author = this.state.author.trim(),
			text = this.state.text.trim();
		if(!text || !author){
			return;
		}
		
		this.props.onCommentSubmit({author: author, text: text});
		
		this.setState({author:'', text:''});
	},
	render: function(){
		return (
			<form className="comment-form" onSubmit={this.handleSubmit}>
			  <input 
			  	type="text" 
				placeholder="Your name"
				value={this.state.author}
				onChange={this.handleAuthorChange}
			  />
			  <input 
			    type="text" 
				placeholder="Say something..." 
				value={this.state.text}
				onChange={this.handleTextChange}
			  />
			  <input type="submit" value="Post" />
			</form>
		);
	}
});

var CommentBox = React.createClass({
	getInitialState: function(){
		return {data: []};
	},
	loadCommentsFromServer: function(){
		$.ajax({
			url: this.props.url,
			dataType: 'json',
			cache: false,
			success: function(res){console.log(typeof res);
				this.setState({data: res});
			}.bind(this),
			error: function(x, s, e){
				console.error(this.props.url, s, e.toString());
			}.bind(this)
		});
	},
	handleCommentSubmit: function(comment){
		var comments = this.state.data;
		comment.id = Date.now();
		var newComments = comments.concat([comment]);
		this.setState({data: newComments});
		
		$.ajax({
			url: this.props.url,
			dataType: 'json',
			type: 'POST',
			data: comment,
			success: function(res){
				
			}.bind(this),
			error: function(x,s,e){
				this.setState({data: comments});
				console.error(this.props.url, s, e.toString());
			}.bind(this)
		});
	},
	componentDidMount: function(){
		this.loadCommentsFromServer();
	},
	render: function(){
		return (
			<div className="comment-box">
			  <h1>Comments</h1>
			  <CommentList data={this.state.data} />
			  <CommentForm onCommentSubmit={this.handleCommentSubmit} />
			</div>
		);
	}
});



ReactDOM.render(
	<CommentBox url="comments.php" />,
	document.getElementById('content')
);
