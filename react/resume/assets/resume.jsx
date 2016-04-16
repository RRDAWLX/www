
/* 基本信息 BasicInfo */
var BasicInfo = React.createClass({
	render: function () {
		return (
			<div className='basic-info'>
				<BasicImg imgsrc={this.props.data.imgsrc} />
				<BasicTexts data={this.props.data.texts} />
			</div>
		);
	}
});

var BasicTexts = React.createClass({
	render: function () {
		var textItems = this.props.data.map(function(item, idx){
			return (<BasicTextItem data={item} key={idx} />);
		});
		
		return (<div className="basic-texts">{textItems}</div>);
	}
});

var BasicTextItem = React.createClass({
	render: function () {
		var data = this.props.data;
		
		return (
			<div className='basic-text-item'>
				<i className={data.icon}></i>
				<span className='basic-text-name'>{data.name + ':'}</span>
				<span className='basic-text-value'>{data.value}</span>
			</div>
		);
	}
});

var BasicImg = React.createClass({
	render: function () {
		return (<div className='basic-img'><img src={this.props.imgsrc} /></div>);
	}
});
			
			
/* 工作经历 Experience */
var Experience = React.createClass({
	render: function () {
		var data = this.props.data,
			company = data.company,
			duty = data.duty,
			projects = data.projects;

		projects = projects.map(function(project, idx){
			return (<Project data={project} order={idx} key={idx} />);
		});

		return (
			<div className='experience'>
				<div className='expe-title'>
					<i className='icon-desktop'></i>
					{'工作经历' + (this.props.order + 1)}
				</div>
				<Company data={company} />
				<Duty data={duty} />
				{projects}
			</div>
		);
	}
});

var Company = React.createClass({
	render: function () {
		return (
			<div className='company'>
				<span className='company-name'>{this.props.data.name}</span>
				<span className='company-period'>{this.props.data.period}</span>
			</div>
		);
	}
});

var Duty = React.createClass({
	render: function () {
		return (<div className='expe-duty'><span className='expe-duty-title'>工作内容:</span>{this.props.data}</div>);
	}
});

var Project = React.createClass({
	render: function () {
		var data = this.props.data;

		return (
			<div className='project'>
				<div className='project-name'>
					<i className='icon-folder-open'></i>
					{'项目经历' + (this.props.order + 1) + ':' + data.name}
				</div>
				<div className='project-content'>{data.content}</div>
				<div className='project-duty'>{data.duty}</div>
			</div>
		);
	}
});
			

/* 专业技能 Skills */
var Skills = React.createClass({
	render: function () {
		var skills = this.props.data.map(function(skill, idx){
			return (<SkillItem data={skill} order={idx} key={idx} />);
		});

		return (
			<div className='skills'>
				<div className='skills-title'><i className='icon-wrench'></i>专业技能</div>
				{skills}
			</div>
		);
	}
});

var SkillItem = React.createClass({
	render: function () {
		return (<div className='skill-item'>{this.props.order + 1 + '、' + this.props.data}</div>);
	}
});

			
/* 简历 Resume */
var Resume = React.createClass({
	getInitialState: function () {
		return {
			data: {
				"basicInfo" : {
					"texts": [],
					"imgsrc": ''
				},

				experiences: [],

				skills: []
			}
		}
	},

	componentDidMount: function () {
		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function () {
			if(xhr.readyState == 4){
				if((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304){
					eval(xhr.responseText);
					this.setState({data: data});
				}else {
					alert('请求失败：' + xhr.status);
				}
			}
		}.bind(this);
		xhr.open('get', this.props.url, true);
		xhr.send(null);
	},

	render: function () {
		var data = this.state.data,
			experiences = data.experiences.map(function(experience, idx){
				return (<Experience data={experience} order={idx} key={idx} />);
			});

		return (
			<div className='resume'>
				<BasicInfo data={data.basicInfo} />
				{experiences}
				<Skills data={data.skills} />
			</div>
		);
	}
});

			
			
/* render */
ReactDOM.render(
	<Resume url='assets/data.js' class='resume' />,
	document.getElementById('main')
);
	
