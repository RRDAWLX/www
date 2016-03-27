
/* 基本信息 BasicInfo */

var BasicTextItem = React.createClass({
	render: function () {
		return (
			<div className='basic-text-item'>
				<span className='basic-text-name'>{this.props.data.name + ':'}</span>
				<span className='basic-text-value'>{this.props.data.value}</span>
			</div>
		);
	}
});

var BasicTexts = React.createClass({
	render: function () {
		var textItems = this.props.data.map(function(item){
			return (<BasicTextItem data={item} />);
		});
		
		return (<div className="basic-texts">{textItems}</div>);
	}
});

var BasicImg = React.createClass({
	render: function () {
		return (<div className='basic-img'><img src={this.props.imgsrc} /></div>);
	}
});

var BasicInfo = React.createClass({
	render: function () {
		return (
			<div className='basic-info'>
				<BasicTexts data={this.props.data.texts} />
				<BasicImg imgsrc={this.props.data.imgsrc} />
			</div>
		);
	}
});
			
			
/* 工作经历 Experiences */
			

/* 专业技能 Skills */

			
/* 简历 Resume */
var Resume = React.createClass({
	render: function () {
		return (
			<div className='resume'>
				<BasicInfo data={this.props.data.basicInfo} />
			</div>
		);
	}
});

			
			
/* render */
ReactDOM.render(
	<Resume data={data} />,
	document.getElementById('main')
);

			
			
			
