function skillsMember() {
    var skillsMember = document.getElementById('skillsMember');
    var skillsMemberValue = skillsMember.value;
    var skillsMemberValueLength = skillsMemberValue.length;
    var skillsMemberValueLength = skillsMemberValueLength + 1;
    var skillsMemberValueLength = skillsMemberValueLength + ' / 100';
    document.getElementById('skillsMemberLength').innerHTML = skillsMemberValueLength;
}