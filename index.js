var me = {
	name: 'Sehli',
	last_name: 'Hayate',
	birthday: '06/04/1984',
	github: 'https://github.com/Flyette',
	occupation: 'Web-Développeur',
	
	getFullName: function(){
		return ["Bonjour, je m'appelle ", this.name , " " , this.last_name,"."].join('');
		
	},
	getOccupation: function(){
		return [this.occupation];

	},
	setName: function(name){
		this.name = name;

	},
	getField: function(){	
		return this.github;

	},
	setField: function(x,y){
		this[x] = y;
	},
	getGithub: function(){
		return this.getGithub;

	},
	setGithub: function(g){
		this.github = g;

	},
	getInfos: function(){
		return ["Bonjour, je m'appelle ", this.name , " " , this.last_name,". Je suis ", this.occupation,". Vous trouverez mes projets sur ", this.github,". Je suis née le ", this.birthday,". "].join('');

	},
	
};
console.log(me);
console.log(me.getFullName());
console.log(me.getOccupation());
me.setName = "bidule";
console.log(me);
console.log(me.getInfos());
me.setField('github','https://github.com/Flyette');
console.log(me.getField());

