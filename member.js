function skillsMember() {
    var skills = {
        name: 'John Doe',
        age: 30,
        address: '123 Main St',
        skills: ['Javascript', 'HTML', 'CSS'],
        getSkills: function() {
            return this.skills;
        }
    };
    return skills;
}