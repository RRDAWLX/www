
/* 基本信息 BasicInfo */
var BasicInfo = React.createClass({displayName: "BasicInfo",
	render: function () {
		return (
			React.createElement("div", {className: "basic-info"}, 
				React.createElement(BasicImg, {imgsrc: this.props.data.imgsrc}), 
				React.createElement(BasicTexts, {data: this.props.data.texts})
			)
		);
	}
});

var BasicTexts = React.createClass({displayName: "BasicTexts",
	render: function () {
		var textItems = this.props.data.map(function(item, idx){
			return (React.createElement(BasicTextItem, {data: item, key: idx}));
		});
		
		return (React.createElement("div", {className: "basic-texts"}, textItems));
	}
});

var BasicTextItem = React.createClass({displayName: "BasicTextItem",
	render: function () {
		var data = this.props.data;
		
		return (
			React.createElement("div", {className: "basic-text-item"}, 
				React.createElement("i", {className: data.icon}), 
				React.createElement("span", {className: "basic-text-name"}, data.name + ':'), 
				React.createElement("span", {className: "basic-text-value"}, data.value)
			)
		);
	}
});

var BasicImg = React.createClass({displayName: "BasicImg",
	render: function () {
		return (React.createElement("div", {className: "basic-img"}, React.createElement("img", {src: this.props.imgsrc})));
	}
});
			
			
/* 工作经历 Experience */
var Experience = React.createClass({displayName: "Experience",
	render: function () {
		var data = this.props.data,
			company = data.company,
			duty = data.duty,
			projects = data.projects;

		projects = projects.map(function(project, idx){
			return (React.createElement(Project, {data: project, order: idx, key: idx}));
		});

		return (
			React.createElement("div", {className: "experience"}, 
				React.createElement("div", {className: "expe-title"}, 
					React.createElement("i", {className: "icon-desktop"}), 
					'工作经历' + (this.props.order + 1)
				), 
				React.createElement(Company, {data: company}), 
				React.createElement(Duty, {data: duty}), 
				projects
			)
		);
	}
});

var Company = React.createClass({displayName: "Company",
	render: function () {
		return (
			React.createElement("div", {className: "company"}, 
				React.createElement("span", {className: "company-name"}, this.props.data.name), 
				React.createElement("span", {className: "company-period"}, this.props.data.period)
			)
		);
	}
});

var Duty = React.createClass({displayName: "Duty",
	render: function () {
		return (React.createElement("div", {className: "expe-duty"}, React.createElement("span", {className: "expe-duty-title"}, "工作内容:"), this.props.data));
	}
});

var Project = React.createClass({displayName: "Project",
	render: function () {
		var data = this.props.data;

		return (
			React.createElement("div", {className: "project"}, 
				React.createElement("div", {className: "project-name"}, 
					React.createElement("i", {className: "icon-folder-open"}), 
					'项目经历' + (this.props.order + 1) + ':' + data.name
				), 
				React.createElement("div", {className: "project-content"}, data.content), 
				React.createElement("div", {className: "project-duty"}, data.duty)
			)
		);
	}
});
			

/* 专业技能 Skills */
var Skills = React.createClass({displayName: "Skills",
	render: function () {
		var skills = this.props.data.map(function(skill, idx){
			return (React.createElement(SkillItem, {data: skill, order: idx, key: idx}));
		});

		return (
			React.createElement("div", {className: "skills"}, 
				React.createElement("div", {className: "skills-title"}, React.createElement("i", {className: "icon-wrench"}), "专业技能"), 
				skills
			)
		);
	}
});

var SkillItem = React.createClass({displayName: "SkillItem",
	render: function () {
		return (React.createElement("div", {className: "skill-item"}, this.props.order + 1 + '、' + this.props.data));
	}
});

			
/* 简历 Resume */
var Resume = React.createClass({displayName: "Resume",
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
				return (React.createElement(Experience, {data: experience, order: idx, key: idx}));
			});

		return (
			React.createElement("div", {className: "resume"}, 
				React.createElement(BasicInfo, {data: data.basicInfo}), 
				experiences, 
				React.createElement(Skills, {data: data.skills})
			)
		);
	}
});

			
			
/* render */
ReactDOM.render(
	React.createElement(Resume, {url: "assets/data.js", class: "resume"}),
	document.getElementById('main')
);
	
