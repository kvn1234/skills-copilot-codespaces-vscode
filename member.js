function skillsMember() {
  var member = {
    name: 'John Doe',
    skills: ['JavaScript', 'React', 'Node']
  };
  return member;
}

function removeMember() {
  var member = {
    name: 'John Doe',
    skills: ['JavaScript', 'React', 'Node']
  };
  delete member.name;
  return member;
}